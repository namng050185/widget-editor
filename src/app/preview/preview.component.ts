import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewTitle } from './components/preview-title/preview-title';
import { PreviewTile } from './components/preview-tile/preview-tile';
import { PreviewHtml } from './components/preview-html/preview-html';
import { PreviewHighlight } from './components/preview-highlight/preview-highlight';
import { PreviewSearchBar } from './components/preview-search-bar/preview-search-bar';
import { PreviewBanner } from './components/preview-banner/preview-banner';
import { PreviewCategories } from './components/preview-categories/preview-categories';
import { PreviewNews } from './components/preview-news/preview-news';
import { PreviewTopArticles } from './components/preview-top-articles/preview-top-articles';
import { PreviewSupport } from './components/preview-support/preview-support';
import { PreviewHelpTopics } from './components/preview-help-topics/preview-help-topics';
import { PreviewFaq } from './components/preview-faq/preview-faq';
import { PreviewDownload } from './components/preview-download/preview-download';
import { PreviewStepByStep } from './components/preview-step-by-step/preview-step-by-step';
import { PreviewFeedback } from './components/preview-feedback/preview-feedback';
import { PreviewProductComparison } from './components/preview-product-comparison/preview-product-comparison';
import { PreviewProductFeature } from './components/preview-product-feature/preview-product-feature';
import { PreviewImage } from './components/preview-image/preview-image';
import { PreviewWebForm } from './components/preview-web-form/preview-web-form';
import { PreviewEmbededView } from './components/preview-embeded-view/preview-embeded-view';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    CommonModule,
    PreviewTitle,
    PreviewTile,
    PreviewHtml,
    PreviewHighlight,
    PreviewSearchBar,
    PreviewBanner,
    PreviewCategories,
    PreviewNews,
    PreviewTopArticles,
    PreviewSupport,
    PreviewHelpTopics,
    PreviewFaq,
    PreviewDownload,
    PreviewStepByStep,
    PreviewFeedback,
    PreviewProductComparison,
    PreviewProductFeature,
    PreviewImage,
    PreviewWebForm,
    PreviewEmbededView
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  @Input() widgets: any[] = [];
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // Xử lý logic drop widget ở đây
    console.log('Widget dropped');
  }
}

