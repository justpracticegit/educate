<template>
    <div class="resulttest">
            <div class="container mentalwork">
              <img src="@/assets/img/resulttest.png" alt="">
              <div class="rightblock">
                <h1>Сфера умственного труда </h1>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб
                    <br>-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                    <br>латинице с начала XVI века. В то время некий безымянный печатник
                    <br> создал большую коллекцию размеров и форм шрифтов, используя Lorem
                    <br> Ipsum для распечатки образцов.</p>
               </div>
            </div>
            <h2>Рекомендуемые курсы </h2>
            <div class="recomendedcourse">
                <div class="container griding">
                    <div class="card cardFinance">
                        <img src="../assets/img/course/fin.svg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">Финансы</h5>
                        <router-link to="/finance">
                            <a class="btn">Описание</a>
                        </router-link>
                        </div>
                    </div>
                <div class="card cardEconomics">
                    <img src="../assets/img/course/eco.svg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Экономика</h5>
                        <a href="#" class="btn">Описание</a>
                    </div>
                </div>
                <div class="card cardMechanicalEngineering">
                    <img src="../assets/img/course/mehe.svg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Машиностраение </h5>
                        <a href="#" class="btn">Описание</a>
                    </div>
                </div>
                <div class="card cardMathandScience">
                    <img src="../assets/img/course/math.svg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Математикаи наука  оданных </h5>
                        <a href="#" class="btn">Описание</a>
                    </div>
                </div>
               
                <button class="btn-watch">Начать обучение</button>
                </div>
            </div>
            
    </div>
</template>
<style scoped>
.resulttest{
     background: url(@/assets/img/resulttestcloud.png) no-repeat right 100px;
}
.mentalwork{
    display: flex;
    justify-content: space-between;
    margin-top: 1   75px;
}
.rightblock{
    margin-top: 250px;
}
h2{
    margin-left: 150px;
}
.griding{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 110px;
    padding-top: 69px;
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
    color: #fff;
}
.btn{
    background-color:#F96A38;
    color: white;
    border-radius: 44px;

}
.btn-watch{
    width: 239px;
    height: 52px;
    font-size: 16px;
    border-radius: 44px;
    margin-left: 220%;
    background: #F96A38;
    color: #fff;
}

</style>