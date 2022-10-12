import { USERNAME } from "./ProfileTypes";

export const userNameRedux = (user_name) => {
  return {
    type: USERNAME,
    payload:user_name
  }
}