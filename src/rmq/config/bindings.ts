import { Binding } from './binding.type';
import { ExchangesNames } from './exchanges';
import { Queues } from './queues';
import { ROUTING_KEYS } from './routing-keys';

export enum BINDINGS_KEYS {
  SAVE_PRODUCT_REQUESTED = 'SAVE_PRODUCT_REQUESTED',
}

export const Bindings: Partial<Record<BINDINGS_KEYS, Binding>> = {
  [BINDINGS_KEYS.SAVE_PRODUCT_REQUESTED]: {
    exchange: ExchangesNames.PRODUCT_MANAGER,
    queue: Queues.PRODUCT_MANAGER_SAVE,
    routingKey: ROUTING_KEYS.SAVE_REQUESTED,
  },
};
