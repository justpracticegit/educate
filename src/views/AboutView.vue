<template>
  <div class="about">
    <div class="abouttop">
      <AboutIntro />
      <div class="abouttopdown">
        <img class="cloudimg" src="@/assets/img/aboutbackgroundcloud.png" alt="">
      </div>
      <div class="container aboutcard">
        <h2>О команде</h2>
        <div class="card" style="width: 18rem;">
            <img src="@/assets/img/aboutteam.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/aboutteam.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/aboutteam.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/aboutteam.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/aboutteam.png" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
        <Statistics />
        <h2>Статьи</h2>
        <div class="background-cloud">
        <div class="container mygrid">
            <div class="card" style="width: 18rem;">
                <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                     <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>   
                    </router-link>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <router-link to="/articles">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
        </div>
        </div>
      <div class="articles">

      </div>
        <Apply class="apply" />
      </div>  
  </div>
</template>
<style scoped>
.about{
  /* background:linear-gradient(180deg, #DFF3FF 0%, #B5E4FF 46.88%, #F9FDFF 100%);; */
}
.abouttop{
  margin-top: 5%;
  /* background: url(@/assets/img/cloudabout1.png) no-repeat left top/50%,
              url(@/assets/img/cloudabout2.png) no-repeat right top/50%; */
}
.cloudimg1{
  position: relative;
  width: 50%;
}
.cloudimg2{
  width: 50%;
  padding-right: 5%;
}
.cloudimg3{
  width: 50%;
}
.cloudimg4{
  width: 50%;
}
.aboutcard{
  display: flex;
  justify-content: space-between;
  margin-top: -550px;

}
background-cloud{
 background: url(@/assets/img/aboutarticlecloud.png) no-repeat;
}
h2{
  text-align: center;
}
.mygrid{
  display: flex;
  justify-content: space-between;
}
.card{
  border-radius: 31px;
  margin-top: 150px;
}
.apply{
margin-top: 172px;
}
h2{
  text-align: center;
}
</style>

<script>
import AboutIntro from '../components/AboutIntro.vue'
import Apply from '../components/Apply'
import Statistics from '@/components/Statistics.vue'
export default {
  name:'AboutView',
  components:{
    AboutIntro,
    Apply,
    Statistics
}
}
</script>
