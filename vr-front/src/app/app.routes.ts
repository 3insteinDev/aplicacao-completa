import {
  Routes,
} from '@angular/router';
import { ListComponent } from './features/products/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';
import { getStores } from './shared/resolvers/get-stores.resolver';
import { getStore } from './shared/resolvers/get-store.resolver';
import { ListStoreComponent } from './features/stores/list-store/list-store.component';

export const routes: Routes = [
  {
    path: 'products',
    resolve: {
      products: getProducts
    },
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/products/create-product/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: getProduct,
    },
    loadComponent: () =>
      import('./features/products/edit-product/edit.component').then((m) => m.EditComponent),
  },
  {
    path: 'stores',
    resolve: {
      stores: getStores
    },
    component: ListStoreComponent,
  },
  {
    path: 'create-store',
    loadComponent: () =>
      import('./features/stores/create-store/create-store.component').then(
        (m) => m.CreateStoreComponent
      ),
  },
  {
    path: 'edit-store/:id',
    resolve: {
      store: getStore,
    },
    loadComponent: () =>
      import('./features/stores/edit-store/edit-store.component').then((m) => m.EditStoreComponent),
  },
];
