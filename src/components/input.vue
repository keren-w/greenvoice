<template>
    <div>
        <v-text-field
            v-model="inputValue"
            :counter="10"
            label="label"
            required
          ></v-text-field>
    </div>
</template>

<script>
export default {
    name: 'form-input',
    props: ['label'],
    data() {
        return {
            inputLabel: this.label,
            inputValue: ''
        }
    }
}
</script>
