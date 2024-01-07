type Image = {
  imageUrl: string;
  id: number;
};

type Barcode = {
  barcode: string;
  id: number;
};

type Addon = {
  name: string;
  id: number;
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
