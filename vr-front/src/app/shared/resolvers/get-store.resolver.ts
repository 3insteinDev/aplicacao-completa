import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { StoresService } from '../services/stores.service';

export const getStore = (route: ActivatedRouteSnapshot) => {
  const storeService = inject(StoresService);
  return storeService.get(route.paramMap.get('id') as string);
};
