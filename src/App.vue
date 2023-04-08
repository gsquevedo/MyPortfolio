<template>
  <header id="header">
    <NavMenu/> 
  </header>
  <main id="main">
    <SectionSobre/>
    <SectionTech/>
    <SectionResumo/>
  </main>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import SectionSobre from './components/SectionSobre.vue'
import SectionResumo from './components/SectionResumo.vue'
import SectionTech from './components/SectionTech.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    SectionSobre,
    SectionTech,
    SectionResumo
  }
}
</script>

<style>
  @import url('style.css')
</style>
