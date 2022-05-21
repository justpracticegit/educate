import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfTestView from '../views/ProfTestView.vue'
import CourseView from '../views/CourseView.vue'
import RateView from '../views/RateView.vue'
import ArticleView from '../views/Blog.vue'
import CourseFinance from '../components/CourseFinance.vue'
import RatePurchase from '../components/RatePurchase.vue'
import TrashView from '../components/TrashView.vue'
import TrashStandard from '../components/TrashStandard.vue'
import TrashPremium  from '../components/TrashPremium.vue'
import TrashStandardPremium  from '../components/TrashPremiumStandart.vue'
import PersonalCabinet from '../views/PersonalCabinet.vue'
import PersonalCab from '../views/PersonalCabinetView.vue'
import PersonalCab1 from '../components/PersonelCab1'
import PersonalCab2 from "@/components/PersonalCab2"
import PersonalCab3 from "@/components/PersonalCab3"
import PersonalCabinet4 from "@/components/PersonalCabinet4"
import PersonalCabinet5 from "@/components/PersonalCab5"
import PersonalCab6 from "@/components/PersonalCab6"
import PersonalCab7 from "@/components/PersonalCab7"
import PersonalCab8 from  "@/components/PersonalCab8"
import PersonalCab9 from "@/components/PersonalCab9"
import PersonalCab10 from "@/components/PersonalCab10"
import ProftestBar from '@/components/ProftestBar.vue'
import GetResultProfTest from '@/components/GetResultProfTest.vue'
import CreateAccount from '@/components/CreateAccount.vue'
import GetResult from '@/components/GetResult.vue'
import Payment from '@/components/Payment.vue'
import PersonalCourses from '@/components/PersonalCabinet/PersonalCourses.vue' 
import ResultTest from '@/components/ResultTest.vue'
import Articles from '@/components/Articles.vue'
import Settings from '@/components/PersonalCabinet/Settings.vue'
import Authorization from '@/components/Authorization.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/proftest',
    name:'proftest',
    component:ProfTestView
  },
  {  
    path:'/courses',
    name:'course',
    component:CourseView
  },
  {
    path:'/rates',
    name:'rate',
    component:RateView
  },
  {
    path:'/articles',
    name:'article',
    component:ArticleView
  },
  {
    path:'/finance',
    name:'finance',
    component:CourseFinance
  },
  {
    path:'/purchaseorder',
    name:'ratepurchase',
    component:RatePurchase
  },
  {
    path:'/trash',
    name:'trash',
    component:TrashView
  },
  {
    path:'/trashstandard',
    name:'trashstandard',
    component:TrashStandard
  },
  {
    path:'/trashspremium',
    name:'trashspremium',
    component:TrashPremium 
  },
  {
    path:'/trashstandardspremium',
    name:'trashstandardspremium',
    component:TrashStandardPremium  
  },
  {
    path:'/personal-cabinet',
    name:'PersonalCabinet',
    component: PersonalCabinet
  },
  {
    path:'/perscabinet',
    name:'PersonalCabinetView',
    component: PersonalCab
  },
  {
    path: '/perscabinet1',
    name: 'PersonnelCab1',
    component: PersonalCab1
  },
  {
    path: '/perscabinet2',
    name: 'PersonnelCab2',
    component: PersonalCab2
  },
  {
    path: '/perscabinet3',
    name: 'PersonnelCab3',
    component: PersonalCab3
  },
  {
    path: '/perscabinet4',
    name: 'PersonalCabinet4',
    component: PersonalCabinet4
  },
  {
    path:'/perscabinet5',
    name:'PersonalCabinet5',
    component:PersonalCabinet5
  },
  {
    path:'/perscabinet6',
    name:'PersonalCab6',
    component:PersonalCab6
  },
  {
    path:'/perscabinet7',
    name:'PersonalCab7',
    component:PersonalCab7

  },
  {
    path:'/perscabinet8',
    name:'PersonalCab8',
    component:PersonalCab8

  },
  {
    path:'/perscabinet9',
    name:'PersonalCab9',
    component:PersonalCab9

  },
  {
    path:'/perscabinet10',
    name:'PersonalCab10',
    component:PersonalCab10

  },
  {
    path:'/proftestbar',
    name:'ProftestBar',
    component:ProftestBar

  },
  {
    path:'/completedtest',
    name:'GetResultProfTest',
    component:GetResultProfTest


  },
  {
    path:'/createaccount',
    name:'CreateAccount',
    component:CreateAccount

  },
  {
    path:'/getresult',
    name:'GetResult',
    component:GetResult

  },
  {
    path:'/payment',
    name:'Payment',
    component:Payment

  },
  {
    path:'/personal-course',
    name:'PersonalCourses',
    component:PersonalCourses
  },
  {
    path:'/resulttest',
    name:'ResultTest',
    component:ResultTest

  },
  {
    path:'/blogs',
    name:'Articles',
    component:Articles
  },
  {
    path: '/personal-courses',
    name: 'PersonalCourses',
    component: PersonalCourses
  },
  {
    path: '/register',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path:'/settings',
    name:'Settings',
    component:Settings
  },
  {
    path:'/authorization',
    name:'Authorization',
    component:Authorization
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
