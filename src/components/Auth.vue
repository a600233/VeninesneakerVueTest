<template>
  <div>
    <h1 class="Vue-title">Sign in</h1>
    <br>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  name: 'auth',
  mounted () {
    auth.authForm('#firebaseui-auth-container')
  }
}
</script>

<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
  #firebaseui-auth-container{
   height: 100vh;
  }
</style>
