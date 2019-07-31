<template>
  <div class="wrapper">
      <div class="index" @mousedown="start($event)" @mouseup="move($event)">
          <div class="mask">
                 <div id="myChart" :style="{ width:'100%',height: '300px'}"></div>
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
      startX: 0,
        endX: 0,
        startY: 0,
        endY: 0,
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
          this.$router.replace('/myexp')
      }
      else if(num<0){
        // console.log("下")
       this.$router.replace('/aboutme')
      }
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
              tooltip: {
   trigger: 'item',
   formatter: "{a} <br/>{b}: {c} ({d}%)"
},
legend: {
   orient: 'vertical',
   x: 'left',
   data:['HTML5','CSS3','JavaScript','Vue','Node.js','Jquery']
},
series: [
   {
       name:'我的主要技能',
       type:'pie',
       radius: ['50%', '70%'],
       avoidLabelOverlap: false,
       label: {
           normal: {
               show: false,
               position: 'center'
           },
           emphasis: {
               show: true,
               textStyle: {
                   fontSize: '30',
                   fontWeight: 'bold'
               }
           }
       },
       labelLine: {
           normal: {
               show: false
           }
       },
       data:[
           {value:95, name:'HTML5'},
           {value:95, name:'CSS3'},
           {value:90, name:'JavaScript'},
           {value:70, name:'Vue'},
           {value:70, name:'Jquery'},
           {value:40, name:'Node.js'}
       ]
   }
]
        });
    }
  },
  mounted() {
    this.drawLine();
    
  }
};
</script>
<style lang="stylus" scoped>
.index{
    width 100vw
    height 100vh
    background url(../assets/5.jpg)
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
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    margin: auto;
    display flex
    justify-content center
}

</style>