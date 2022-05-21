<template>
    <div class="watchvideo">
        <div class="container watchvideoflex">
          <img style="display: none" src="@/assets/img/about-cloud-second.png" alt="" class="apply-background-second">
            <div class="watchvideoleft">
                <img class="watchvideoleft-img" src="@/assets/img/watchvideo.png" alt="">
            </div>
            <div class="virtualcloud">
                <h1 class="virtual-cloud-title">Виртуальная компания</h1>
                <p class="virtual-cloud-description">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати
                  и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов на латинице с начала XVI века. В то время некий безымянный
                  печатник создал большую коллекцию размеров и форм шрифтов, используя
                  Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешнопережил без заметных изменений пять веков, но и перешагнул в электронный
                  дизайн.
                </p>
            </div>
            <div class="stairs">
                <img class="stairs-second" src="@/assets/img/stairs-2.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.watchvideo{
 background: url(@/assets/img/cloud-2.png) no-repeat right;
}
.watchvideoflex{
    display: flex;
    justify-content: space-between;

}
.virtualcloud h1{
    padding-top: 37%;
}
.virtualcloud p{
    padding-top: 5%;
}
.stairs{
    position: absolute;
    left: 44%;
    top: 182%;
    z-index: -1;
}

</style>