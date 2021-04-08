<template>
  <div class="homepage-container">
      <el-row class="home-total">
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" class="home-total-item" v-for="(item,index) in homeTotalData" :key="'line-'+index">
            <div class="wrapper-item">
              <p class="title">{{item.title}}</p>
              <p class="value didital-number" ref="countup">{{item.value}}</p>
              <color-line :id='"main"+index' :color="item.color" :optionData="item.data" width="180px" height="70px"></color-line>
            </div>
          </el-col>
      </el-row>

      <el-row class="home-part1" :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" >
              <div class="near-six-month">
                <div class="title">
                    <p class="title-value">平台近6个月的交易记录</p>
                </div>
                <div class="content" ref="near-six-month-chart">
                    <near-six-month width="100%" height="100%"></near-six-month>
                </div>
              </div>
          </el-col>

          <el-col class="detail-item-wrapper" :xs="16" :sm="16" :md="16" :lg="8" :xl="8">
              <div class="home-detail-item" :style="{background: item.color}" v-for="(item, index) in homeDetailItem" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="value">
                    <span class="num">{{(item.value / 10000).toFixed(2)}}</span>万
                </div>
              </div>
          </el-col>

          <el-col :xs="8" :sm="8" :md="8" :lg="4" :xl="4">
            <div class="rank">
              <div class="title">
                <p class="title-value">投资龙虎榜</p>
              </div>
              <div class="content" ref="rankContent">
                  <ul class="wrapper-user">
                      <li v-for="(item, index) in rankList" :key="index" class="user-item">
                          <img class="avatar" :src="item.avatar" width="35" height="35" loading="lazy" alt="">
                          <div class="user-info">
                            <p class="name">{{item.name}}</p>
                            <p class="value">{{item.value}}</p>
                          </div>
                      </li>
                  </ul>
              </div>
            </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import {getHomeTotal, getHomeDetailItem, getRank} from '@/api/homepage'
export default {
  data(){
    return {
      homeTotalData:[],
      homeDetailItem:[],
      rankList:[]
    }
  },
  methods:{

  },
  created(){
    // 获取头部hometotal
    getHomeTotal().then((resp) => {
        console.log("resp", resp)
        this.homeTotalData = resp.data
    }).catch(() => {
        console.log("获取home-total出现异常")
    })

    //获取detailItem
    getHomeDetailItem().then((resp) => {
      this.homeDetailItem = resp.data
    }).catch(() => {
      console.log("获取detailItem出现异常")
    })

    //获取投资榜
    getRank().then((resp) => {
      this.rankList = resp.data
    }).catch(()=>{
      console.log("获取ranklist异常")
    })
  }
}
</script>

<style scoped lang="less">
  .homepage-container {
    min-width: 580px;
  }

  .home-total{
    width: 100%;
    height: 160px;
    border:1px solid #ddd;
    border-radius: 4px;
    margin: 0 0 15px 0;
  }

  .home-total-item{
      box-sizing: border-box;
      display: inline-block;
      height: 100%;
      padding: 15px 0;
      vertical-align: top;
  }

  .wrapper-item{
    height: 100%;
    padding: 0 20px;
    border-right: 1px solid #ccc;
    text-align: center;
  }

  .tital{
    margin: 0px 0;
  }

  .value{
    margin: 5px 0;
    font-size: 34px;
    color: #ffc107;
  }

  .detail-item-wrapper{
    display: flex;
    height: 300px;
    overflow: hidden;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 0 10px;
    color: #fff;   
  }
    .home-detail-item:hover {
      background-image:none !important
    }
    .home-detail-item:nth-child(3), .home-detail-item:nth-child(4) {
      margin-top: 10px;
    }
    .home-detail-item {
      flex: 0 0 48%;
      height: 145px;
      border: 1px solid #eee;
      background-image:linear-gradient(rgba(255, 255, 255, .1), rgba(255, 255, 255, .3)) !important;
      cursor:pointer;
    }
    .name {
      padding: 30px 0 10px 0;
      text-align: center;
      font-size: 20px;
    }
    .value {
      text-align: center;
    }
    .num {
      font-size: 28px;
    }

</style>