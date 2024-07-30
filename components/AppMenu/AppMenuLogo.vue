<script setup lang="ts">

</script>

<template>
  <div class="menu-logo">
    <NuxtLink to="/" class="menu-logo__inner">
      <svgo-logo class="menu-logo__icon "/>
    </NuxtLink>
  </div>

</template>

<style lang="scss" scoped>
.menu-logo {
  $self: &;

  width: max-content;
  margin-bottom: 10px;

  &:hover {
    #{$self}__inner {
      background-color: #e5e5e5;
    }
  }

  &__inner {
    display: inline-flex;
    padding: 12px;
    color: var(--text-color);
    border-radius: 30px;
    transition: background-color 200ms;
  }

  &__icon {
    block-size: 24px;
    inline-size: 24px;
  }
}
</style>
