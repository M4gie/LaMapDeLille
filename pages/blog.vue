<script setup lang="ts">
const { data } = await useFetch('https://catfact.ninja/fact')
</script>

<template>
  <div>
      <pre>Time after hydration: {{ new Date().toUTCString() }} </pre>
      <pre>Time in server rendered HTML: {{ data }}</pre>
  </div>
</template>