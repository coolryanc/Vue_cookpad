<template lang="pug">
  #app
    //- router-link(:to="{name: 'user'}") LOGIN
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

@import "./sass/variables"

html, body
  padding: 0
  margin: 0
  width: 100%
  height: 100%
  background-color: #FAFAF5
  position: relative

#app
  width: 100%
  height: 100%

</style>
