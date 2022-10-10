import { CUSTOMER_NAME, USERNAME, PASSWORD } from "./LoginTypes";

export const CustomerName = (cust_name) => {
    return {
        type: CUSTOMER_NAME,
        payload:cust_name
    }
}

export const Username = (username) => {
    return {
        type: USERNAME,
        payload:username
    }
}

export const Password = (password) => {
    return {
        type: PASSWORD,
        payload:password
    }
}