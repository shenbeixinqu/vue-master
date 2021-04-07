import Mock from 'mockjs'
import * as homepageAPI from './homepage'

//首页homepage相关的接口
Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal)

export default Mock