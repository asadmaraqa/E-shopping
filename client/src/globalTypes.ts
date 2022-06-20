export type AppState = {
  products: initStateProducts;
  cart: initStateCart;
  users: initStateUsers;
};

export type initStateProducts = {
  listAll: [];
  listOne: [];
  loading: boolean;
  error: string;
};
export type initStateUsers = {
  list: any[];
  currentUser: userTypes[];
  loading: boolean;
};
export type userTypes = {
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
export type buttonProps = {
  title: string;
  onClick?: Function;
  disable?: boolean;
  className: string;
};
export type initStateCart = {
  list: [];
  loading: boolean;
  error: string;
  totalquantity: Number;
  totalPrice: number;
};
export type productInit = {
  products: {
    loading: boolean;
    error: boolean;
    errorName: string;
    search: productTypes[];
    listAll: productTypes[];
  };
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

export type inputs = {
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
export type searchContextProps = {
  onChange: any;
  input: string;
};
export type cartTypes = {
  list: {
    quantity: number;
    totalPrice?: number;
    _id: string;
    price?: number;
    name: string;
  }[];
  totalquantity: number;
};
export type productSliceTypes = {
  listAll: object[];
  loading: boolean;
  error: boolean;
};
export type searchBarTypes = {
  list: string[];
  loading: boolean;
  error: boolean;
};
