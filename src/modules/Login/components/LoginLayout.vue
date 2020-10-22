<template>
  <div id="login-wrapper">
      <div class="illustration-wrapper">
          <img src="../../../assets/green_login_page.svg">
      </div>
  </div>
</template>

<script>
// import Logo from '../../../components/logo.vue';
export default {
  name: 'login-layout',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #login-wrapper {
        height: 100%;
        display: flex;
            .illustration-wrapper {
            height: 100%;
            width: 50%;
            background-color: #FFDCDC;
            display: flex;
            justify-content: flex-end;
            align-items: center;
                img {
                    height: 60%;
                    position: relative;
                    left: 8%;
                }
        }
    }
</style>
