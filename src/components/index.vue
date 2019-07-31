<template>
  <div class="wrapper">
      <div class="index" @mousedown="start($event)" @mouseup="move($event)">
          <div class="mask animated" @mouseenter="mouse()" @mouseleave="mouseover()" :class="[ flag ? 'bounce' : '' ]">
                <h2 class="title">Hello I'm Yewentao</h2>
                <p>我叫叶文韬</p>
                <p>一名前端开发工程师</p>
                <p>z353243353@sina.com</p>
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
          this.$router.replace('/aboutme')
      }
      else if(num<0){
        // console.log("下")
      
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
    background url(../assets/2.jpg)
    display flex
    justify-content center
    align-items center
    box-sizing border-box
    padding-top 16vh
}
.mask{
    width: 60%;
    padding 10px
    text-align: center;
    border: 2px solid gray;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    margin: auto;
}
.title{
    font-size 30px
    line-height 50px
}
.bounce{
  box-shadow: 0 0 8px #888888;
}
p{
    line-height 30px
}
</style>
