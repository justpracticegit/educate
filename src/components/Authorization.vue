<template>
    <div class="authorization">
        <div class="container-enter">
                <div class="container">
                  <form>
                    <div class="register">
                        <input v-model="login" type="text" placeholder="Enter Username" name="uname" required> <br>
                        <input v-model="password" type="password" placeholder="Enter Password" name="psw" required> 
                    <button @click.prevent="Login" class="login" type="submit">Login</button>
                    <router-link to="/register">
                        <button class="registerbtn">Register</button>
                    </router-link>
                    </div>
                  </form>
                </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
     name: "Authorization.vue",
      data(){
            return{
                login: null,
                password: null,
            }
        },
        methods: {
            Login(){
            console.log('asds')
              // POST request using axios with set headers
                const article = { 
                    login:this.login,
                    password:this.password,
                 };
                axios.post("https://jaryk-back.test-nomad.kz/api/login", article)
                    .then(response =>{ 
                    if(response.status === 200){
                        // JSON.parse(localStorage.setItem('access_token'))
                        // console.log(access_token)
                        console.log(response.data.access_token)
                        localStorage.setItem('access_token',response.data.access_token)
                        this.$router.push('personal-cabinet');
                    }
                    if(response.status === 400){
                        // response.access_token = JSON.parse(localStorage.setItem('access_token'))
                        console.log("Вы уже зареганны")
                    }
                    }
                );
            },
        }
}
</script>

<style scoped>
.container{
    background: url(@/assets/img/cloudautho-2.png) center no-repeat;
    width: 100%;
    height: 100vh;

}
.register{
    display: flex;
    justify-content: space-between;
}
input[type=text] {
  width: 325px;
  height: 55px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 44px;
}
input[type=password] {
  width: 325px;
  height: 55px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 44px;
}


button {
  width: 145px;
  height: 52px;
  background-color: #F96A38;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 402px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.login{
    width: 145px;
    height: 52px;
    border-radius: 44px;
    position: absolute;
    margin-top: 100px;
    margin-left: 19%;
}
.registerbtn{
  width: 145px;
  height: 52px;
  position: absolute;
  border-radius: 44px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>