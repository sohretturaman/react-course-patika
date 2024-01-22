/** @format */

import *as yup from "yup"; //should be in that way 


export const  validation = yup.object().shape( {
    email:yup.string().email('geçereli bir email giriniz!').required('zorunlu alan '), // customizing error messages
    password: yup.string().min(6,'en az 6 karakter olmalidir').required(), 
    confPassword: yup.string().oneOf([yup.ref('password')], 'sifreler uyusmuyor').required() //check if the conf password matches with password
})


/*import yup,{ object, string, number, date, InferType } from "yup";
 let AuthObject = object({
  email: string().email(),
  password: string().required(),
});
 */