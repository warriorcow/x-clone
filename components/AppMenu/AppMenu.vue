<script setup lang="ts">
import type { MenuLink } from "~/types/model";
import AppMenuItem from "~/components/AppMenu/AppMenuItem.vue"
import AppMenuLogo from "~/components/AppMenu/AppMenuLogo.vue"

defineProps<{
  links: MenuLink[];
}>()
</script>

<template>
  <div class="menu">
    <AppMenuLogo />
    <AppMenuItem
      v-for="link in links"
      :key="link.id"
      :url="link.url"
      :icon="link.icon"
      :text="link.text"
    />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: grid;
  align-self: self-start;
  gap: 4px 0;
  position: sticky;
  top: 0;
}
</style>
