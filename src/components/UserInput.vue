<template lang="pug">
.inputContain
  input( v-for="holder in Placeholder" v-model='holder.val' :placeholder='holder.itemName' v-if='holder.itemName!=="PASSWORD"' @keyup.enter="commit()" autofocus)
  input( v-for="holder in Placeholder" v-if='holder.itemName==="PASSWORD"' v-model='holder.val' :placeholder='holder.itemName' type='password' @keyup.enter="commit()")
</template>

<script>

import auth from '../auth'

export default {
  props: {
    Placeholder: Array
  },
  methods: {
    commit () {
      this.$parent.submit()
    }
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
  padding: 5px 3px
  appearance: none
  color: #778899
  &::placeholder
    color: #CECFCF
  &:focus
    outline: none
    color: #778899

</style>
