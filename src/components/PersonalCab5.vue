<template>
  <div class="personelcab1">
    <div class="container personealcabtop">
      <div class="personealcableft">
        <div class="personealcableftinside">
          <p class="goback"><span><img src="@/assets/img/back.png" alt=""></span>Назад</p>
          <h2>Математика и наука оданных</h2>
          <img class="introductorymodule" src="@/assets/img/OverviewResult.png">
          <button class="next-question">Пойти итоговый тест</button>
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
  name: "PersonalCab5",
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
  width: 65%;
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
.li{
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  font-family: 'Montserrat';
}
</style>