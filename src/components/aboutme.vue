<template>
  <div class="wrapper">
      <div class="index" @mousedown="start($event)" @mouseup="move($event)">
          <div class="mask animated" @mouseenter="mouse()" @mouseleave="mouseover()" :class="[ flag ? 'bounce' : '' ]">
                 <p class="aboutme_text">您好，我叫叶文韬，毕业于扬州工业职业技术学院，对编程有浓厚的兴趣，曾经自学C语言并取得计算机二级证书，后由于不想继续研究单片机，就利用学C语言的编程经验自学了前端，职业规划是往全栈发展，目前在学node.js以及react框架。之前的实习及工作中实现整个页面的开发，配合后台人员实现产品前端界面效果与功能。会写响应式页面，移动端页面，PC端页面，且熟练使用Vue框架</p>
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {},
  props: [],
  data() {
    return {
      flag:false,
      startX: 0,
        endX: 0,
        startY: 0,
        endY: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
     mouse(){
      this.flag=true;
      
      
    },
    mouseover(){
      this.flag=false;
    },
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
          this.$router.replace('/skill')
      }
      else if(num<0){
        // console.log("下")
      this.$router.replace('/index')
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
    background url(../assets/4.jpg)
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
p{
    text-indent 2em
    line-height 30px
    color #fff
}
</style>