import NavMenu from './components/NavMenu.vue'
import SectionSobre from './components/SectionSobre.vue'
import SectionResumo from './components/SectionResumo.vue'
import SectionTech from './components/SectionTech.vue'
import SectionHome from './components/SectionHome.vue'
import SectionFooter from './components/SectionFooter.vue'
import './style.css';

export default {
  name: 'App',
  components: {
    NavMenu,
    SectionHome,
    SectionSobre,
    SectionTech,
    SectionResumo,
    SectionFooter
  }
}