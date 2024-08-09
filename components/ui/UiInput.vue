<script setup lang="ts">
const props = withDefaults(defineProps<{
  placeholder?: string
  type?: string
  variant?: 'filled' | 'default' | 'simple'
}>(), {
  type: 'text'
});

const emit = defineEmits(['value']);

const inputValue = ref('');

const isFilled = computed((): boolean => {
  return props.variant === 'filled';
});

const isDefault = computed((): boolean => {
  return props.variant === 'default';
});

const isSimple = computed((): boolean => {
  return props.variant === 'simple';
});

const hasValue = computed(() => {
  return inputValue.value.length > 0;
});

watch(() => inputValue.value, (value) => {
  emit('value', value)
})
</script>

<template>
  <label class="inline-flex rounded-lg border-2 relative px-6 pt-5 pb-2 text-gray-500 group focus-within:border-blue-500">
    <span
      :class="{'[&&]:translate-y-1 [&&]:text-blue-500 [&&]:text-xs': hasValue}"
      class="absolute top-0 left-6 translate-y-3.5 gro group-focus-within:translate-y-1 group-focus-within:text-xs group-focus-within:text-blue-500 transition-all pointer-events-none"
      v-text="placeholder"
    />
    <input autocomplete="one-time-code" class="outline-0 w-full text-black" :type="type" v-model="inputValue" >
  </label>
</template>
