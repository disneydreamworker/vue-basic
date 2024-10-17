<template>

  <div>
    <Header>
      <div>
        <router-view></router-view>
      </div>
    </Header>
  </div>

  <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <h4> 상세페이지</h4>
      <p>Do ad aliquip id anim. Ad nisi mollit elit cupidatat do dolore amet ex est qui do excepteur. Deserunt deserunt enim aliquip ipsum fugiat labore amet velit pariatur aliqua occaecat. Nisi eiusmod eu magna voluptate eiusmod exercitation ipsum occaecat dolor fugiat consectetur.
Sint est aliqua do cillum tempor tempor nulla magna. Occaecat dolore aliquip in consectetur esse proident duis culpa ad reprehenderit in. Esse elit esse excepteur magna sit pariatur elit enim exercitation commodo fugiat qui aliquip nostrud. Eiusmod id nostrud culpa sunt reprehenderit est pariatur quis magna enim esse officia. Laboris duis est ea nostrud pariatur consequat consectetur qui cupidatat sint fugiat enim.
Qui labore ullamco ut enim officia cillum officia. Velit id ad culpa sunt adipisicing sit sunt consequat aliqua cupidatat laborum. Deserunt anim et cupidatat magna excepteur. Consectetur pariatur elit ut ad ex ex laboris nisi voluptate.
Id cupidatat pariatur deserunt esse fugiat dolore occaecat consequat occaecat dolor fugiat exercitation est sint. Quis ut veniam sunt cillum. Reprehenderit enim ea minim consequat consequat magna nostrud deserunt consectetur velit dolore commodo amet. Nulla enim veniam occaecat dolore amet. Deserunt do esse Lorem adipisicing tempor. Dolor non consectetur id aliqua culpa sit veniam ad dolore amet. Exercitation eiusmod non mollit veniam velit deserunt sint pariatur id dolor dolore commodo.
      </p>
      <button @click="모달창열렸니 = !모달창열렸니">닫기</button>
    </div>
  </div>
  
  <div class="menu">
    <a href="">Home</a>
    <a href="">Products</a>
    <a href="">About</a>

    <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
    <a href="" v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a>
    <a href="" v-for="(작명,키) in 메뉴들" :key="키">{{ 메뉴들[i] }}</a>
    <!-- 반복문 변수는 2개까지 가능. 왼쪽 : array 내 데이터 , 오른쪽 : 1씩 증가하는 정수(0,1,2,)-->
  </div>


  <div v-for="(array, i) in products" :key="array">
    <img src="./assets/logo.png" alt="" class="room-img">
    <h4 v-on:click="모달창열렸니 = !모달창열렸니">{{ array }}</h4>
    <p>50만원</p>
    <button @click="신고수[i]++">허위매물신고</button><span>신고수 : {{ 신고수[i] }} </span>
  </div>

  <!-- <div>
    HTML 속성 데이터 바인딩 시 : :style처럼 앞에 : 붙여주기
    일반 내용 데이터 바인딩 시 : {{  }}

    <h4 class = "h4_1" :style="스타일">{{ products[0] }} 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{ products[1] }} 원룸</h4>
    <p>{{ price2 }} 만원</p>
  </div> -->

</template>

<script>
// import
import Header from "./components/layout/Header.vue";

//export
export default {
  name: 'App',
  data(){
    return {
      // 데이터 보관함 Object 자료형으로
      price1 : 60,
      price2 : 70,
      스타일 : 'color : blue',
      products : ['역삼동' , '천호동', '마포구'],
      메뉴들 : ['Home', 'Shop', 'About'],
      신고수 : [0, 0, 0],
      모달창열렸니 : false, //모달창 현재 상태 정보

    }
  },

  //componenets
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 10%;
  margin-top: 40px;
}

/* 모달창 디자인 */

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100;
  background:rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
