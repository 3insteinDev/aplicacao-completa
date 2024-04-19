import { inject } from '@angular/core';
import { StoreService } from '../services/store.service';

export const getStores = () => {
  const storesService = inject(StoreService);
  return storesService.getAll();
};
