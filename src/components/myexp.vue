<template>
  <div class="wrapper">
      <div class="index" @mousedown="start($event)" @mouseup="move($event)">
            <el-carousel trigger="click" height="120px">
                <el-carousel-item v-for="(item,index) in text" :key="index">
                 <h3 class="small">{{ item.title }}</h3>
                 <p class="nei">{{item.nei}}</p>
                </el-carousel-item>
                </el-carousel>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {},
  props: [],
  data() {
    return {
        startX: 0,
        endX: 0,
        startY: 0,
        endY: 0,
      text:[
        {
          title:"就读扬州工业职业技术学院",
          nei:"获得大学英语三级证书，计算机C二级证书"
        },
        {
          title:"在江西八度鱼网络科技有限公司实习",
          nei:"PC端，移动端页面制作,利用HTML,CSS,JS让页面充实，19年6月从该公司辞职"
        },
        {
          title:"新的征程",
          nei:"明天会更好"
        }
        ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    start(e) {
      this.startY = e.clientY;
     this.endY = 0;
     this.startX = e.clientX;
     this.endX=0;
      console.log(this.startX);
     
    },
    move(e) {
       this.endY = e.clientY;
      this.endX = e.clientX;
      var num=this.startX-this.endX;
      if(num>0){
        // console.log("上");
        //   this.$router.replace('/skill')
      }
      else if(num<0){
        // console.log("下")
      this.$router.replace('/skill')
      }
    },
  },
  mounted() {
    
    
  }
};
</script>
<style lang="stylus" scoped>
.index{
    width 100vw
    height 100vh
    background url(../assets/6.jpg)
    background-size cover
    display flex
    justify-content center
    align-items center
    box-sizing border-box
    padding-top 16vh
}
.mask{
    width: 50%;
    padding 20px
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    margin: auto;
}
.el-carousel{
    width 60%
    background red
    display flex
    flex-direction column
    justify-content center
    text-align center
    padding 25px
    background: rgba(255, 255, 255, 0.5);
    border-radius 15px
}
.small{
    font-size 20px
    line-height 40px
}
</style>