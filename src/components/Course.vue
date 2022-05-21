<template>
<div class="course">
  <p class="course-p">Курсы</p>
        <div class="container griding">
            <div class="card cardFinance">
                <img src="../assets/img/course/fin.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Финансы</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <router-link to="/finance">
                    <a class="btn">Описание</a>
                    <!-- <a href="#" class="btn">Описание</a> -->
                   </router-link>
                </div>
            </div>
            <div class="card cardEconomics">
                <img src="../assets/img/course/eco.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Экономика</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardMechanicalEngineering">
                <img src="../assets/img/course/mehe.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Машиностроение</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardMathandScience">
                <img src="../assets/img/course/math.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Математика и наука  оданных </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardFrontendDev">
                <img src="../assets/img/course/front.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">ИТ Фронтенд разработчик</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardBackendDev">
                <img src="../assets/img/course/back.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">ИТ Бэкенд разработчик</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardMarketing">
                <img src="../assets/img/course/mark.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Маркетинг</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <div class="card cardCivilEngineering">
                <img src="../assets/img/course/stro.svg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Строительная инженерия </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn">Описание</a>
                </div>
            </div>
            <button class="btn-watch">Смотреть все</button>
        </div>
</div>
<img class="stair-review" src="../assets/img/stair-review.png" alt="">
</template>

<script>
import axios from "axios";
export default {
  name:'Course',
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    axios
        .get('http://jaryk-back.test-nomad.kz/api/courses')
        .then(response => (
            this.courses = response
        ));
  },

}
</script>

<style scoped>
.course{
    background: 
    url(../assets/img/course/cloud-course.png) no-repeat center/100% 100%;
}
.course-p{
  font-size: 48px;
  text-align: center;
  padding-top: 5%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
}
.griding{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 110px;
    padding-top: 69px;
    padding-bottom: 169px;
}
.cardFinance{
    background: #FFCC64;
    border-radius: 44px;

}
.cardEconomics{
    background: #7BBDFF;
    border-radius: 44px;
}
.cardMechanicalEngineering{
    background: #36CD57;
    border-radius: 44px;
    
}
.cardMathandScience{
    background: #A888EC;
    border-radius: 44px;
}
.cardFrontendDev{
    background: #094CC9;
    border-radius: 44px;
}
.cardBackendDev{
    background: #5D09C9;
    border-radius: 44px;
}
.cardMarketing{
    background: #9D09B5;
    border-radius: 44px;
}
.cardCivilEngineering{
    background: #90274D;
    border-radius: 44px;
}
.card-img-top{
    width: 321px;
    height: 213px;
}
.card-body{
    width: 321px;
    height: 213px;   
}
.card-title{
    border-bottom: 1px solid #F96A38;
}
.btn{
    background-color:#F96A38;
    color: white;
    border-radius: 44px;

}
.btn-watch{
    width: 170px;
    height: 60px;
    border-color: 2px solid #062060;
    color: #062060;
    font-size: 16px;
    border-radius: 44px;
    margin-left: 220%;
}
.stair-review {
  margin-top: -420px;
  margin-left: 100px;
}
</style>

