import { RabbitPayload, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';
import { Bindings } from 'src/rmq/config/bindings';
import { UomService } from 'src/products/services/uom.service';

@Controller()
export class PersistCreateProductSubscriber {
  constructor(private readonly uomService: UomService) {}

  @RabbitSubscribe(Bindings.PERSIST_CREATE_PRODUCT_REQUESTED)
  async persistCreateProduct(@RabbitPayload() msgDto: any) {
    const { product, uoms } = msgDto;
    const newUoms = uoms.map((uom) => {
      return { ...uom, product };
    });
    console.log(await this.uomService.create(newUoms[0]));
  }
}
