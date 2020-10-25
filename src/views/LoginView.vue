<template>
    <LoginLayout/>
</template>

<script>

import LoginLayout from '../modules/Login/components/LoginLayout';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    LoginLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

