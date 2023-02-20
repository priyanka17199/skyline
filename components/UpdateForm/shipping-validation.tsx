import * as Yup from "yup";

export const ShippingValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field.")
    .min(5, "Name must be atleast 5 characters."),
  address_1: Yup.string().required("The Street Address field is required."),
  email_id: Yup.string().email().required("Please enter valid email."),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number.")
    .positive("A phone number can't start with a minus.")
    .integer("A phone number can't include a decimal point.")
    .min(10)
    .min(10)
    .required("A phone number is required."),
  postal_code: Yup.number()
    .typeError("The Postal Code field must contain only numbers.")
    .min(6, "The Postal Code field must be at least 6 characters in length.")
    .required("The Postal Code field is required."),
  state: Yup.string().required("Please enter your State."),
  city: Yup.string().required("Please select valid City."),
});
