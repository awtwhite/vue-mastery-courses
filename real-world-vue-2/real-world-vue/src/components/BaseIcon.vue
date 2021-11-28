<template>
  <!-- `v-html="svg"` will render what is returned from the computed property 'svg'
  as the inner HTML of the element -->
  <div class="icon-wrapper" v-html="svg"></div>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: {
    name: String, // The name of the symbol we want to use.
    width: {
      type: [Number, String], // Type can be a number or a string.
      default: 24
    },
    height: {
      type: [Number, String], // Type can be a number or a string.
      default: 24
    }
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: 'icon',
        width: this.width,
        height: this.height
      })
    }
  }
}
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 6px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
