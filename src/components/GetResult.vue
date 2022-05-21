<template>
    <div class="getresult">
        <div class="container getresultpage">
            <div class="getresultbottom">
                <button class="testpage"><p>24/24</p></button>
                <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <router-link to="/resulttest">
                     <button class="getresultbtn">Получить результаты</button>
                </router-link>
                <div class="bottomresult">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "GetResult"
}
</script>
<style scoped>
.getresultpage{
    background: url(@/assets/img/getresultcloud.png) center 100px;
}
.getresultbottom{
    display: flex;
    flex-direction: column;
    margin-left: 28%;
    padding-top: 300px;
}
.testpage{
    width: 163px;
    height: 74px;
    background: linear-gradient(180deg, #A8E7FF 0%, #45CCFF 100%);
    border-radius: 37px;
    margin-left: 20%;
}
.testpage p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #062060; 
}
.progress{
    margin-top: 32px;
    margin-right: 45%;
}
.getresultbtn{
    width: 276px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    color: white;
    margin-top: 50px;
    margin-left: 16%;
}
.bottomresult{
    padding-top: 463px;
}

</style>