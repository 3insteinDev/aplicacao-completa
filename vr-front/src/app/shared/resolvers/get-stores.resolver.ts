import { inject } from '@angular/core';
import { StoresService } from '../services/stores.service';

export const getStores = () => {
  const storeService = inject(StoresService);
  return storeService.getAll();
};
