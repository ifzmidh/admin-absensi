<template>
  <div class="h-screen w-screen">
    <div class="h-full w-full flex justify-center items-center">
      <div class="p-10 border rounded-xl flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">Login</h1>
        <div class="mt-8">
          <p>Username</p>
          <InputText class="mt-2" id="username" v-model="username" />
        </div>
        <div class="mt-5">
          <p>Password</p>
          <Password
            class="mt-2"
            id="password"
            :feedback="false"
            v-model="password"
          />
        </div>
        <Button @click="submit" label="Submit" class="mt-10 w-full font-bold" />

        <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

const username = ref(null);
const password = ref(null);

const submit = () => {
  if (username.value == "admin" && password.value == "admin") {
    router.push("/dashboard");
  }
};

function toggleDarkMode() {
  const element = document.querySelector("html");
  element.classList.toggle("my-app-dark");
}
</script>
