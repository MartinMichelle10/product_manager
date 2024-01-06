type Image = {
  imageUrl: string;
};

type Barcode = {
  barcode: string;
};

type Addon = {
  name: string;
};

type UOM = {
  name: string;
  price: number;
  images: Image[];
  barcodes: Barcode[];
  addon: Addon;
};

export type PersistUpdateProductDto = {
  uoms: UOM[];
  product: {
    name: string;
    id: number;
  };
};
