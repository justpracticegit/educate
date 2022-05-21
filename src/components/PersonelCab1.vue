<template>
  <div class="personelcab1">
    <div class="container personealcabtop">
        <div class="personealcableft">
          <p><span><img src="@/assets/img/back.png" alt=""></span>Назад</p>
          <h2>Математика и наука оданных</h2>
          <p class="modul"> 1.Вводный модуль </p>
         <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/698892646?h=c615df6968&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
      >
      </iframe>
         </div>
          <div class="bottomimagelist">
            <div class="bottomimage" v-for="image in images" :key="image">
              <img  :src="image.url" >
            </div>
          </div>
          <p class="attached">Прикреплённые файлы/ссылки</p>
          <div class="attached-files-parent">
<!--            <span><img src="@/assets/img/attachedfile.png"></span>-->
              <p class="attached-files"><span><img src="@/assets/img/attachedfile.png"></span> Lorem Ipsum является стандартной "рыбой</p>
              <p class="attached-files"><span><img src="@/assets/img/attachedfile.png"></span> Lorem Ipsum является стандартной "рыбой</p>
              <p class="attached-files"><span><img src="@/assets/img/attachedfile.png"></span> Lorem Ipsum является стандартной "рыбой</p>
              <p class="attached-files"><span><img src="@/assets/img/attachedfile.png"></span> Lorem Ipsum является стандартной "рыбой</p>
              <p class="attached-files"><span><img src="@/assets/img/attachedfile.png"></span> Lorem Ipsum является стандартной "рыбой</p>
          </div>

          <!--        test-->
          <h1 class="test-title">Тест</h1>

          <div class="test">
            <div v-for="test in courseintro" :key="test">
              <div v-for="intros in test.intros" :key="intros">
                <div v-for="tests in test.tests" :key="tests">
                  <div v-for="questions in test.questions" :key="questions"
                     v-show="current_slide_number === index"
                     :class="{ 'is-active-slide': current_slide_number === index }">
                  <div class="loadingpage">
                    <p>{{ index + 1 }}/3</p>
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                         :style="'width: '+index + 1+'%'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p class="forwellbeing">
                    {{ intros.tests.questions.title.ru }}

                  </p>
                  <div class="test-label-block">
                    <div class="form-check" v-for="(answer, index) in intros.tests.questions.answers"
                         :index="intros.tests.questions.index" :key="index">
                      <div class="form-check-label" v-if="intros.test.tests.questions.length != current_slide_number">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" :id="answer.id"
                               @click="nextSlide" />
                        <label class="form-check-label" :for="answer.id">
                          {{ answer.title.ru }}

                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
<!--            <p class="forwellbeing">Для благополучия общества в первую очередь необходима:</p>-->
<!--            <div class="form-check" style="width: 90%">-->
<!--              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>-->
<!--              <label class="form-check-label" for="flexRadioDefault2">-->
<!--                А) защита интересов и прав граждан;-->
<!--              </label>-->
<!--            </div>-->
<!--            <div class="form-check-1" style="width: 90%">-->
<!--              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>-->
<!--              <label class="form-check-label" for="flexRadioDefault2">-->
<!--                Б) забота о материальном благополучии людей;-->
<!--              </label>-->
<!--            </div>-->
<!--            <div class="form-check-2" style="width: 90%">-->
<!--              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>-->
<!--              <label class="form-check-label" for="flexRadioDefault2">-->
<!--                Б) забота о материальном благополучии людей;-->
<!--              </label>-->
<!--            </div>-->
          </div>

        </div>
<!--        test-->

        <div class="personealcabright">
            <div class="pagebtn"> <p>1/10</p></div>
            <div class="progress">
              <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          <div class="mathandsciencebottom">
            <h2>Содержание курса</h2>
            <ol class="syntaxlanguage">
              <li>Вводный модуль</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
              <li>Синтаксис языка — часть 1</li>
            </ol>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import imageMain from '../assets/img/publiccloud2.png'
import axios from "axios";
export default {
  name: "PersonnelCab1.vue",
  data() {
    return{
      courseintro: [],
      current_slide_number: 0,
      totalPrice: 0,
      images:[
        { url: imageMain, alt: 'I love you nature' },
        { url: imageMain, alt: 'Now with dog - Rosé' },
        { url: imageMain , alt: 'Jeg er i Danmark' },
        { url: imageMain , alt: 'Badabimbadabum' },
        { url: imageMain , alt: 'Badabimbadabum' },
      ]
    }
  },
  mounted() {
    axios.get("https://jaryk-back.test-nomad.kz/api/course-intros?course_id=1").then(
        (response) => (this.courseintro = response.data.data)
        // console.log(response.data.data.)
    );
  },
  methods: {
    nextSlide() {
      this.current_slide_number++;
    },
    prevSlide() {
      this.current_slide_number--;
    },
  },
  watch: {
    dataFields() {
      for (var i = 0; i > this.courseintro.length; i++) {
        this.totalPrice += this.courseintro[i];
      }
      console.log(courseintro)
      return this.courseintro;
    },
  }
}
</script>

