<template>
  <div id="login-wrapper">
      <div class="illustration-wrapper" :style="{ backgroundColor: COLORS.illustrationBackground }">
          <img src="../../../assets/green_login_page.svg">
      </div>
      <LoginForm />
  </div>
</template>

<script>
// import Logo from '../../../components/logo.vue';
import LoginForm from './LoginForm.vue';
import {COLORS} from '../../../common/constsants/colors.js';

export default {
  name: 'login-layout',
  components: {
      LoginForm
  },
//   props: {
//     msg: String
//   }
data() {
        return {COLORS}
        },
computed: {
},
methods: {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #login-wrapper {
            @media screen and (max-width: 768px) {
                grid-template-columns: 100%;
        }
        display: grid;
        min-height: 100vh;
        grid-template-columns: 50% 50%;
        .illustration-wrapper {
        @media screen and (max-width: 768px) {
            display: none;
        }
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
            img {
                width: 85%;
                position: relative;
                left: calc(var(--illustrationWidth, 0) * 0.105);
            }
        }
    }
</style>
