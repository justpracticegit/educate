<template>
  <div class="personelcab1">
    <div class="container personealcabtop">
      <div class="personealcableft">
        <div class="personealcableftinside">
          <p><span><img src="@/assets/img/back.png" alt=""></span>Назад</p>
          <h2>Математика и наука оданных</h2>
          <div class="certificate">
            <img src="@/assets/img/certificate.png" alt="">
          </div>
          <div class="buttons">
            <button class="watchrightresult">Скачать PDF вариант</button>
            <button class="sendtomail">Отправить на почту</button>
          </div>
           
        </div>
      </div>

      <div class="personealcabright">
        <button class="pagebtn">1/10</button>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width:2%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
import imageMain from "@/assets/img/publiccloud2.png";
export default {
  name: "PersonalCab10",
}
</script>

<style scoped>
.personealcableft{
  width: 65%;
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
  width: 100%;
  margin-top: 24px;
}
.progress-1{
  width: 35%;
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
  top:0;
  right:0;
  margin-top: 126px;
  background: rgba(223, 243, 255, 1);
}
.pagebtn {
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
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
.next-question{
  margin-top: 88px;
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
  .result-test{
      text-align: center;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      color: #062060;
  }
.yourresult{
    display: flex;
    justify-content: center;
    margin-top: 77px;
    font-weight: 400;
    font-size: 28px;
}
.takeresult{
    display: flex;
    justify-content: space-evenly;
    margin-top: 57px;
    margin-bottom: 441px;
}
.watchrightresult{
    width: 275px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
}
.getcertificate{
    width: 280px;
    height: 52px;
    border: 2px solid #F96A38;
    border-radius: 44px;
    color: #F96A38;
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
.buttons{
    margin-top: 42px;
}
.sendtomail{
    width: 263px;
    height: 52px;
    border: 2px solid #F96A38;
    color: #F96A38;
    border-radius: 44px;
    margin-left: 10px;
}
li{
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  font-family: 'Montserrat';
}
</style>