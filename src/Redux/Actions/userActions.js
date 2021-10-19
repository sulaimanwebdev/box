import { USER_REGISTER_ONE, USER_REGISTER_ONE_ERROR } from "../Constants/userConstants";
import axios from "axios";

/////////////////
//Login action
export const login = (logData) => async (dispatch) => {
    var bodyFormData = new FormData();

    const { email, password } = logData;

    bodyFormData.append('email', email);
    bodyFormData.append('password', password);

    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        if (email && password) {
            console.log(email, password);
            await axios.post(
                "http://backend-env.eba-z5e3ihu2.eu-west-1.elasticbeanstalk.com/login",
                bodyFormData,
                config
            );
        }
    } catch (error) {
        dispatch({
            type: USER_REGISTER_ONE_ERROR,
            payload: error.response
        });
    }
};


//RegisterOne action
export const registerOne = (data) => async (dispatch) => {

    try {
        dispatch({ type: USER_REGISTER_ONE, payload: data });

    } catch (error) {
        dispatch({
            type: USER_REGISTER_ONE_ERROR,
            payload: error.response
        });
    }
};

/////////////////
//RegisterTwo action
export const registerTwo = (contactInfo) => async (dispatch, getState) => {

    const { userFirstName,
        userLastName,
        userDepartment,
        userEmail,
        userMobileNumber,
        userPassword, } = contactInfo;

    try {

        const {
            userRegisterOne: { companyInfo: { organizationNumber,
                companyName,
                companyAddress,
                companyCity,
                poBox,
                companyEmail } }
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "http://backend-env.eba-z5e3ihu2.eu-west-1.elasticbeanstalk.com/register",
            {
                organizationNumber,
                companyName,
                companyAddress,
                companyCity,
                poBox,
                companyEmail
            },
            config
        );
        const { data: { orgId } } = data

        if (orgId) {
            await axios.post(
                "http://backend-env.eba-z5e3ihu2.eu-west-1.elasticbeanstalk.com/user",
                {
                    organizationId: orgId,
                    userFirstName,
                    userLastName,
                    userDepartment,
                    userEmail,
                    userMobileNumber,
                    userPassword,
                    userrole: "CustomerAdmin"
                },
                config
            );
        }


    } catch (error) {
        dispatch({
            type: USER_REGISTER_ONE_ERROR,
            payload: error.response
        });
    }
};