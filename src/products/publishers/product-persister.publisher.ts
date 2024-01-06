import { Injectable } from '@nestjs/common';
import { BasePublisher } from 'src/rmq/base-publisher';
import { ExchangesNames } from 'src/rmq/config/exchanges';
import { ROUTING_KEYS } from 'src/rmq/config/routing-keys';

@Injectable()
export class PersistCreateProductPublisher extends BasePublisher {
  send(dto: any) {
    return super.publish<any>(
      ExchangesNames.PRODUCT_MANAGER,
      ROUTING_KEYS.PERSIST_CREATE_PRODUCT_REQUESTED,
      dto,
      {},
    );
  }
}
