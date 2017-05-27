<template lang="pug">
.signInfoEnter
  .logTitle SIGN UP FOR <span>Cookpad</span>
  UserInput( :Placeholder="signPlaceholder")
  .logBtn(@click="submit()" ) SIGN UP
  .btnDetial By signing up. You agree our Terms & Privacy policy.
  .errorMsg( v-if='error' ) {{error}}
</template>

<script>

import UserInput from './UserInput.vue'
import user from '../pages/user.vue'
import auth from '../auth'

export default {
  data () {
    return {
      signPlaceholder: [{itemName: 'USERNAME', val: ''}, {itemName: 'PASSWORD', val:''}],
      error: ''
    }
  },
  components: {
    UserInput
  },
  methods: {

    submit() {

      var credentials = {
        username: this.signPlaceholder[0].val,
        password: this.signPlaceholder[1].val
      }
      // console.log(credentials)
      this.$emit('getSignNameData')
      auth.signup(this, credentials, 'user')
    }
  }
}

</script>

<style lang="sass" scoped>

@import "../sass/common"
@import "../sass/variables"

.logTitle
  font-size: 3em
  margin-left: 10px
  color: #330000
  font-weight: 500
  letter-spacing: 1px
  line-height: 100px
  user-select: none

.signInfoEnter
  .logTitle
    font-size: 1.5em
    font-weight: normal
    color: #777776
    span
      font-weight: 600
      color: #330000

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

.errorMsg
  background-color: #75BAD8
  padding: 8px 0
  width: 50%
  text-align: center
  margin-top: 50px
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
