<template>
    <div class="ratepurchase">
        <div class="container purchasecloud">
            <div class="course">
                <h1>Курсы</h1>
                <p>Выберите  один курс по тарифу Premium</p>
                <div class="finance">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Финансы</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="economics">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logoeconomics.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Экономика</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="civil">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logocivil.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Машиностраение</p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="frontend">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logoIT.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">ИТ Фронтенд разработчик </p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <div class="math">
                    <img class="true" src="@/assets/img/true.png" alt="">
                    <img class="logofin" src="@/assets/img/logofinancerate.png" alt="">
                    <div class="financetext">
                        <p class="financetext-p">Математика и наука  оданных </p>
                    </div>
                    <button class="description">Описаниe</button>
                </div>
                <router-link to="/trash">
                <button class="purchase">Приобрести</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ratepurchase{
    padding-top:103px ;
}
.purchasecloud{
    background: url(http://localhost:8080/img/purchuasecloud.d6c85f4c.png) no-repeat center -14%/108%;
    height: 100vh;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.course{
    display: flex;
    flex-direction: column;
    padding-left: 30%;
    padding-top: 8%;
    padding-right: 30%;
}
.course h1{
    text-align: center;
}
.course p{
    text-align: center;
}
.finance{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #FFCC64;
  background-color: #FFCC64;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
.true{
    height: 5%;
    padding-top: 4%;
}
.logofin{
  width: 15%;
}
.financetext-p{
    color: #fff;
    border-bottom: 2px solid #f96a38;
    padding-top: 24%;
}
.description{
    width: 29%;
    height: 70%;
    color: #fff;
    background: #f96a38;
    border-radius: 44px;
    margin-top: 4%;
}
.purchase{
    width: 199px;
    height: 52px;
    color: #fff;
    background: #f96a38;
    border-radius: 44px;
    margin-top: 4%;
    margin-left: 35%; 
}
.economics{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #7BBDFF;
  background-color: #7BBDFF;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
.civil{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #36CD57;
  background-color:#36CD57;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
.frontend{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid  #A888EC;
  background-color: #A888EC;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
.math{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid  #094CC9;
  background-color:#094CC9;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>

<script>
import RatePurchase from '@/components/RatePurchase.vue'
export default {
    name:'ratepurchase'
}
</script>