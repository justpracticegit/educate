<template>
    <div class="proftestpage">
        <div class="container">
            <div class="test">
                <div v-for="test in proftest" :key="test">
                    <div v-for="(questions, index) in test.questions" :key="index"
                        v-show="current_slide_number === index"
                        :class="{ 'is-active-slide': current_slide_number === index }">
                        <div class="loadingpage">
                            <p>{{ index + 1 }}/3</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                                :style="'width: '+index + 1+'%'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="forwellbeing">
                            {{ questions.title.ru }}
                            <!-- {{ questions.id }} -->
                        </p>
                        <div class="test-label-block">
                            <div class="form-check" v-for="(answer, index) in questions.answers"
                                :index="questions.index" :key="index">
                                <div class="form-check-label" v-if="test.questions.length != current_slide_number">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" :id="answer.id"
                                        @click="nextSlide" />
                                    <label class="form-check-label" :for="answer.id">
                                        {{ answer.title.ru }}
                                        <!-- {{ answer.id }}{{ answer.is_correct }} -->
                                    </label>
                                </div>
                            </div>
                          <router-link to="/register">
                            <button class="btn">Зарегистрироваться</button>
                          </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Getproftest",
    data() {
        return {
            proftest: [],
            current_slide_number: 0,
            totalPrice: 0
        };
    },
    mounted() {
        axios.get("https://jaryk-back.test-nomad.kz/api/prof-test").then(
            (response) => (this.proftest = response.data.data)
            // console.log(response.data.data.)
        );
    },
    methods: {
        nextSlide() {
            this.current_slide_number++;
        },
        prevSlide() {
            this.current_slide_number--;
        },
    },
    watch: {
        dataFields() {
            for (var i = 0; i > this.proftest.length; i++) {
                this.totalPrice += this.proftest[i];
            }
            console.log(proftest)
            return this.proftest;
        },
    }
};
</script>

<style scoped lang="scss">
.case-slider__navigation {
    width: 40%;
}
.prev {
    float: left;
}
.next {
    float: right;
}
h5 {
    margin: 0px;
}
.test-label-block {
    max-width: 100%;
}

.proftestpage {
    background: url(@/assets/img/proftestanketacloud.png) no-repeat,
        url(@/assets/img/proftestanketacloud2.png) no-repeat right 10%;
}

.test {
    width: 50%;
    margin-left: 25%;
    padding-top: 10%;
    padding-bottom: 270px;
}

p {
    align-items: center;
}

.choose {
    width: 700px;
    height: 112px;
    background-color: #fff;
    border: 1px solid #97bfff;
    margin-bottom: 5%;
    border-radius: 26px;
}

.loadingpage {
    background: linear-gradient(180deg, #a8e7ff 0%, #45ccff 100%);
    width: 138px;
    height: 74px;
    border-radius: 44px;
    margin-left: 35%;
}

.loadingpage p {
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    padding-top: 15px;
}

.progress {
    width: 87%;
    margin-top: 32px;
}

.forwellbeing {
    padding-top: 64px;
    color: #062060;
    font-weight: 700;
    font-size: 28px;
}

.form-check {
    display: flex;
    /* margin-left: 35px; */
    align-items: center;
    color: #405b9e;
    margin-top: 5%;
    max-width: 60%;
    /* width: 1118px;
  height: 112px; */
    background: #ffffff;
    border: 1px solid #e1473d;
    border-radius: 26px;
    border-color: rgba(151, 191, 255, 1);

    .form-check-label {
        margin: 10px;
        align-content: center;

        input {
            top: 10px;
            position: relative;
        }
    }
}
</style>