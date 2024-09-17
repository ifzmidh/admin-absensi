<template>
  <div class="flex flex-col items-start justify-between border border-1 rounded-xl p-2">
    <div class="w-full">
      <h2 class="text-xl">SHOWROOM MOBIL</h2>
      <Menu :model="items" class="mt-5">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </template>
      </Menu>
    </div>
    <Menu :model="menuBottom" class="cursor-pointer" @click="toggleDarkMode()" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const items = ref([
  {
    label: "Dashboard",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Data User",
    icon: "pi pi-user",
    route: "/users",
  },
  {
    label: "Data Absensi",
    icon: "pi pi-calendar",
    url: "/attendance",
  },
  {
    label: "Data Izin",
    icon: "pi pi-calendar-minus",
    url: "/permit",
  },
  {
    label: "Data Sakit",
    icon: "pi pi-sparkles",
    url: "/sick",
  },
  {
    label: "Data Cuti",
    icon: "pi pi-sun",
    url: "/leave",
  },
]);
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
</script>
