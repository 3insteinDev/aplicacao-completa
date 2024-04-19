import { Store } from "./store.interface";

export type StorePayload = Omit<Store, 'id'>;