<template>
  <header id="header">
    <NavMenu/> 
    <SectionSobre/>
    <SectionResumo/>
  </header>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import SectionSobre from './components/SectionSobre.vue'
import SectionResumo from './components/SectionResumo.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    SectionSobre,
    SectionResumo
  }
}
</script>

<style>
  @import url('style.css')
</style>
