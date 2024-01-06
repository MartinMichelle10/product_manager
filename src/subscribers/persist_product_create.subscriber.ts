import { RabbitPayload, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { Bindings } from 'src/rmq/config/bindings';
import { PersistCreateProductHandler } from 'src/products/handlers/persist-create-product.handler';

@Controller()
export class PersistCreateProductSubscriber {
  constructor(
    private readonly persistCreateProductHandler: PersistCreateProductHandler,
  ) {}

  @RabbitSubscribe(Bindings.PERSIST_CREATE_PRODUCT_REQUESTED)
  async persistCreateProduct(@RabbitPayload() msgDto: any) {
    return this.persistCreateProductHandler.handle(msgDto);
  }
}
