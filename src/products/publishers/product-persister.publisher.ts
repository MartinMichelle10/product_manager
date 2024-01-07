import { Injectable } from '@nestjs/common';
import { BasePublisher } from '../../rmq/base-publisher';
import { ExchangesNames } from '../../rmq/config/exchanges';
import { ROUTING_KEYS } from '../../rmq/config/routing-keys';

@Injectable()
export class PersistProductPublisher extends BasePublisher {
  sendCreate(dto: any) {
    return super.publish<any>(
      ExchangesNames.PRODUCT_MANAGER,
      ROUTING_KEYS.PERSIST_CREATE_PRODUCT_REQUESTED,
      dto,
      {},
    );
  }
  sendUpdate(dto: any) {
    return super.publish<any>(
      ExchangesNames.PRODUCT_MANAGER,
      ROUTING_KEYS.PERSIST_UPDATE_PRODUCT_REQUESTED,
      dto,
      {},
    );
  }
}
