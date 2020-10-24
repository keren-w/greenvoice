<template>
    <div>
        <v-text-field
            v-model="inputValue"
            :label="label"
            :messages="message"
            required
          ></v-text-field>
    </div>
</template>

<script>
export default {
    name: 'form-input',
    props: ['label', 'message'],
    data() {
        return {
            inputLabel: this.label,
            inputValue: ''
        }
    }
}
</script>