import { fromJS } from 'immutable';

//immutable对象，可以防止state的修改

//home的reducer，划分redcer
const defaultState = fromJS({
  topicList: [{
    id:1,
    title: "社会热点",
    imgUrl: '/favicon.ico'
  },
  {
    id:2,
    title: "手绘",
    imgUrl: '/favicon.ico'
  },
  {
    id:3,
    title: "简书电影",
    imgUrl: '/favicon.ico'
  },
  {
    id:4,
    title: "读书",
    imgUrl: '/favicon.ico'
  },
  {
    id:5,
    title: "摄影",
    imgUrl: '/favicon.ico'
  },
  {
    id:6,
    title: "旅行-在路上",
    imgUrl: '/favicon.ico'
  }],
  articleList: [{
    id:1,
    title: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较',
    desc: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较 在高并发业务场景下，典型的阿里双11秒杀等业务，消息队列中间件在流量',
    imgUrl: '//upload-images.jianshu.io/upload_images/11464886-065b6d5d89702bf6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:2,
    title: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较',
    desc: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较 在高并发业务场景下，典型的阿里双11秒杀等业务，消息队列中间件在流量',
    imgUrl: '//upload-images.jianshu.io/upload_images/11464886-065b6d5d89702bf6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:3,
    title: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较',
    desc: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较 在高并发业务场景下，典型的阿里双11秒杀等业务，消息队列中间件在流量',
    imgUrl: '//upload-images.jianshu.io/upload_images/11464886-065b6d5d89702bf6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:4,
    title: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较',
    desc: '高并发架构系列：Kafka、RocketMQ、RabbitMQ的优劣势比较 在高并发业务场景下，典型的阿里双11秒杀等业务，消息队列中间件在流量',
    imgUrl: '//upload-images.jianshu.io/upload_images/11464886-065b6d5d89702bf6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },],
  recommandList: [{
    id: 1,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },
  {
    id: 2,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },
  {
    id: 3,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },
  {
    id: 4,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  },]
});
  
  export default (state = defaultState, action) => {
    switch(action.type) {
      default:
        return state
    }
  }