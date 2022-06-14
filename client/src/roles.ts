export const RBAC_RULES = {
  admin: {
    view: ["home", "signin","addProduct","/","profile","users"],
    actions: ["products:get","products:add","products:delete","products:edit","profile:get","users:get"],
  },
  user: {
    view: ["home", "signin","profile","ModifyUser"],
    actions: ["products:get","profile:get","user:edit"],
  },
};
