import Mock from 'mockjs'
import * as homepageAPI from './homepage'

//首页homepage相关的接口
Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal)
// 首页homepagedetail的接口
Mock.mock("/homepage/detailItem", 'post', homepageAPI.getHomeDetailItem)
// 首页investmentRank的接口
Mock.mock("/homepage/investmentRank", 'post', homepageAPI.getHomeInvestmentRank)

export default Mock