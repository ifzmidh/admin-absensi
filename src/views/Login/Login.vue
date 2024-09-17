<template>
  <div class="h-screen w-screen">
    <div class="h-full w-full flex justify-center items-center">
      <div class="p-10 border rounded-xl flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">Login</h1>
        <div class="mt-8">
          <form @submit.prevent="submitForm">
            <div>
              <div class="flex items-center">
                <p>Username<i class="text-red-500">*</i></p>
                <p v-if="errors.username" class="text-red-500 text-xs">
                  {{ errors.username }}
                </p>
              </div>
              <InputText class="mt-2" id="username" v-model="values.username" />
            </div>
            <div class="mt-5">
              <p>Password</p>
              <Password
                class="mt-2"
                id="password"
                :feedback="false"
                v-model="values.password"
              />
            </div>
            <Button type="submit" label="Submit" class="mt-10 w-full" />
          </form>

          <Menu
            :model="menuBottom"
            class="mt-5 cursor-pointer"
            @click="toggleDarkMode()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
