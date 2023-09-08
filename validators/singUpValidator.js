 import joi from "joi";
 import joiPwd from "joi-password-complexity";

 const passwordOptions = {
    min: 6,
    max: 12,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    requirementCount: 2,
  }

 const singUpSchema = joi.object({
    name: joi.string().required().min(3).max(15).messages({
      "string.empty": "NAME_REQUIRED",
      "string.min": "NAME_TOO_SHORT",
      "any.required": "NAME_REQUIRED",
      "string.max": "NAME_TOO_LONG"
    }),
    lastName: joi.string().required().messages({
      "string.empty": "LASTNAME_REQUIRED",
      "string.min": "LASTNAME_TOO_SHORT",
      "any.required": "LASTNAME_REQUIRED",
      "string.max": "NAME_TOO_LONG"
    }),
    email: joi.string().required().email().messages({
      "any.required": "EMAIL_REQUIRED",
      "string.empty": "EMAIL_REQUIRED",
      "string.email":"INVALID_EMAIL"
    }),
    password: joiPwd(passwordOptions).messages({
      "string.empty":"PASWORD_REQUIRED",
      "passwordComplexity.tooShort": "PASSWORD_TOO_SHORT",
      "passwordComplexity.tooLong":"PASSWORD_TOO_LONG",
      "passwordComplexity.lowercase":"LOWERCASE_REQUIRED",
      "passwordComplexity.uppercase":"UPPERCASE_REQUIRED"
    }),
    photo: joi.string().uri().optional().messages({
      "string.uri":"INVALID_URI"
    }),
    country: joi.string()
 })/* .messages({
   "any.required": "Some data schema are required"
 }) */

 export default singUpSchema