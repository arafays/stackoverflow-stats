<template>
  <div class="flex flex-wrap items-center justify-around max-w-2xl mt-6 sm:w-full">
    <div class="p-6 mt-6 text-left border w-96 rounded-xl sm:w-full">
      <h3 class="text-2xl font-bold">Enter your stack overflow username</h3>
      <div class="flex flex-col items-center justify-center mt-4">
        <input
          type="text"
          class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500"
          placeholder="Username"
          v-model="username"
        />
        <button
          class="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-md hover:from-purple-500 hover:to-pink-600"
          @click="getUser"
        >
          Get stats
        </button>
      </div>
    </div>
    <div>{{ username }}</div>
    <div v-if="userData" class="grid grid-cols-2 gap-4">
      <!-- make a  tailwind grid where 2 cards are shown here -->
      {{ userData }}
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const userData = ref({});

const getUser = () => {
  return fetch(
    `https://api.stackexchange.com/2.3/users/${username.value}?site=stackoverflow`
  )
    .then((res) => res.json())
    .then((data) => {
      userData.value = data;
    });
};
</script>

<style lang="scss" scoped></style>
