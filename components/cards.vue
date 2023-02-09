<template>
  <div class="flex flex-wrap items-center justify-around max-w-2xl mt-6 sm:w-full">
    <div class="p-6 mt-6 text-left border w-96 rounded-xl sm:w-full">
      <h3 class="text-2xl font-bold">Enter your stack overflow username</h3>
      <div class="flex flex-col items-center justify-center mt-4">
        <p v-if="userId" class="text-amber-200 mt-2">
          https://stackoverflow.com/users/{{ userId }}/user_name
        </p>
        <p
          v-else
          class="text-amber-200 mt-2"
          v-html="'https://stackoverflow.com/users/{{ User Id }}/display_name'"
        ></p>
        <input
          type="text"
          class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500"
          placeholder="User Id"
          v-model="userId"
        />
        <button
          class="w-full px-4 py-2 mt-2 text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-700 delay-150 transition-all ease-in-out duration-700"
          @click="fetchuser"
        >
          Get stats
        </button>
      </div>
    </div>
    <div v-if="validUserId" class="grid grid-cols-2 gap-4">
      <!-- make a  tailwind grid where 2 cards are shown here -->
      <img :src="`api\${userId}`" alt="" />
      {{ userData }}
    </div>
    <div
      class="mt-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-100 to-pink-100"
      v-else
    >
      Waiting for you to enter valid username
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userId = ref("");
const userData = ref({});
const validUserId = ref(false);

const fetchuser = (userId) => {
  console.log(userId.value);
  return fetch(
    `https://api.stackexchange.com/2.3/users/${userId.value}?site=stackoverflow`
  )
    .then((res) => res.json())
    .then((data) => {
      userData.value = data;
      if (data.items.length > 0) {
        validUserId.value = true;
      } else {
        validUserId.value = false;
      }
    });
};
</script>

<style lang="scss" scoped></style>
