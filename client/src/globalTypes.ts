export type AppState = {
  products: initState
};

export type initState = {
  list: [];
  isLoading: boolean;
  error: string
};

export type actionTypes = {
  type: string
  payload: {
    url: string
    method: string
    data: string
    onSuccess: any
    onError: any
    onStart: any
  };
};

export type productTypes={
name:string
  description:string
  price:number
  _id:string
  categories:[]

}