 import ResponseError from "../../utils/response-error.js";
import { get_detail_account_by_id, update_detail_account_by_id } from "./profile.repository.js";

export const GET_DETAIL_ACCOUNT_BY_ID = async (id) => {
    const response = await get_detail_account_by_id(id)
    return response
}

 export const UPDATE_DETAIL_ACCOUNT_BY_ID = async (id, user) => {
     if (!id || !user.address || !user.phone) {
         throw new ResponseError(400, "Please fill in all fields");
     }
     const response = await update_detail_account_by_id(id, user)
     return response
 }