<template>
    <div class="personelcab1">
      <div class="container personealcabtop">
        <div class="personealcableft">
          <div class="personealcableftinside">
          <p class="goback"><span><img src="@/assets/img/back.png" alt="" onclick="history.back()"></span>Назад</p>
          <h2>Математика и наука оданных</h2>
          <p class="modul"> 1.Вводный модуль </p>
          <img class="introductorymodule" src="@/assets/img/publiccloud.png">
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
          <div class="TestResult">
            <h1 class="test">Тест</h1>
            <div class="pagebutton"><p class="pagebutton-p">10/10</p></div>
            <div class="progress">
              <div class="progress">
                <div class="progress-bar  bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="yourresult"> <p>Ваш результат:</p>  <p class="halfanswer">7 правильных ответов из 10</p></div>
            <div class="watchresult">
              <button>Посмотреть правильные ответы</button>
            </div>
          </div>
          </div>
        </div>
        <div class="personealcabright">
          <button class="pagebtn"><p>1/10</p></button>
          <div class="progress">
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
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
  name: "PersonalCab2",
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
  .personealcabright{
   background:rgba(223, 243, 255, 1);
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
  .pagebutton-p{
    text-align: center;
  }
  .watchresult{
    width: 370px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    color: #FFFFFF;
  }
  .progress{
    width: 100%;
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
  .form-check-1{
    color: #00E191;
    margin-top: 20px;
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
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
}
  .watchresult{
    display: flex;
    justify-content: center;
    margin-top: 57px;
    margin-left: 30%;
    margin-bottom: 191px;
  }
  .watchresult button{
    width: 370px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    color: #FFFFFF;
  }
  .yourresult{
    display: flex;
    justify-content: center;
    margin-top: 77px;
    font-weight: 400;
    font-size: 28px;
  }
  .halfanswer{
    color: #062060;
    font-weight: 700;
  }
  .attached-files-parent{
    margin-top: 25px;
    /*align-items: baseline;*/
  }
  .bottomimagelist{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .modul{
    font-weight: 700;
    font-size: 28px;
  }
  .introductorymodule{
    width: 100%;
  }
  .personealcableftinside{
    padding-left: 5%;
    padding-right: 5%;
  }
li{
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  font-family: 'Montserrat';
}
.aboutcourse{
  text-align: center;
}
.goback{
  padding-top: 44px;
}
.mathandsciencebottom{
  margin-top: 58px;
}

</style>