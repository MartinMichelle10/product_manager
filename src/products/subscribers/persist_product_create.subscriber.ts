import { RabbitPayload, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { Bindings } from '../../rmq/config/bindings';
import { PersistCreateProductHandler } from '../../products/handlers/persist-create-product.handler';
import { PersistCreateProductDto } from '../dto';

@Controller()
export class PersistCreateProductSubscriber {
  constructor(
    private readonly persistCreateProductHandler: PersistCreateProductHandler,
  ) {}

  @RabbitSubscribe(Bindings.PERSIST_CREATE_PRODUCT_REQUESTED)
  async persistCreateProduct(@RabbitPayload() msgDto: PersistCreateProductDto) {
    return this.persistCreateProductHandler.handle(msgDto);
  }
}
