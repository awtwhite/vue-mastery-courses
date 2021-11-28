<template>
  <h1>Showing event #{{ id }}</h1>
</template>

<script>
export default {
  props: ['id'] // Prop value is passed from our dynamic route.
}
</script>
