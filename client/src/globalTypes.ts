export type AppState = {
  products: initStateProducts;
  cart: initStateCart;
};

export type initStateProducts = {
  listAll: [];
  listOne:[];
  loading: boolean;
  error: string;
};

export type initStateCart = {
  list: [];
  loading: boolean;
  error: string;
  totalquantity: Number;
};

export type actionTypes = {
  type: string;
  payload: {
    url: string;
    method: string;
    data: string;
    onSuccess: any;
    onError: any;
    onStart: any;
  };
};

export type productTypes = {
  name: string;
  description: string;
  price: number;
  stock:number;
  id: string;
  _id: string;
  categories?: string[];
  sizes: string[];
  variants: string[];
  quantity: number;
  totalPrice: number;
}

export type inputs = {
  name: string;
  price: number;
  stock:number;
  description:string,
  sizes: {
    label: String;
    value: String;
  }[];
  variants: {
    label: String;
    value: String;
  }[];
  categories: {
    label: String;
    value: String;
  }[];
};

export type selectedValue = {
  value: { label: String; value: String };
};
export type selectType = {
  options: { value: string; label: string }[];
  value: { value: string; label: string }[];
  onChange: Object;
  labelledBy: string;
  label: string;
};
export type actionApiType = {
  type: any;
  payload: {
    url: string;
    method: string;
    data: object[];
    onSuccess: object[];
    onError: object[];
    onStart: object[];
  };
};
