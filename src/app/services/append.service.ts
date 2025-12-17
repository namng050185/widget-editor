import { Injectable, ComponentRef, ViewContainerRef, TemplateRef, Type, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export interface ModalConfig {
  component?: Type<any>;
  template?: TemplateRef<any>;
  data?: any;
  title?: string;
  width?: string;
  closeOnBackdrop?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppendService {
  private modalSubject = new Subject<{ show: boolean; config?: ModalConfig }>();
  public modal$ = this.modalSubject.asObservable();
  
  private closeSubject = new Subject<any>();
  public close$ = this.closeSubject.asObservable();
  
  private viewContainerRef?: ViewContainerRef;
  private componentRef?: ComponentRef<any>;
  private pendingConfig?: ModalConfig;

  setViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
    // If there's a pending config, create component now
    if (this.pendingConfig && this.viewContainerRef) {
      this.createComponent(this.pendingConfig);
      this.pendingConfig = undefined;
    }
  }

  showModal(config: ModalConfig): void {
    // Clear previous component if exists
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = undefined;
    }

    // Store config first
    this.pendingConfig = config;

    // Emit show event to ensure modal is rendered
    this.modalSubject.next({ show: true, config });
  }

  private createComponent(config: ModalConfig): void {
    if (!this.viewContainerRef) {
      console.error('ViewContainerRef chưa được set.');
      return;
    }

    // Create component instance
    if (config.component) {
      this.componentRef = this.viewContainerRef.createComponent(config.component);

      if (!this.componentRef) return;
      // Pass data to component if provided
      if (config.data) {
        // Set each property from data as input
        Object.keys(config.data).forEach(key => {
          this.componentRef?.setInput(key, config.data[key]);
        });
      }

      // Subscribe to component's close event if it exists
      if (this.componentRef.instance.close && this.componentRef.instance.close instanceof EventEmitter) {
        this.componentRef.instance.close.subscribe((data?: any) => {
          this.closeModalWithData(data);
        });
      }
    }
  }

  closeModalWithData(data?: any): void {
    // Emit data before closing
    this.closeSubject.next(data);
    this.closeModal();
  }

  triggerComponentCreation(): void {
    // This method is called after ViewContainerRef is set in modal
    // The component should already be created via setViewContainerRef
  }

  closeModal(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
    this.modalSubject.next({ show: false });
  }

  isModalOpen(): boolean {
    return this.componentRef !== undefined;
  }
}

