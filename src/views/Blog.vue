<template>
    <div class="blog">
        <div class="container myblog">
            <h1>Что такое Lorem Ipsum?</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб
            <br>
            -дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            <br> латинице
             с начала XVI века.  В то время некий безымянный печатник
            <br>создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
            <br>
             для распечатки образцов. Lorem Ipsumне только успешно пережил без заметных
            <br>изменений пять веков, но и перешагнул в электронный
            дизайн.
            </p>
            <router-link to="/blogs">
            <button class="btnread">Читать дальше</button>
            </router-link>
        </div>
        <h2>Статьи</h2>
        <div class="container mygrid">
            <div class="card" style="width: 18rem;">
                <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                     <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>   
                   
                    </router-link>
                    
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">

                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <router-link to="/articles">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p>
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p> <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="@/assets/img/articlesimg.png" alt="">
                <div class="card-body">
                    <h5 class="card-title">Бесплатные обучающие тренинги</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <router-link to="/blogs">
                     <span class="card-link-span">
                        <p href="#" class="card-link">Читать дальше</p>
                        <p class="data">20/08/2022</p> 
                    </span>  
                    </router-link> 
                </div>
            </div>
        </div>
        <button class="watchall">Смотреть все </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.blog{
    background: url(@/assets/img/blogcloud1.png) no-repeat left 7%,
                url(@/assets/img/blogcloud2.png) no-repeat left 150px/50%,
                url(@/assets/img/blognews4.png) no-repeat 85% 10%,
                url(@/assets/img/blogcloud3.png) no-repeat right 10%,
                linear-gradient(180deg, #DFF3FF 0%, #AFE2FF 100%);     

}
.myblog{
    display: grid;
    padding-top: 336px;
}
.btnread{
    width: 221px;
    height: 52px;
    background: #F96A38;
    border-radius: 44px;
    text-align: center;
    color: #fff;
    margin-left: 8%;  
}
h2{
    text-align: center;
    padding-top: 200px;
}
.mycard{
    display: flex;
    justify-content: space-between;
}
.card{
    border-radius: 44px;
}
.card img{
    width: 100%;
}
.watchall{
  display: block;
  margin: auto;
  width: 170px;
  height: 46px;
  border: 2px solid #062060;
  border-radius: 44px;
  margin-top: 50px;
  margin-bottom: 124px;
  opacity: 1;
}
.card-link-span{
    display: flex;
    justify-content: space-around;
}
.data{
    color:#E5E5E5;
}
h2{
    text-align: center;
    padding-top: 200px;
}
.mygrid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 110px;
    padding-top:69px;
}
.card{
    border-radius: 44px;
}
.card img{
    width: 100%;
}
.watchall{
  display: block;
  margin: auto;
  width: 170px;
  height: 46px;
  border: 2px solid #062060;
  border-radius: 44px;
  margin-top: 50px;
  margin-bottom: 124px;
  opacity: 1;
}
.card-link-span{
    display: flex;
    justify-content: space-around;
}
.data{
    color:#E5E5E5;
}

</style>

