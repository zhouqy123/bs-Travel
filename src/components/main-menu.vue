<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="menu">
          <div>Travel</div>
          <div class="header-center">
            <span v-for="(item,index) in headerList" :key="index" @click="gotoLink(item)">{{item.name}}</span>
          </div>
        </div>
      </el-header>
      <!-- <el-main>Main</el-main> -->
    </el-container>
  </div>
</template>

<script>
import {routeDisable} from '../utils/commonUtils.js'
export default {
  name: "Home",
  data(){
    return{
      headerActive:"",//点亮头部功能
      // 头部菜单
      headerList:[{
        id:'0',
        name:'首页',
        path:'/',
      },{
        id:'2',
        name:'游记',
        path:'/travelList',
      },{
        id:'3',
        name:'广场',
        path:'/social',
      },{
        id:'4',
        name:'景点',
        path:'/attractions',
      },{
        id:'5',
        name:'近期热点',
        path:'/recent',
      }],
    }
  },
  components: {},
  methods:{
    gotoLink(item){
      console.log(item);
      this.$router.push({path:item.path})
      console.log(this);
      // if(routeDisable(item.path, this.$route.path)){
      //   this.headerActive = item.path;
      //   this.$router.push({path:item.path})
      // }else{
      //   this.$router.replace({path:"/"});
      // }
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 60px; */
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>