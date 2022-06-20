export const RBAC_RULES = {
  admin: {
    view: ["home", "signin","addProduct","/","profile","users","ModifyUser"],
    actions: ["products:get","products:add","products:delete","products:edit","profile:get","users:get","user:edit","menu:view"],
  },
  user: {
    view: ["home", "signin","profile","ModifyUser","menu"],
    actions: ["products:get","profile:get","user:edit","menu:view"],
  },
};
