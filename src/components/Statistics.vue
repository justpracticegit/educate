<template>
  <div class="statistics">
    <div class="container">
   <h1>Статистика </h1>
    <div class="reviews__tabs">
          <button class="reviews__tab reviews__tab--active">Статистика учеников</button>
          <button class="reviews__tab">Статистика курсов</button>
     </div>
     <div class="statistics-table">
        <div class="statistics-table-inside">
             <div class="finans-stats">
                <img src="@/assets/img/finance-stats.png" alt="">
                <div class="subject-student">
                <p class="movetoleft">Финансы</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/Economics.png" alt="">
                <p class="movetoleft">Экономика</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/civileng.png" alt="">
                <p class="movetoleft">Машиностраение </p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                 <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/mathandscience-2.png" alt="">
                <p class="movetoleft">Математика и наука  оданных </p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/frontdev.png" alt="">
                <p class="movetoleft">ИТ Фронтенд разработчик</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/backdev.png" alt="">
                <p class="movetoleft">ИТ Бэкенд разработчик</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/stroika.png" alt="">
                <p class="movetoleft">Строительная инженерия г</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/internationallaw.png" alt="">
                <p class="movetoleft">Международные отношения </p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
              <div class="finans-stats">
                <img src="@/assets/img/sociology.png" alt="">
                <p class="movetoleft">Социология</p>
                <p class="movetoright">23 ученика</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
             </div>
        </div>
     </div>
     </div>
  </div>
</template>
<style scoped>
.statistics{
 margin-top: 500px;
}

h1{
 text-align: center;
}

.reviews__tabs {
  border-radius: 22px;
  background-color: #fff;
  max-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 50px auto 75px auto;
}

.reviews__tab {
  border-radius: 22px;
  flex: 1 1 50%;
  border: none;
  background-color: #fff;
  color: #6e718f;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.reviews__tab--active {
  background-color: #00e191;
  color: #fff;
}
.statistics-table{
  width: 100%;
  height: 550px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 1rem;
  direction: rtl;
}
.statistics-table-inside{
 direction: ltr;
}
.finans-stats{
 display: flex;
 padding-top: 20px;
}
.subject-student{
  display: flex;
  justify-content: space-between;
}
.progress{
 width: 50%;
}
/* .movetoleft{
 padding-left: 18px;
}
.movetoright{
 padding-left: 250px;
} */

</style>
