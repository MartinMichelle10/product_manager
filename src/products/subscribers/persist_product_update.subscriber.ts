import { RabbitPayload, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { Bindings } from '../../rmq/config/bindings';
import { PersistUpdateProductDto } from '../dto';
import { PersistUpdateProductHandler } from '../handlers/persist-update-product.handler';

@Controller()
export class PersistUpdateProductSubscriber {
  constructor(
    private readonly persistUpdateProductHandler: PersistUpdateProductHandler,
  ) {}

  @RabbitSubscribe(Bindings.PERSIST_UPDATE_PRODUCT_REQUESTED)
  async persistCreateProduct(@RabbitPayload() msgDto: PersistUpdateProductDto) {
    console.log('msgDto', msgDto);
    return this.persistUpdateProductHandler.handle(msgDto);
  }
}
