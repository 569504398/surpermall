export  const  itemListenerMixin={
    mounted(){
              
                   //  获取refrsh函数名,相当于一个匿名函数,不能直接将括号给,那是函数直接执行了再给这个变
       const refresh= debounce(scroll.refresh,500)

       //第一次加载页面时,是按没有加载图片的子元素高度来确定滚动范围的,现在监听图片加载,有几张图片就会调用refresh几次,通过一个
      //  防抖函数进行处理,超出那个时间后才会有下一次调用
      //     这个函数$on与$emit是对接,调用比较多
          this.$bus.$on("imgLoad",()=>{     
                      //减少了scroll.refresh函数的调用     
                      refresh();
      })       
      // 获取组件对应 的元素,这里获取的高度是未加载图片的高度
      //   let ele=  this.$refs.tabController.$el;
      // console.log(ele.offsetTop);
   
},
}