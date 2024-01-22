/** @format */

import *as yup from "yup"; //should be in that way 


export const  validation = yup.object().shape( {
    email:yup.string().email().required(),
    password: yup.string().min(6).required(),
    confPassword: yup.string().oneOf([yup.ref('password')]).required() //check if the conf password matches with password
})


/*import yup,{ object, string, number, date, InferType } from "yup";
 let AuthObject = object({
  email: string().email(),
  password: string().required(),
});
 */