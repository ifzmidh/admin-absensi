import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username wajib diisi")
    .min(5, "Panjang username minimal 5"),
  password: yup.string().required("Password wajib diisi"),
});
