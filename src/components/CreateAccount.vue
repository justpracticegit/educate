<template>
    <div class="apply">
        <div class="container">
            <div class="apply-content">
            <form class="request">
                <h1 class="apply-h1">Создать аккаунт</h1>
                <div class="personalinfo">
                    <input v-model="firstname" class="firstname" type="text" id="fname" name="Имя" placeholder="Имя">
                    <input v-model="lastname" class="lastname" type="text" id="lname" name="Фамилия" placeholder="Фамилия">
                </div>
                <div class="contacts">
                    <input v-model="phone" class="telephone" type="text" id="lname" name="lname" placeholder="Телефон">
                    <input v-model="email" class="email" type="textl" id="lname" name="lname" placeholder="E-mail">
                    <input v-model="email" class="password" type="textl" id="lname" name="lname" placeholder="E-mail">
                </div>
                <div class="selectAll">
                    <select class="age" name="age" id="">
                        <option value="age"> <p>Возраст</p> </option>
                    </select>
                    <select class="city" name="" id="">
                        <option value=""><p class="pp">Город</p> </option>
                    </select>
                    <select class="school" name="" id="">
                        <option value=""><p class="pp">Школа</p> </option>
                    </select>
                </div>
                <!-- <router-link to="/getresult"> -->
                <button @click.prevent="Register" class="send" type="submit">Зарегистрироваться</button>
                <!-- </router-link> -->
                <p class="send-p"> Нажимая кнопку вы соглашаетесь <br>  
на обработку персональных данных</p>
            </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "CreateAccount",
        data(){
            return{
                firstname: null,
                lastname: null,
                phone:null,
                email: null,
                age: null,
                res: null,
            }
        },
        methods: {
            Register(){
            console.log('asds')
              // POST request using axios with set headers
                const article = { 
                    type: "children",
                    tariff_id: "1",
                    age:"32",
                    login: this.email,
                    password: "1234",
                    name:this.firstname,
                    surname:this.lastname,
                    school_id:"1",
                    phone: this.phone
                 };
                axios.post("https://jaryk-back.test-nomad.kz/api/register", article)
                    .then(response =>{ 
                    if(response.status === 201){
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
.apply{
    background: url(@/assets/img/cloudforapply.png) no-repeat  center/100% 100%;
}
.request{
    display: flex;
    flex-direction: column;
    margin-top: 450px;
    margin-left: 30%;
}
.apply-h1{
    font-size: 48px;
    font-weight: 700,Bold;

    color: #062060;
    fill: #062060;
    margin-left: 20%;
    margin-bottom: 54px;
}
.apply-img{
    padding-top: 300px;
    padding-left: 100px;
}
.personalinfo{
    display: flex;
    justify-content: space-between;
}
.contacts{
    display: flex;
    justify-content: space-between;
}
.selectAll{
    display: flex;
    justify-content: space-between;
}
.apply-h3{
    color: #062060;
}
.send-p{
    color: #6E718F;
    margin-right: 65px;
    margin-left: 26%;
}
.apply-content{
    display: flex;
    flex-direction: row;
    padding-bottom: 300px;
}
.firstname{
    width: 325px;
    height: 55px;
    border-radius: 83px;
    margin-bottom: 20px;
}
.lastname{
    width: 325px;
    height: 55px;
    border-radius: 83px;
    margin-left: 15px;
}
.telephone{
    width: 325px;
    height: 55px;
    border-radius: 83px;
}
.email{
    width: 325px;
    height: 55px;
    border-radius: 83px;
}
.selectAll{
    margin-top: 20px;
}
.age{
    width: 182px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.city{
    width: 220px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.school{
    width: 233px;
    height: 55px;
    border-radius: 83px;
    padding-left: 25px;
}
.pp{
    padding-left: 25px;
}
.send{
    width: 184px;
    height: 52px;
    border-radius: 44px;
    background-color: #F96A38;
    color: white;
    margin-left: 200px;
    margin-top: 39px;
}

.send-p{
    margin-top: 27px;
}

</style>