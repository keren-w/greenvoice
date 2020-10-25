<template>
    <div>
        <v-text-field
            v-model="inputValue"
            :label="label"
            :rules="rules"
            :messages="message"
            required
          ></v-text-field>
    </div>
</template>

<script>
export default {
    name: 'form-input',
    props: ['label', 'message', 'rules'],
    data() {
        return {
            inputLabel: this.label,
            inputValue: ''
        }
    }
}
</script>

<style lang="scss">
.v-text-field .v-label {
    font-size: 17px;
    &.v-label--active {
        font-weight: bold;
    }
}
</style>