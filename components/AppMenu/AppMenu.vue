<script setup lang="ts">
import type { MenuLink } from "~/types/model";
import AppMenuItem from "~/components/AppMenu/AppMenuItem.vue"
import AppMenuLogo from "~/components/AppMenu/AppMenuLogo.vue"

defineProps<{
  links: MenuLink[];
}>()
</script>

<template>
  <nav class="grid gap-1">
    <AppMenuLogo />
    <AppMenuItem
      v-for="link in links"
      :key="link.id"
      :url="link.url"
      :icon="link.icon"
      :text="link.text"
      :active="link.active"
    />
  </nav>
</template>
