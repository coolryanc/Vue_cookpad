<template lang="pug">
.inputContain
  input( v-for="holder in Placeholder" v-model='holder.val' :placeholder='holder.itemName' v-if='holder.itemName!=="PASSWORD"')
  input( v-for="holder in Placeholder" v-if='holder.itemName==="PASSWORD"' v-model='holder.val' :placeholder='holder.itemName' type='password')
</template>

<script>

import auth from '../auth'

export default {
  props: {
    Placeholder: Array
  },
  route: {
    canActivate () {
      return auth.user.authenticated
    }
  }
}
</script>

<style lang="sass" scoped>

@import "../sass/variables"

input
  border: none
  border-bottom: solid 1px #B2B1B2
  margin: 10px
  font-size: 1em
  padding: 5px 0
  appearance: none
  &::placeholder
    color: #CECFCF
  &:focus
    outline: none

</style>
