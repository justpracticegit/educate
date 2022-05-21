<template>
<div class="container">
  <div class="user">
    <img src="@/assets/img/personalCabinet/profile.png" alt="" class="profile-img text-center">
    <h3 class="user-name text h3 text-center">Самир Амиров</h3>
    <p class="user-info text p text-center">15 лет <br> Школа: Что такое Lorem Ipsum </p>
  </div>
  <hr>
  <div class="user-courses">
    <h3 class="user-courses-title text h3 text-center">Ваши курсы</h3>
    <div class="user-courses-subtitle">
      <img src="@/assets/img/personalCabinet/eye.svg" alt="">
      <p class="user-courses-subtitle text orange-text text-center">12 часов изучено</p>
    </div>
    <div class="user-courses-subtitle">
      <img src="@/assets/img/personalCabinet/orange-square.svg" alt="">
      <div class="user-courses-low-subtitle text orange-text text-center">Оранжевый цвет в диаграмме означает пройденные часы</div>
    </div>
    <div class="courses-diagram">
      <div class="top">
        <div id="donut">
          <div class="hole"></div>
        </div>
<!--        <span class="text">6 часов</span>-->
<!--        <span class="text">1 час</span>-->
<!--        <span class="text">3 часа</span>-->
<!--        <span class="text">2 часа</span>-->
      </div>
      <div class="bottom">
        <ul>
          <li class="text li">Математика и наука о данных <span>10 часов</span></li>
          <li class="text li">ИТ Фронтенд разработчик <span>10 часов</span></li>
          <li class="text li">ИТ Бэкенд разработчик <span>10 часов</span></li>
          <li class="text li">Маркетинг <span>10 часов</span></li>
        </ul>
      </div>
    </div>
  </div>
  <hr>
  <div class="user-settings">
      <router-link to="/settings">
        <p class="user-settings-text">Настройки</p>
      </router-link>
      <img src="@/assets/img/personalCabinet/settings.svg" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style scoped>
.container {
  max-height: 100vh;
  background: #DFF3FF;
  box-shadow: 0 4px 84px rgba(137, 213, 255, 0.3);
  width: 400px;
  padding: 38px 20px;
}

.text {
  color: #062060;
}

.text-center {
  text-align: center;
}

.profile-img {
  display: flex;
  margin: 0 auto;
}

.orange-text {
  color: #F96A38;
}

.h3 {
  font-weight: 700;
  font-size: 18px;
}

.li {
  font-weight: 600;
  font-size: 14px;
}

.p {
  font-weight: 400;
  font-size: 14px;
}

#donut {
  width: 300px; height: 300px;
  border-radius: 50%;
  background: conic-gradient(
      #A888EC 0deg 80deg,
      #36CD57 80deg 190deg,
      #7BBDFF 190deg 360deg
  );
}

.hole {
  width: 180px; height: 180px;
  border-radius: 50%;
  background: #fff;
}

#donut {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.user-courses-subtitle {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.user-settings {
  align-items: baseline;
  display: flex;
}
</style>