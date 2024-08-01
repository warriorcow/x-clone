<script setup lang="ts">
import { useElementBounding, useScroll, useWindowSize } from "@vueuse/core";
import { watch, ref, onMounted } from "vue";
import type { Ref } from "vue"

const boxRef: Ref<HTMLElement | null> = ref(null);
const { height: windowHeight } = useWindowSize();
const { height: elementHeight, y: elementY } = useElementBounding(boxRef);
const { directions } = useScroll(window);

const coordinate = ref('0px');
const offset = ref('0px');
const styleSticky = ref<{ [key: string]: string }>({ top: '0px' });
const isSmall = ref(true);

onMounted((): void => {
  init();
});

watch(() => windowHeight.value, (value: number): void => {
  isSmall.value = value > elementHeight.value;
});

watch(() => isSmall.value, (value: boolean): void => {
  if (value) {
    init('top')
  }
});

watch(() => directions.top, (value: boolean): void => {
  if (value) {
    init('bottom');
  }
});

watch(() => directions.bottom, (value: boolean): void => {
  if (value) {
    init('top');
  }
});

function init(direction: 'bottom' | 'top' = 'top'): void {
  if (!boxRef.value) return;

  if (windowHeight.value > elementHeight.value) {
    offset.value = '0px';
    coordinate.value = '0px';
    styleSticky.value = { top: '0px' };
    return
  }

  coordinate.value = `${window.innerHeight - elementHeight.value}px`;
  offset.value = `${window.scrollY + elementY.value}px`
  styleSticky.value = {[direction]: coordinate.value};
}
</script>

<template>
  <div class="h-full">
    <div :style="{ marginTop: offset }" />
    <div
      class="sticky"
      ref="boxRef"
      :style="styleSticky"
    >
      <slot />
    </div>
  </div>
</template>
