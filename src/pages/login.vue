<template lang="pug">
.logcontainer
  .tab( @click.self="loginTab" v-bind:class="{ tabStop: !isLogin}") SIGN IN
  .tab( @click.self="signupTab" v-bind:class="{ tabStop: isLogin}") SIGN UP
  loginComponent( v-if="isLogin" )
  signupComponent( v-if="!isLogin" )
</template>

<script>

import UserInput from '../components/UserInput.vue'
import loginComponent from '../components/loginComponent.vue'
import signupComponent from '../components/signupComponent.vue'
import auth from '../auth'

export default {
  data () {
    return {
      tabVal: ['SIGN IN', 'SIGN UP'],
      logPlaceholder: [{itemName: 'USERNAME', val: ''}, {itemName: 'PASSWORD', val:''}],
      signPlaceholder: [{itemName: 'LOCATION', val: ''}, {itemName: 'EMAIL', val: ''}, {itemName: 'USERNAME', val: ''}, {itemName: 'PASSWORD', val: ''}],
      isLogin: true
    }
  },
  components: {
    UserInput,
    loginComponent,
    signupComponent
  },
  methods: {
    loginTab () {
      this.isLogin = true
    },
    signupTab () {
      this.isLogin = false
    }
  }
}

</script>

<style lang="sass" scoped>

@import "../sass/common"
@import "../sass/variables"

.logcontainer
  +center
  width: 620px
  height: 540px
  background-color: white
  box-shadow: 0px 1px 10px rgba(black,0.2)
  overflow: hidden
  font-family: 'Rubik', sans-serif

.logInfoEnter, .signInfoEnter
  width: 100%
  height: calc( 100% - 100px)
  position: absolute
  left: 50%
  transform: translateX(-50%)
  display: flex
  flex-direction: column
  align-items: center
  box-sizing: border-box
  padding: 0
  margin: 0



.tab
  padding: 40px
  box-sizing: border-box
  margin: 0
  width: 50%
  // height: 100px
  background-color: white
  display: inline-block
  font-size: 1.2em
  text-align: center
  // line-height: 100px
  letter-spacing: 5px
  color: #777776
  user-select: none
  cursor: pointer
  transition: 0.1s
  &:hover
    // font-size: 1.4em

.tabStop
  background-color: $tab-bgccolor

a
  float: right
  color: #75BAD8
  letter-spacing: 2px
  text-decoration: none

input, label
  float: left
  letter-spacing: 2px


</style>

<style lang="sass">

@import "../sass/variables"

.logInfoEnter, .signInfoEnter
  .inputContain
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    input
      width: 50%

</style>
