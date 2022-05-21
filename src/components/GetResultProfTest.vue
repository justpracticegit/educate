<template>
    <div class="getresulttest">
        <div class="container">
              <div class="takeresult">
                <button class="pagelist"><p>24/24</p></button>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="forget">Для получения результатов, пожалуйста, 
                        <br> пройдите регистрацию 
                </p>
                <router-link to="/createaccount">
                    <button class="register">Зарегистрироваться</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ProftestBar"
}
</script>
<style scoped>
.getresulttest{
    background: url(@/assets/img/proftestanketacloud.png) no-repeat;
}
.pagelist{
  width: 163px;
  height: 74px;
  background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
  border-radius: 37px;
  margin-left: 669px;
  margin-top: 167px;
}
.pagelist p{
    color: #062060;
    font-weight: 700;
    font-size: 28px;
    padding-top: 15px;
}
.takeresult{
    padding-top: 167px;
}
.progress{
    width: 688px;
    margin-left: 29%;
    margin-top: 36px;
}
.forget{
    font-family: Montserrat;
    margin-top: 114px;
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: #062060;

}
.register{
    width: 270px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    color: #fff;
    margin-left: 37%;
    margin-bottom: 394px;
    margin-top: 37px;
}
</style>