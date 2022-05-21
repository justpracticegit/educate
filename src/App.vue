<template>
    <HeaderPage />
    <router-view/>
    <Footer class="footerpage" />
</template>
<script>
 import Footer from './components/FooterPage.vue'
 import HeaderPage from "@/components/HeaderPage";
 export default {
   name:'App',
   components:{
     HeaderPage,
     Footer
   },
 }
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif !important;
}

html {
    box-sizing: border-box;
}
body {
    font-style: normal;
    font-size: 16px;
    line-height: 1.2;
    font-weight: normal;
    padding: 0;
    margin: 0;
}

@media (min-width:1400px){
    .container{
        max-width:1663px !important;
    }
}
</style>
