<template>
  <div id="app" class="text-white bg-slate-700">
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div
        class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
      >
        <h1
          class="text-4xl font-bold underline text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-500"
        >
          Stack overflow Stats
        </h1>
        <h3 class="text-2xl text-rose-400">Beautiful stats for your github profile</h3>

        <cards user="user"></cards>
      </div>
    </div>
  </div>
</template>
