import { Component, signal, computed } from '@angular/core';
import { FktDrawerComponent } from 'frakton-ng/drawer';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
  selector: 'fkt-drawer-wide-example',
  imports: [FktDrawerComponent, FktIconComponent],
  templateUrl: './wide-example.component.html',
  styleUrl: './wide-example.component.scss'
})
export class WideExampleComponent {
  opened = signal(false);
  selectedCategory = signal('all');

  categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'electronics', name: 'Electronics', count: 42 },
    { id: 'clothing', name: 'Clothing', count: 38 },
    { id: 'books', name: 'Books', count: 28 },
    { id: 'home', name: 'Home & Garden', count: 31 },
    { id: 'sports', name: 'Sports & Outdoors', count: 17 }
  ];

  selectedCategoryName = computed(() => {
    const category = this.categories.find(c => c.id === this.selectedCategory());
    return category?.name || 'All Products';
  });

  toggleDrawer() {
    this.opened.set(!this.opened());
  }

  selectCategory(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }
}