<style scoped lang="scss">
.case-slider__navigation {
  width: 40%;
}
.prev {
  float: left;
}
.next {
  float: right;
}
h5 {
  margin: 0px;
}
.test-label-block {
  max-width: 100%;
}

.proftestpage {
  background: url(@/assets/img/proftestanketacloud.png) no-repeat,
  url(@/assets/img/proftestanketacloud2.png) no-repeat right 10%;
}

.test {
  width: 50%;
  margin-left: 25%;
  padding-top: 10%;
  padding-bottom: 270px;
}

p {
  align-items: center;
}

.choose {
  width: 700px;
  height: 112px;
  background-color: #fff;
  border: 1px solid #97bfff;
  margin-bottom: 5%;
  border-radius: 26px;
}

.loadingpage {
  background: linear-gradient(180deg, #a8e7ff 0%, #45ccff 100%);
  width: 138px;
  height: 74px;
  border-radius: 44px;
  margin-left: 35%;
}

.loadingpage p {
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  padding-top: 15px;
}

.progress {
  width: 87%;
  margin-top: 32px;
}

.forwellbeing {
  padding-top: 64px;
  color: #062060;
  font-weight: 700;
  font-size: 28px;
}

.form-check {
  display: flex;
  /* margin-left: 35px; */
  align-items: center;
  color: #405b9e;
  margin-top: 5%;
  max-width: 60%;
  /* width: 1118px;
height: 112px; */
  background: #ffffff;
  border: 1px solid #e1473d;
  border-radius: 26px;
  border-color: rgba(151, 191, 255, 1);

  .form-check-label {
    margin: 10px;
    align-content: center;

    input {
      top: 10px;
      position: relative;
    }
  }
}






.personelcab1{
  background: url(../assets/img/Cloud-percab-1.png) no-repeat,
              url(../assets/img/Cloud-percab-1.png) no-repeat right 5%;
}
.personealcableft{
  width: 70%;
  margin-top: 126px;
  background:rgba(223, 243, 255, 1);
  padding-bottom: 116px;
  margin-bottom: 92px;
}
.personealcabright{
  background:rgba(223, 243, 255, 1);
}
.introductorymodule{
  width: 100%;
}
.pagebutton{
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
  font-weight: 700;
  font-size: 28px;
  width: 133px;
  height: 50px;
  margin-left: 44%;

}
.pagebutton p{
  text-align: center;
}
.progress{
  width:90%;
  margin-top: 33px;
  margin-left: 35px;
}
.progress-1{
  width: 35%;
}
.forwellbeing{
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #062060;
  margin-top: 65px;
  margin-left: 35px;
}
.form-check{
  margin-left: 35px;
  display: flex;
  align-items: center;
  border-radius: 26px;
  margin-top: 46px;
  width: 1118px;
  height: 112px;
  background: #FFFFFF;
  border: 1px solid #E1473D;
  box-sizing: border-box;
}
.form-check-1{
  display: flex;
  margin-left: 35px;
  align-items: center;
  color: #00E191;
  margin-top: 46px;
  width: 1118px;
  height: 112px;
  background: #FFFFFF;
  border: 1px solid #E1473D;
  border-radius: 26px;
  border-color: rgba(0, 225, 145, 1);
}
.form-check-2{
  display: flex;
  margin-left: 35px;
  align-items: center;
  color:#405B9E;
  margin-top: 46px;
  width: 1118px;
  height: 112px;
  background: #FFFFFF;
  border: 1px solid #E1473D;
  border-radius: 26px;
  border-color: rgba(151, 191, 255, 1);
  }
.personealcabright{
  position:absolute;
  width: 420px;
  top:0;
  right:6%;
  margin-top: 126px;
}
.pagebtn{
  width: 133px;
  height: 50px;
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
  margin-left: 40%;
  margin-top: 66px;
}
.pagebtn p{
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
}
.bottomimagelist{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.attached{
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  margin-top: 68px;
}
.attached-files-parent{
  margin-top: 25px;
  /*align-items: baseline;*/
}
.attached-files-parent span img{
  /*float: left;*/
}
.attached-files{
  font-weight: 700;
  font-size: 18px;
  color: rgba(6, 32, 96, 1)
}
.attached-files span img {
  padding-bottom: 5px;
}
.modul{
  font-weight: 700;
  font-size: 28px;
}
.test-title {
  text-align: center;
}
li{
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}
.mathandsciencebottom{
  margin-top: 58px;
}

.mathandsciencebottom h2{
  text-align: center;
}
/*.bottomimage{*/
/*  display: flex;*/
/*  fle-xdirection: row;*/
/*}*/

</style>