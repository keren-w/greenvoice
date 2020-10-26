<template>
    <div>
        <v-text-field
            v-model="inputValue"
            :label="label"
            :rules="rules"
            :hint="hint"
            :type="type"
            persistent-hint
            required
          ></v-text-field>
    </div>
</template>

<script>
export default {
    name: 'form-input',
    props: ['label', 'hint', 'rules', 'type'],
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
        font-size: 15px;
        transform: translateY(-20px) scale(1);
    }
}
</style>