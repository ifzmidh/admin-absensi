import Sidebar from "@/components/Sidebar.vue";
import { onMounted, reactive, ref } from "vue";
import { getUsers } from "@/service/getUsers";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const products = ref();

    onMounted(() => {
      getUsers().then((data) => (products.value = data));
    });

    return {
      products,
    };
  },
};
