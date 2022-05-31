import axios from "axios"
import * as actions from "../actions/api"
const api = ({dispatch}:any )=> (next: any) =>async (action: { type: string; payload: 
 { url: string; method: string; data: string; onSuccess: any; onError: any; onStart:any }; })=>{
 if (action.type !==actions.apiCallBegan.type ) return next(action);

 const {url,method,data,onSuccess,onError,onStart}=action.payload

 next(action);
 try{
  const response= await axios.request({
   baseURL:"http://localhost:5000/api/v1",
   url,
   method,
   data
  })
  dispatch({type: onSuccess, payload:response.data})
 }catch(error:any){
  dispatch(actions.apiCallFailed(error.message));
  if (onError) dispatch({ type: onError, payload: error.message });
 }
}
export default api;