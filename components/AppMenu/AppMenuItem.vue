<script setup lang="ts">
defineProps<{
  text: string
  url: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    class="menu-link"
    :to="url"
    exactActiveClass="menu-link__inner--active"
  >
    <div class="menu-link__inner">
      <component
        class="menu-link__icon"
        :is="`svgo-${icon}`"
      />
      <span
        class="menu-link__text"
        v-text="text"
      />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.menu-link {
  $self: &;

  &:hover {
    #{$self}__inner {
      background-color: #e5e5e5;
    }
  }

  &:focus-visible {
    outline: none;
    
    #{$self}__inner {
      outline: 2px solid var(--primary-color);
    }
  }

  &__inner {
    display: inline-flex;
    padding: 12px 20px 12px 12px;
    color: var(--text-color);
    text-decoration: none;
    font-size: 20px;
    line-height: 24px;
    transition: background-color 200ms;
    border-radius: 30px;

    &--active {
      font-weight: 700;
    }
  }

  &__icon {
    margin-right: 20px;
    block-size: 24px;
    inline-size: 24px;
  }
}
</style>
