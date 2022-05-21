<template>
  <header class="header">
    <div class="container fluid">
      <div class="header_wrapper">
        <a class="header_logo" href="/"><img src="@/assets/img/logo.png" alt=""></a> 
        <nav class="header_nav">
          <ul class="header_list">
            <li class="header_item">
              <router-link to="/about">
                <a class="header_link">{{ translate('aboutUs') }}</a>
              </router-link>
            </li>
            <li class="header_item">
              <router-link to="/proftest">
                <a class="header_link">{{ translate('profTest') }}</a>
              </router-link>
            </li>
            <li class="header_item">
              <router-link to="/courses">
                <a class="header_link">{{ translate('courses') }}</a>
              </router-link>
            </li>
            <li class="header_item">
              <router-link to="/rates">
                <a class="header_link">{{ translate('tariffs') }}</a>
              </router-link>
            </li>
            <li class="header_item">
              <router-link to="/articles">
                <a class="header_link">{{ translate('articles') }}</a>
              </router-link>
            </li>
            <!-- <li class="header_item">
              <router-link to="/perscabinet">
                <a href="#!" class="header_link">{{ translate('personalCabinet') }}</a>
              </router-link>
            </li> -->
          </ul>
        </nav >
        <select name="lang" v-model="lang" class="language">
          <option class="lang-image-en" value="en">&#127482 &#127480</option>
          <option class="lang-image-ru" value="ru">&#127479 &#127482</option>
          <option class="lang-image-kz" value="kz">&#127472 &#127487</option>
        </select>

        <router-link to="/authorization">
          <button class="button btn-header" type="button">Войти</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import en from '../locales/en.js';
import ru from '../locales/ru.js';
import kz from '../locales/kz.js';
export default {
  name: "HeaderPage",
  mixins: [en, ru, kz],
  data() {
    return {
      lang: 'ru',
    }
  },
  methods: {
    translate(prop) {
      return this[this.lang][prop];
    }
  }
}
</script>

<style scoped>
.header{
  position: absolute;
  left: 0;
  top: 20px;
  width: 100%;
  z-index: 10;
}
.header_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_logo{
  height: 61px;
  width: 210px;
  border-radius: 0;
  /* background: url(@/assets/img/logo.png); */
}
.header_nav{
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
}
.header_list{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 0;
}

a {
  text-decoration: none !important;
}

.header_item{
  margin-right: 82px;
}

.button{
  background: linear-gradient(275.68deg, #89D5FF 6.44%, #C4E9FF 54.62%, rgba(255, 255, 255, 0.52) 100.74%);
  width: 105px;
  height: 46px;
  border-radius: 44px;
  border-color: #062060 ;
  color: #062060;
  padding: 8px 26px 8px 26px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  font-weight: Medium;
}

select {
  background-color: transparent !important;
  border: none !important;
}

.lang-image-kz {
  background-image: url(../assets/img/header/kaz.png);
}

.lang-image-ru {
  background-image: url(../assets/img/header/rus.png);
}

.lang-image-en {
  background-image: url(../assets/img/header/usa.png);
}
</style>