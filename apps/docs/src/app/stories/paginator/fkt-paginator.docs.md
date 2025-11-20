# Pagination

The `FktPagination` component provides a complete server-side pagination solution with configurable display options, responsive design, and full accessibility support.

## Features

- 🚀 **Server-side only** - Designed for real applications with large datasets
- ⚙️ **Highly configurable** - Show/hide any part of the pagination UI
- 📱 **Responsive** - Mobile-friendly layout with proper reordering
- ♿ **Accessible** - Full ARIA support and keyboard navigation
- 🎨 **Themeable** - Customizable via design tokens
- 🔗 **Framework agnostic** - Can be used with any data source

## Basic Usage

```typescript
import {FktPaginatorComponent} from 'frakton-ng/paginator';

@Component({
    imports: [FktPaginatorComponent],
    template: `
    <fkt-paginator 
      [state]="paginationState()"
      (pageChange)="onPageChange($event)"
    />
  `
})
export class MyComponent {
    paginationState = signal({page: 1, pageSize: 20, total: 1547});

    onPageChange(event: FktPaginationEvent) {
        // Call your API with new page/pageSize
        this.loadData(event.page, event.pageSize);
    }

    async loadData(page: number, pageSize: number) {
        const data = await this.apiService.getData({page, pageSize});
        this.paginationState.set({
            page: data.currentPage,
            pageSize: data.pageSize,
            total: data.totalItems
        });
    }
}
```

## Configuration

Control which parts of the pagination are displayed:

```typescript
const config: FktPaginationConfig = {
  showFirstLast: true,     // First/Last page buttons
  showPrevNext: true,      // Previous/Next buttons  
  showPageNumbers: true,   // Individual page numbers
  showPageSize: true,      // Page size selector
  showInfo: true,          // "Showing X to Y of Z results"
  maxVisiblePages: 5,      // Max page numbers visible
  pageSizeOptions: [10, 20, 50, 100] // Available page sizes
};

<fkt-paginator [config]="config" />
```

## Integration Examples

### With Tables
```typescript
<fkt-table [data]="currentPageData()" />
<fkt-paginator 
  [state]="paginationState()"
  (pageChange)="loadTableData($event)"
/>
```

### With Search Results  
```typescript
<search-results [results]="searchResults()" />
<fkt-paginator
  [state]="searchPagination()"
  (pageChange)="searchWithPagination($event)"
/>
```

### With Product Grids
```typescript
<product-grid [products]="products()" />
<fkt-paginator
  [state]="productsPagination()"
  [config]="{ showPageSize: false }"
  (pageChange)="loadProducts($event)"
/>
```

## Responsive Behavior

On mobile devices (< 640px), the pagination automatically reorders:
1. **Page controls** (first/prev/numbers/next/last)
2. **Page size selector**  
3. **Info text** ("Showing X to Y...")

## Accessibility

- Full keyboard navigation support
- ARIA labels on all interactive elements
- Screen reader announcements for page changes
- Focus management for better UX

## Design Tokens

Customize the appearance using design tokens:

```css
:root {
  --fkt-pagination-gap: 1rem;
  --fkt-pagination-controls-gap: 0.25rem;
  --fkt-pagination-info-color: #6b7280;
  --fkt-pagination-mobile-breakpoint: 640px;
}
```

## API Reference

### FktPaginationState
```typescript
interface FktPaginationState {
  page: number;        // Current page (1-based)
  pageSize: number;    // Items per page
  total: number;       // Total number of items
}
```

### FktPaginationEvent
```typescript
interface FktPaginationEvent {
  page: number;        // New page to navigate to
  pageSize: number;    // New page size (if changed)
}
```

### FktPaginationConfig
```typescript
interface FktPaginationConfig {
  showFirstLast?: boolean;      // Show first/last buttons
  showPrevNext?: boolean;       // Show previous/next buttons
  showPageNumbers?: boolean;    // Show page number buttons
  showPageSize?: boolean;       // Show page size selector
  showInfo?: boolean;           // Show info text
  maxVisiblePages?: number;     // Max page buttons visible
  pageSizeOptions?: number[];   // Available page size options
}
```
