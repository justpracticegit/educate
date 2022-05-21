<template>
    <div class="proftest">
        <div class="container proftestcloud">
            <h1>Проф тест</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            <br> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" 
            <br>текстов на латинице с начала XVI века. В то время некий
            <br>безымянный печатник создал большую коллекцию размеров и
            <br>форм шрифтов, используя Lorem Ipsum для распечатки образцов.
            <br>Lorem Ipsum не только успешно пережил без заметных<br> без заметных</p>
            <router-link to="/proftestbar">
            <button class="starttest">Начать тест</button>
            </router-link>
        </div>
         <img class="onlinetest" src="@/assets/img/proftestintroimg.png" alt="">
    </div>
</template>
<style scoped>
.proftest{
   background: url(@/assets/img/proftestimg1.png) no-repeat 0% 127px;
}
.proftestcloud{
    padding-top: 12%;
}
.proftestcloud h1{
    padding-left: 10%;
    padding-top: 93px;
}
p{
    padding-top:50px;
}
.starttest{
    width: 192px;
    height: 52px;
    background-color: #F96A38;
    border-radius: 44px;
    color: #fff;
    margin-left: 10%;
    margin-top: 60px;

   
   
}
.onlinetest{
    margin-left: 51%;
    margin-top: -26%;
}

</style>