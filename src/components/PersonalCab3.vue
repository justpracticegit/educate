<template>
  <div class="personelcab1">
    <div class="container personealcabtop">
      <div class="personealcableft">
        <div class="personealcableftinside">
          <p class="goback"><span><img src="@/assets/img/back.png" alt="" onclick="history.back()"></span>Назад</p>
          <h2>Математика и наука оданных</h2>
          <p> Вводный модуль </p>
          <img class="introductorymodule" src="@/assets/img/publiccloud.png">
          <div class="bottomimagelist">
            <div class="bottomimage" v-for="image in images" :key="image">
              <img  :src="image.url" >
            </div>
          </div>
          <div>

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
          <h1>Правильные ответы</h1>
          <p class="forwellbeing">Для благополучия общества в первую очередь необходима:</p>
        <div class="form-check-result" style="width: 100%">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Б) забота о материальном благополучии людей;
          </label>
        </div>
        <div class="description">
          <h2>Объяснение</h2>
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            <br>"рыбой" для текстов на латинице с начала XVI века.  В то время некий безымянный печатник создал большую коллекцию
            <br>размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
            <br>заметных изменений пять веков, но и перешагнул в электронный дизайн. </p>
        </div>
        <button class="next-question">Следующий вопрос</button>
        </div>
      </div>

      <div class="personealcabright">
        <button class="pagebtn"><p>1/10</p></button>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:2%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        <div class="mathandsciencebottom">
          <h2 class="aboutcourse">Содержание курса</h2>
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
import imageMain from "@/assets/img/publiccloud2.png";

export default {
  name: "PersonalCab3",
  data(){
    return{
      images:[
        { url: imageMain, alt: 'I love you nature' },
        { url: imageMain, alt: 'Now with dog - Rosé' },
        { url: imageMain , alt: 'Jeg er i Danmark' },
        { url: imageMain , alt: 'Badabimbadabum' },
        { url: imageMain , alt: 'Badabimbadabum' },
      ]
    }
  }
}
</script>

<style scoped> 
.personelcab1{
  background: url(../assets/img/Cloud-percab-1.png) no-repeat,
                url(../assets/img/Cloud-percab-1.png) no-repeat right 5%;
}
.personealcableft{
  width: 70%;
  margin-top: 126px;
  background: rgba(223, 243, 255, 1);
  padding-bottom: 116px;
  margin-bottom: 92px;
}
.personealcableftinside{
  padding-left: 5%;
  padding-right: 5%;
}
.pagebutton{
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
}
.watchresult{
  background: #F96A38;
  border-radius: 44px;
}
.progress{
  width: 65%;
  margin-top: 33px;
}
.progress-1{
  width: 35%;
}
.form-check{
  border-radius: 26px;
  margin-top: 20px;
  background-color: rgba(225, 71, 61, 1);
  width: 1118px;
  height: 112px;
  background: #FFFFFF;
  border: 1px solid #E1473D;
  box-sizing: border-box;
}
.form-check-result{
  color: #00E191;
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 30px;
  width: 1118px;
  height: 112px;
  background: #FFFFFF;
  border: 1px solid #E1473D;
  border-radius: 26px;
  border-color: rgba(0, 225, 145, 1);
}
.form-check-2{
  color:#405B9E;
  margin-top: 20px;
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
  background:rgba(223, 243, 255, 1);
  top:0;
  right:6%;
  margin-top: 126px;
}
.pagebtn {
  width: 133px;
  height: 50px;
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
  margin-left: 40%;
  margin-top: 66px;
}
 .pagebtn p{
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
}
.next-question{
  display: block;
  width: 263px;
  height: 52px;
  background: #F96A38;
  border-radius: 44px;
  margin: 0 auto;
  color: #FFFFFF;
}
.introductorymodule{
  width: 100%;
}
.bottomimagelist{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.forwellbeing{
  font-weight: 600;
  font-size: 25px;
}
.description p{
  font-size: 18px;
  line-height: 25px;
  color: #062060;
}
li{
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  font-family: 'Montserrat';
}
.goback{
  padding-top: 44px;
}
.mathandsciencebottom{
  margin-top: 58px;
}
.aboutcourse{
  text-align: center;
}
</style>