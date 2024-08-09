<script setup lang="ts">
</script>

<template>
  <main class="grid grid-cols-[1fr_800px] mx-auto h-dvh">
    <div class="flex items-center justify-center p-6">
      <div class="max-w-[400px] w-full h-fit">
        <svgo-logo class="w-full h-full base-color" />
      </div>
    </div>
    <div class="flex flex-col mt-[5dvh] p-6">
      <h1 class="text-7xl leading-tight font-extrabold">In the <br> know about <br>what's happening</h1>
      <h2 class="text-3xl font-extrabold mt-10">Join today.</h2>
      <slot />
    </div>
  </main>
</template>
