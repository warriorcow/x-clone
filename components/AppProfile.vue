<script setup lang="ts">
import { concatName } from "~/helpers/concatName";
import type { User } from "~/types/model";
import {use} from "h3";

const router = useRouter();

const props = defineProps<{
  user: User
}>();

const fullName = computed(() => {
  return concatName(props.user.firstname, props.user.lastname)
});
</script>

<template>
  <section>
    <div class="flex items-center py-1 px-4 sticky top-0 z-20 backdrop-blur-sm bg-white bg-opacity-90">
      <UiButton
        @click="router.back()"
        class="mr-9"
        variant="simple"
        icon="arrow"
      />

      <div class="flex flex-col">
        <div class="flex items-center text-xl font-bold">
          {{ fullName }}
          <svgo-verified
            v-if="user.verified"
            class="w-5 h-5 ml-1 text-blue-500"
            filled
          />
        </div>
        <div class="text-sm mt-1 text-gray-500">
          {{ user.tabs.posts.data.length }} posts
        </div>
      </div>
    </div>

    <div class="grid gap-y-1 mx-4">
      <div class="-mx-4 h-[200px] z-10">
        <img
          :src="user.cover"
          alt=""
        >
      </div>

      <div class="flex justify-between py-3">
        <div class="h-[132px] w-[132px] bg-blue-50 my-0.5 rounded-full overflow-hidden border-4 border-white -mt-[80px] -mb-[12px] z-10">
          <img
            :src="user.avatar"
            :alt="`${user.lastname}-avatar}`"
          >
        </div>
        <div class="flex gap-3">
          <UiButton
            icon="multidot"
          />
          <UiButton
            icon="messages"
          />
          <UiButton
            text="Follow"
            variant="filled"
          />
        </div>
      </div>

      <div class="pt-5 pb-4 flex flex-col">
        <div class="flex items-center text-xl font-bold">
          {{ fullName }}
          <svgo-verified
            v-if="user.verified"
            class="w-5 h-5 ml-1 text-blue-500"
            filled
          />
        </div>
        <div class="text-sm mt-1 text-gray-500">
          @{{ user.nickname }}
        </div>
      </div>

      <div>{{ user.description }}</div>

      <div class="flex flex-wrap gap-x-3 text-sm py-2">
        <component
          v-for="(external, key) in user.externals"
          :is="external?.link ? 'a' : 'div'"
          :href="external?.link"
          class="group flex text-gray-500"
        >
          <component
            :is="`svgo-${key}`"
            class="w-5 h-5 mr-1"
          />
          <span :class="{'group-hover:underline group-hover:text-blue-500': external?.link}">
          {{ external.text }}
        </span>
        </component>
      </div>

      <div class="flex gap-3">
        <div class="flex gap-1 items-center text-sm">
          <span class="font-bold">{{ user.stats.following }}</span>
          <span class="text-gray-500">Following</span>
        </div>
        <div class="flex gap-1 items-center text-sm">
          <span class="font-bold">{{ user.stats.followers }}</span>
          <span class="text-gray-500">Followers</span>
        </div>
      </div>
    </div>
    <UiTabs :nickname="user.nickname" :tabs="user.tabs" />
  </section>
</template>
