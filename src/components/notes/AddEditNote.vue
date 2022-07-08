<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${ props.bgColor }-dark`"
  >
    <label
      v-if="label"
      class="label has-text-white"
      >{{ props.label }}</label
    >
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          v-autofocus
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="placeholderText"
          ref="textareaRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const textareaRef = ref(null);
/*
props 
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholderText: {
    type: String,
    default: 'Add a new note'
  },
  label: {
    type: String
  }
});

/*
emits 
*/
defineEmits(['update:modelValue']);

/*
methods 
*/
// eslint-disable-next-line no-unused-vars
const focusTextArea = () => {
  textareaRef.value.focus();
};

// exposes child methods to parent component
defineExpose({
  focusTextArea
});

/*
  directives

const vAutofocus = {
  mounted: (el) => {
    el.focus();
  }
}
*/
</script>
