import router from "@/router";
import { ref } from "vue";
import { useForm } from "vee-validate";
import { loginSchema } from "../../validate/Login.js";

export default {
  setup() {
    const { handleSubmit, errors, resetForm, values } = useForm({
      validationSchema: loginSchema,
      initialValues: {
        username: "",
        password: "",
      },
    });

    // Fungsi untuk menangani submit form
    const submitForm = handleSubmit((formData) => {
      console.log("Form data:", formData);
      if (formData.username == "admin" && formData.password == "admin") {
        router.push("/dashboard");
      }
    });

    const menuBottom = ref([
      {
        label: "Dark Mode",
        icon: "pi pi-moon",
        route: "/",
      },
    ]);

    function toggleDarkMode() {
      const element = document.querySelector("html");
      element.classList.toggle("my-app-dark");
    }

    return {
      values,
      errors,
      submitForm,
      resetForm,
      menuBottom,
      toggleDarkMode,
    };
  },
};
