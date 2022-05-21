<template>
    <footer>
        <div class="container footer-wrapper">
          <a href="#" class="logo footer-logo">
              <img src="../assets/img/logo.png" alt="">
            </a>
          <div class="f-div">
            <div class="f-div-sec">
              <ul class="contacts">
                <li class="contacts-item">
                  <a href="#" class="contacts-link map">Адрес: Lorem Ipsum - это<br>текст-"рыба", часто </a>
                </li>
                <li class="contacts-item">
                  <a href="#" class="contacts-link phone">+7 777 123 45 67</a>
                </li>
                <li class="contacts-item">
                  <a href="#" class="contacts-link letter">educatics.kz@mail.ru</a>
                </li>
              </ul>
              <div class="f-nav">
                <ul class="footer-nav-left">
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">О нас</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Проф тест</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Курсы</a>
                  </li>
                </ul>
                <ul class="footer-nav-right">
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Тарифы</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="#" class="footer-nav-link">Статьи</a>
                  </li>
                  <li class="footer-nav-item">
                    <router-link to="/payment">
                      <a href="#" class="footer-nav-link">Оплата</a>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="social-network">
              <li class="social-network-item">
                <a href="https://instagram.com/educatics.online?igshid=NjY2NjE5MzQ" class="social-network-link">
                  <img src="../assets/img/Vector.svg" alt="">
                </a>
              </li>
              <li class="social-network-item">
                <a href="https://vm.tiktok.com/ZSdSp1unY" class="social-network-link">
                  <img src="../assets/img/facebook.svg" alt="">
                </a>
              </li>
              <li class="social-network-item">
                <a href="#" class="social-network-link">
                  <img src="../assets/img/telegram.svg" alt="">
                </a>
              </li>
              <li class="social-network-item">
                <a href="#" class="social-network-link">
                  <img src="../assets/img/whatsapp.svg" alt="">
                </a>
              </li>
              <li class="social-network-item">
                <a href="https://vm.tiktok.com/ZSdSp1unY" class="social-network-link">
                  <img src="../assets/img/icons8-tiktok.svg" alt="">
                </a>
              </li>
              <li>
                <button class="footer-button">Войти</button>
              </li>
            </ul>
          </div>
        </div>
    </footer>
</template>

<style scoped>
footer{
  background-color: #094CC9;
  padding: 87.5px 0;
}

.f-div {
  display: flex;
}

.f-div-sec {
  display: flex;
}

footer a{
  text-decoration: none;
  color: #fff;
}

footer ul{
  list-style: none;
}
.footer-nav-item {
  padding-bottom: 10px;
}
.footer-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.social-network{
  align-items: center;
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.map{
  padding-left: 28.6px;
  background: url(@/assets/img/address.svg) no-repeat;
}
.phone{
  padding-left: 28.6px;
  background: url(@/assets/img/phone.svg) no-repeat;
}
.letter{
  padding-left: 28.6px;
  background: url(@/assets/img/letter.svg) no-repeat;
}
.footer-button{
  padding: 13px 26px;
  border-radius: 44px;
  background-color: #094CC9;
  border-color: #FFFFFF;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
}

</style>