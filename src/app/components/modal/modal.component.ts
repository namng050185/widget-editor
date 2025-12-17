import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ViewContainerRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendService } from '../../services/append.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width: string = '';
  @Input() title: string = '';
  @Input() closeOnBackdrop: boolean = true;
  @Output() close = new EventEmitter<void>();

  @ViewChild('modalContent', { read: ViewContainerRef }) modalContent!: ViewContainerRef;
  @ViewChild('closeButton') closeButton?: any;

  isOpen = false;
  currentWidth: string = 'max-w-2xl';
  currentTitle: string = '';
  currentCloseOnBackdrop: boolean = true;
  private subscription?: Subscription;
  private closeSubscription?: Subscription;

  constructor(private appendService: AppendService) { }

  ngOnInit(): void {
    // Subscribe to modal events
    this.subscription = this.appendService.modal$.subscribe(({ show, config }) => {
      this.isOpen = show;
      if (show && config) {
        // Update modal properties from config
        if (config.width) {
          this.currentWidth = config.width;
        }
        if (config.title) {
          this.currentTitle = config.title;
        }

        if (config.closeOnBackdrop !== undefined) {
          this.currentCloseOnBackdrop = config.closeOnBackdrop;
        }

        document.body.style.overflow = 'hidden';
        // Set ViewContainerRef after modal is rendered and ViewChild is available
        setTimeout(() => {
          if (this.modalContent) {
            this.appendService.setViewContainerRef(this.modalContent);
          }
          // Focus vào nút close
          if (this.closeButton?.nativeElement) {
            this.closeButton.nativeElement.focus();
          }
        }, 100);
      } else {
        document.body.style.overflow = '';
      }
    });

    // Subscribe to close events from component
    this.closeSubscription = this.appendService.close$.subscribe(() => {
      this.onClose();
    });
  }

  ngAfterViewInit(): void {
    // ViewContainerRef will be set when modal opens and view is rendered
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.closeSubscription?.unsubscribe();
    document.body.style.overflow = '';
  }

  onBackdropClick(): void {
    if (this.currentCloseOnBackdrop) {
      this.onClose();
    }
  }

  onClose(): void {
    this.appendService.closeModal();
    this.close.emit();
  }
}

