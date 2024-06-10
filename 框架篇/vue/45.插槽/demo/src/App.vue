<template>
  <div id="app">
    <!-- 默认插槽 -->
    <div class="slot1">
      <!-- 默认插槽 -->
      <Slot1 title="游戏">
        <ul>
          <li v-for="(val, index) in games" :key="index">
            {{ val }}
          </li>
        </ul>
      </Slot1>
      <Slot1 title="电影">
        <video controls src=""></video>
      </Slot1>
      <Slot1 title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      </Slot1>
    </div>
    <!-- 具名插槽 -->
    <div class="slot2">
      <!-- 具名插槽 -->
      <Slot2 title="游戏">
        <ul slot="center">
          <li v-for="(val, index) in games" :key="index">
            {{ val }}
          </li>
        </ul>
        <div class="footer" slot="footer">
          <a href="www.baidu.com">今典</a>
          <a href="www.baidu.com">今典</a>
          <a href="www.baidu.com">今典</a>
        </div>
      </Slot2>
      <Slot2 title="电影">
        <video slot="center" controls src=""></video>
      </Slot2>
      <Slot2 title="美食">
        <img
          slot="center"
          src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
          alt=""
        />
        <!-- 这里使用template可以少一层 div结构。如果一个插槽里面有多种结构的话 -->
        <!-- 而且还有一种新的写法 v-solt -->
        <template v-slot:footer>
          <div class="footer">
            <a href="">jindian</a>
            <a href="">jindian</a>
          </div>
          <h3 style="text-align: center">欢迎吃</h3>
        </template>
      </Slot2>
    </div>
    <!-- 作用域插槽 -->
    <!-- 数据在组件里面，使用者通过插槽操作插件里面的数据，以不同的形式展现出来 -->
    <div class="slot3">
      <Slot3 title="游戏">
        <template scope="datas">
          <ul>
            <li v-for="(val, index) in datas.games3" :key="index">
              {{ val }}
            </li>
          </ul>
        </template>
      </Slot3>

      <Slot3 title="游戏">
        <template slot-scope="datas">
          <ol>
            <li
              style="color: red"
              v-for="(val, index) in datas.games3"
              :key="index"
            >
              {{ val }}
            </li>
          </ol>
        </template>
      </Slot3>

      <Slot3 title="游戏">
        <template scope="datas">
          <h1 v-for="(val, index) in datas.games3" :key="index">
            {{ val }}
          </h1>
        </template>
      </Slot3>
    </div>
  </div>
</template>

<script>
import Slot1 from "./components/Slot1.vue";
import Slot2 from "./components/Slot2.vue";
import Slot3 from "./components/Slot3.vue";

export default {
  name: "App",
  components: {
    Slot1,
    Slot2,
    Slot3,
  },
  data() {
    return {
      games: ["我的世界", "原神", "星穹铁道", "cs2"],
      films: ["红色警戒"],
      foods: ["火锅"],
    };
  },
};
</script>

<style>
.slot1,
.slot2,
.slot3 {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.footer {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>
