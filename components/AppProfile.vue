<script setup lang="ts">
import { concatName } from "~/helpers/concatName";
import { useLogout } from "~/composables/useLogout";
import type { User } from "~/types/model";
import { useUploadImage } from "~/composables/useUploadImage";

const router = useRouter();
const { isHomePage } = useUserStore();

const props = defineProps<{
  user: User
}>();

async function uploadAvatar({ target }) {
  await useUploadImage('avatar', target.files[0]);
}

async function uploadCover({ target }) {
  await useUploadImage('cover', target.files[0]);
}

const fullName = computed((): string => {
  return concatName(props.user?.firstname, props.user?.lastname)
});
</script>

<template>
  <section>
    <div class="flex items-center py-1 px-4 sticky top-0 z-20 backdrop-blur-sm bg-white bg-opacity-90">
      <div class="mr-9">
        <UiButton
          @click="router.back()"
          variant="simple"
          icon="arrow"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-lg font-bold">
          {{ fullName }}
          <svgo-verified
            v-if="user?.verified"
            class="w-5 h-5 ml-1 text-blue-500"
            filled
          />
        </div>
        <div class="text-sm text-gray-500">
          {{ user?.posts?.data.length ? user?.posts?.data.length : 0 }} posts
        </div>
      </div>
    </div>

    <div class="grid gap-y-1 mx-4">
      <div class="relative -mx-4 h-[200px] z-10 bg-gray-300">
        <img
          v-if="user?.cover"
          :src="user?.cover"
          alt=""
        >
        <label v-if="isHomePage" class="cursor-copy absolute top-0 left-0 w-full h-full">
          <input class="opacity-0 h-0 w-0" type="file" @change="uploadCover">
        </label>
      </div>

      <div class="flex justify-between py-3">
        <div class="flex items-center justify-center relative h-[132px] w-[132px] bg-blue-50 my-0.5 rounded-full overflow-hidden border-4 border-white -mt-[80px] -mb-[12px] z-10">
          <img
            v-if="user?.avatar"
            :src="user?.avatar"
            :alt="`${user?.lastname}-avatar}`"
          >
          <div v-else class="select-none text-6xl font-bold">?</div>
          <label v-if="isHomePage" class="cursor-copy absolute top-0 left-0 w-full h-full">
            <input class="opacity-0 h-0 w-0" type="file" @change="uploadAvatar">
          </label>

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
            @click="useLogout"
          />
        </div>
      </div>

      <div class="pt-5 pb-4 flex flex-col">
        <div class="flex items-center text-xl font-bold">
          {{ fullName }}
          <svgo-verified
            v-if="user?.verified"
            class="w-5 h-5 ml-1 text-blue-500"
            filled
          />
        </div>
        <div class="text-sm mt-1 text-gray-500">
          <div>@{{ user?.nickname }}</div>
        </div>
      </div>

      <div v-if="user?.description">{{ user?.description }}</div>

      <div class="flex flex-wrap gap-x-3 text-sm py-2">
        <component
          v-for="(external, key) in user?.externals"
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
<!--          <span class="font-bold">{{ user?.stats.following }}</span>-->
          <span class="text-gray-500">Following</span>
        </div>
        <div class="flex gap-1 items-center text-sm">
<!--          <span class="font-bold">{{ user?.stats.followers }}</span>-->
          <span class="text-gray-500">Followers</span>
        </div>
      </div>
    </div>
<!--    <UiTabs :nickname="user?.nickname" :tabs="user?.tabs" />-->
  </section>
</template>
