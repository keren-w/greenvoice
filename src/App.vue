<template>
  <div id="app">
    <LoginView/>
  </div>
</template>

<script>
import LoginView from './views/LoginView'

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style lang="scss">

* {
    margin: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: almoni-tzar-regular;
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/02780cc.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/1a7559a.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/30edc32.woff2) format("woff2")
}

@font-face {
    font-family: almoni-tzar-bold;
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/1544c54.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/7828c9c.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/d530ee9.woff2) format("woff2")
}

@font-face {
    font-family: almoni-neue-dl;
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/63c4e58.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/63c4e58.eot#iefix) format("embedded-opentype"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/187b2b4.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/33d46e6.ttf) format("truetype")
}

@font-face {
    font-family: almoni-neue-dl;
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/53061be.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/53061be.eot#iefix) format("embedded-opentype"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/12623d1.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/7d2e862.ttf) format("truetype")
}

@font-face {
    font-family: almoni-neue-dl;
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/80c775e.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/80c775e.eot#iefix) format("embedded-opentype"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/feaf81c.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/904035a.ttf) format("truetype")
}

@font-face {
    font-family: almoni-neue-dl;
    font-weight: 900;
    font-style: normal;
    font-display: fallback;
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/68c22fe.eot);
    src: url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/68c22fe.eot#iefix) format("embedded-opentype"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/257f20a.woff) format("woff"),url(https://cdn.d.greeninvoice.co.il/auth-app/assets/1.0.125/fonts/1e580a8.ttf) format("truetype")
}

.theme--light {
    text-align: right;
    font-family: "almoni-neue-dl", Helvetica, Arial, sans-serif;
    .v-messages {
        font-size: 13.6px;
    }
    &.error--text {
        color: red;
        &.v-label {
            color: #23445a ;
        }
    }
}

input {
    direction: rtl;
}

#app {
  font-family: "almoni-neue-dl", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
