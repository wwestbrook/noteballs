import { watch } from 'vue';

export function useWatchCharacters(valToWatch, maxChars) {
  watch(valToWatch, (newVal, oldVal) => {
    console.log(valToWatch.value)
    if (valToWatch.value.length >= maxChars) {
      alert('Only 100 characters allowed gosh darnit!!!');
    }
  })
}