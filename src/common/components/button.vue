<template>
  <v-btn
      rounded
      x-large
      :color="color"
      :outlined="outlined"
      dark
    >
      {{text}}
</v-btn>
</template>

<script>
export default {
    name: 'button',
    props: ['text', 'color', 'outlined', 'icon'],
    data() {
        return {
            inputLabel: this.label,
            inputValue: ''
        }
    }
}
</script>

<style>

</style>