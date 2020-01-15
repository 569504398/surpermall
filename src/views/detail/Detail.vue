<template>
        <div class="detail"> 
                 <detail-navbar  class="navbar" />
                 <scroll class="content">
                        <detail-swiper   :swiperImages="topImages" />
                        <detail-base-info :baseInfo="baseInfo"></detail-base-info>
                          <detail-param-info></detail-param-info>
                              <table>
                                           <tr>
                                                   <td  @click="sort" >时间 g<triangle></triangle> </td>
                                                   <td>新关注人数</td>
                                                   <td>取消关注人数</td>
                                                   <td>净增关注人数</td>
                                                   <td>累积关注人数</td>
                                           </tr>
                                           <tr v-for="val in test">
                                                        <td>{{val.time}}</td>
                                                       <td>{{val.fan}}</td> 
                                                       <td>{{val.unfan}}</td> 
                                                       <td>{{val.addFan}}</td> 
                                                       <td>{{val.sumFan}}</td> 
                                           </tr>
                              </table>
                              
                 </scroll>
          </div>      
</template>
<script>
import  detailNavbar from "./child/detailNavbar";
import  detailSwiper from "./child/detailSwiper";
import  detailBaseInfo  from "./child/DetailBaseInfo";
import  detailParamInfo  from "./child/DetailParamInfo";

import scroll   from "components/common/scroll/Scroll.vue";
import triangle   from "components/common/triangle/Triangle.vue";




import  {requestDetail} from "network/home.js";

export default {
       name:"Detail",
        data(){
                return {
                     id:null,
                     goodsItem:{},
                     topImages:[],
                    baseInfo:{},
                    test:[],
                    data2:[]
                }
        },
        components:{
              detailNavbar,
                detailSwiper,
              detailBaseInfo,
              scroll,
              detailParamInfo,
              triangle
        },
        created(){
                 this.id=this.$route.params.id
                  this.requestDetail();
                   let data1=[ {time:"11-21",fan:0,unfan:0,addFan:1,sumFan:0},
                           {time:"11-22",fan:1,unfan:1,addFan:0,sumFan:285},
                           {time:"11-23",fan:0,unfan:0,addFan:2,sumFan:284},
                           {time:"11-24",fan:3,unfan:2,addFan:0,sumFan:200}]
                    this.data2=[
                                   {time:"11-24",fan:3,unfan:2,addFan:0,sumFan:200},
                                   {time:"11-23",fan:0,unfan:0,addFan:2,sumFan:284},
                                    {time:"11-22",fan:1,unfan:1,addFan:0,sumFan:285},
                                     {time:"11-21",fan:0,unfan:0,addFan:1,sumFan:0},
                    ]
                   this.test=data1
                 
        },
        methods:{
                   requestDetail(){
                           requestDetail(this.id).then(res=>{    
                                    this.topImages=res.topImgs;
                                     this.baseInfo=res.goods_detail[0]
                                      
                                    
                           })
                              
                   },
                   sort(){
                            console.log(1111);
                            
                            this.test=this.data2
                   }
           
                
        }
      
}
</script>
<style scoped>
        img{
                width: 100%;
                height: 80vw;
        }
 .detail{
           position: relative;
           z-index: 10;
           background: white;
           /* 屏幕高度 */
            height: 100vh;
 } 
 .content{
           /* 让滚轮不能滚动 */
            overflow: hidden;
           /* 明确高度才能知道滚动距离 */
            height: calc(100% - 44px);
 }
    

</style>