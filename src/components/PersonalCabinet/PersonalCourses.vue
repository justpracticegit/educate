<template>
 <div class="cards">
      <div class="card">
        <div class="courses-item-1">
          <img class="courses-img" src="@/assets/img/math-course.svg" alt="">
          <h3 class="courses-item-title">Математика и наука о данных</h3>
          <div class="line"></div>
          <router-link to="/perscabinet1">
            <button class="btn btn-courses-item">Начать</button>
          </router-link>
        </div>
      </div>

      <div class="card">
        <div class="courses-item-2">
          <img class="courses-img" src="@/assets/img/mb-course.svg" alt="">
          <h3 class="courses-item-title">Машиностраение</h3>
          <div class="line"></div>
          <button class="btn btn-courses-item">Начать</button>
        </div>
      </div>

      <div class="card">
        <div class="courses-item-3">
          <img class="courses-img" src="@/assets/img/economics-course.svg" alt="">
          <h3 class="courses-item-title">Экономика</h3>
         <div class="line"></div>
          <button class="btn btn-courses-item">Начать</button>
        </div>
      </div>

      <div class="card">
        <div class="courses-item-4">
         <img class="courses-img" src="@/assets/img/finance-course.svg" alt="">
         <h3 class="courses-item-title">Финансы</h3>
         <div class="line"></div>
         <button class="btn btn-courses-item">Начать</button>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: "PersonalCourses"
}
</script>

<style scoped>
.cards{
  display: flex;
  justify-content: space-between;
}
.btn{
  background: #fff;
  border-radius: 44px;
  padding: 8px 26px;
  font-size: 18px;
  font-weight: 700;
  border-style: none;
}

.btn-courses-item {
  padding: 16px 46px;
  font-size: 16px;
  background: #F96A38;
  color: #fff;
  margin-left: 20px;
}
.card {
  display: flex;
  background-color: transparent !important;
  border: 0;
  border-radius: 40px;
  width: 100%;
  height: 402px;
}

.courses-item-1 {
  background: #A888EC;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.courses-item-2 {
  background: #36CD57;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.courses-item-3 {
  background: #7BBDFF;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.courses-item-4 {
  background: #FDCC67;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.courses-item-title {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
}

.line {
  height: 1.63px;
  width: 45px;
  background: #F96A38;
  margin-top: 11px;
  margin-bottom: 22px;
  margin-left: 20px;
}

.courses-img {
  margin: 30px;
}


</style>