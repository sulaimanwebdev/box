import { USER_REGISTER_ONE, USER_REGISTER_ONE_ERROR } from "../Constants/userConstants";

export const userRegisterOneReducer = (state = {}, action) => {
    switch (action.type) {

      case USER_REGISTER_ONE:
        return { companyInfo: action.payload };

      case USER_REGISTER_ONE_ERROR:
        return { error: action.payload };

      default:
        return state;
    }
  };