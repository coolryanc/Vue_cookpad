<template lang="pug">
.container
  .navContain
    .userName Hii!
    .btnSignOut(@click='getbackLogin') SIGN OUT
  .dropzoneContain
    dropzone#myVueDropzone(url="http://localhost:3001/upload" :maxNumberOfFiles='numOfFile')
    //- Droply#myDroply( ref="droplyOne" url="http://localhost:3001/upload")
  .imgContain
</template>

<script>

import auth from '../auth'
import Dropzone from 'vue2-dropzone'
import Droply from 'droply'

export default {
  data () {
      return {
        isclick: false,
        numOfFile: 20,
        name: ''
      }
    },
  methods: {
    getbackLogin () {
      auth.logout()
      this.$router.push({name: 'login'})
    },
    'showSuccess': function (file) {
        console.log('A file was successfully uploaded')
    },
    onSuccess(file) {
      console.log('A file was successfully uploaded')
    },
    removeAll() {
      this.$refs.droplyOne.removeAllFiles()
    }
  },
  components: {
    Dropzone,
    Droply
  }
}

</script>

<style lang="sass" scoped>

@import "../sass/variables"
@import "../sass/common"

.container
  width: 100%
  height: 100%

.navContain
  padding: 0
  margin: 0
  width: 100%
  height: 80px
  background-color: $tab-bgccolor
  display: inline-block
  font-size: 1.2em
  text-align: center
  line-height: 80px
  letter-spacing: 5px
  color: #777776
  user-select: none
  // cursor: pointer
  display: flex
  justify-content: flex-end

.dropzoneContain
  width: 600px
  position: absolute
  left: 50%
  transform: translateX(-50%)
  margin-top: 60px


.btnSignOut
  height: 100%
  width: 140px
  background-color: #282C34
  margin-left: 20px
  font-size: 0.5em
  color: white
  cursor: pointer
  transition: 0.5s
  &:hover
    background-color: black

.dropzone
  // min-height: 300px
  cursor: pointer
  &:hover
    background-color: rgba(66,165,245,0.03)

</style>
