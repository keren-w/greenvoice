<template>
  <div id="login-wrapper">
      <div class="illustration-wrapper">
          <img src="../../../assets/green_login_page.svg">
      </div>
      <div class="form-wrapper">
          <div class="login-form">
              <h1 class="form-title">היי, טוב לראות אותך</h1>
              <Input label="asds"/>
          </div>
      </div>
  </div>
</template>

<script>
// import Logo from '../../../components/logo.vue';
import Input from '../../../components/input.vue';
export default {
  name: 'login-layout',
  components: {
      Input
  },
//   props: {
//     msg: String
//   }
data() {
        return {
        }
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
        height: 100%;
        display: flex;
            .illustration-wrapper {
            @media screen and (max-width: 768px) {
                display: none;
            }
            height: 100%;
            width: 50%;
            background-color: #FFDCDC;
            display: flex;
            justify-content: flex-end;
            align-items: center;
                img {
                    width: 85%;
                    position: relative;
                    left: calc(var(--illustrationWidth, 0) * 0.105);
                }
        }
        .form-wrapper {
            @media screen and (max-width: 768px) {
                width: 100%;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            .form-title {
                font-family: "almoni-tzar-bold";
                font-size: 3.5rem;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 48px;
                text-align: right;
            }
        }
    }
</style>
