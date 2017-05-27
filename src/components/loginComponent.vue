<template lang="pug">
.logInfoEnter
  .logo
    .logImg
    .logTitle Cookpad
  UserInput( :Placeholder="logPlaceholder" )
  .logBtn SIGN IN
  .btnDetial
    input(type="checkbox")
    label Stay signed in
    a(href="") Forgot password?
  .errorMsg( v-if='error' ) {{error}}
</template>

<script>

import user from '../pages/user.vue'
import UserInput from './UserInput.vue'
import auth from '../auth'

export default {
  data () {
    return {
      logPlaceholder: [{itemName: 'USERNAME', val: ''}, {itemName: 'PASSWORD', val:''}],
      error: ''
    }
  },
  components: {
    UserInput,
    user
  },
  methods: {

    submit() {

      var credentials = {
        username: this.logPlaceholder[0].val,
        password: this.logPlaceholder[1].val
      }
      this.$emit('getLogUserName')
      auth.login(this, credentials, 'user')
    }
  }
}

</script>

<style lang="sass" scoped>

@import "../sass/common"
@import "../sass/variables"

.logo
  display: flex
  margin: 30px 0

.logImg
  background-image: url('https://lh3.googleusercontent.com/EKKI-Yd_7nQHMfEo9o4sTnUG9Uv-AGuHF2j3exarqQcg8xYyHg4eCCOY2Jw3SvY9ekI=w300')
  width: 100px
  height: 100px
  background-size: 100% auto
  background-position: center center

.logTitle
  font-size: 3em
  margin-left: 10px
  color: #330000
  font-weight: 500
  letter-spacing: 1px
  line-height: 100px
  user-select: none

.logBtn
  width: 50%
  padding: 10px 0
  margin-top: 30px
  text-align: center
  font-size: 1.1em
  color: white
  font-weight: bold
  letter-spacing: 5px
  background-color: $logBtn-color
  cursor: pointer
  user-select: none
  transition: 0.5s
  &:hover
    background-color: $logBtn-deepcolor

.btnDetial
  font-size: 0.5em
  color: #777776
  margin-top: 10px
  width: 50%
  text-align: center

a
  float: right
  color: #75BAD8
  letter-spacing: 2px
  text-decoration: none

input, label
  float: left
  letter-spacing: 2px

.errorMsg
  background-color: #75BAD8
  padding: 8px 0
  width: 50%
  text-align: center
  margin-top: 10px
  color: white
  border: solid 5px #586172
  font-size: 0.9em
  box-sizing: border-box
  animation: flash 0.5s 3
  @keyframes flash
    0%
      opacity: 1
    50%
      opacity: 0.7
    100%
      opacity: 1

</style>
