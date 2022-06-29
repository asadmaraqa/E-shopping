export type AppState = {
  products: InitStateProducts;
  cart: InitStateCart;
  users: InitStateUsers;
};

export type InitStateProducts = {
  listAll: [];
  listOne: [];
  loading: boolean;
  error: string;
};
export type InitStateUsers = {
  list: any[];
  currentUser: UserTypes[];
  loading: boolean;
};
export type UserTypes = {
  firstName: string;
  secondName: string;
  picture: string;
  email: string;
  phone: number;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  isBanned: boolean;
  _id: string;
};
export type ButtonProps = {
  title: string;
  onClick?: Function;
  disable?: boolean;
  className: string;
};
export type InitStateCart = {
  list: [];
  loading: boolean;
  error: string;
  totalquantity: Number;
  totalPrice: number;
};
export type ProductInit = {
  products: {
    loading: boolean;
    error: boolean;
    errorName: string;
    search: ProductTypes[];
    listAll: ProductTypes[];
  };
};
export type ActionTypes = {
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

export type ProductTypes = {
  name: string;
  description: string;
  price: number;
  stock: number;
  id: string;
  _id: string;
  img: string;
  categories?: string[];
  sizes: string[];
  variants: string[];
  quantity: number;
  totalPrice: number;
};

export type Inputs = {
  name: string;
  price: number;
  stock: number;
  img: string;
  description: string;
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

export type SelectedValue = {
  value: { label: String; value: String };
};
export type SelectType = {
  options: { value: string; label: string }[];
  value: { value: string; label: string }[];
  onChange: Object;
  labelledBy: string;
  label: string;
};
export type ActionApiType = {
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
export type SearchContextProps = {
  onChange: any;
  input: string;
};
export type CartTypes = {
  list: {
    quantity: number;
    totalPrice?: number;
    _id: string;
    price?: number;
    name: string;
  }[];
  totalquantity: number;
};
export type ProductSliceTypes = {
  listAll: object[];
  loading: boolean;
  error: boolean;
};
export type SearchBarTypes = {
  list: string[];
  loading: boolean;
  error: boolean;
};
