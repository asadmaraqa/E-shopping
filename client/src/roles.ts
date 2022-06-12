export const RBAC_RULES = {
  admin: {
    view: ["home", "signin","addProduct","/","profile"],
    actions: ["products:get","products:add","products:delete","products:edit","profile:get","users:get"],
  },
  user: {
    view: ["home", "signin","profile"],
    actions: ["products:get","profile:get","users:get"],
  },
};
