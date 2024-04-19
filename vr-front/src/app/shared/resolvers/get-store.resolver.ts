import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { StoreService } from '../services/store.service';

export const getStore = (route: ActivatedRouteSnapshot) => {
  const storesService = inject(StoreService);
  return storesService.get(route.paramMap.get('id') as string);
};
