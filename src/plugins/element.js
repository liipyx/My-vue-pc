import Vue from 'vue'
// import { Button, Message } from 'element-ui'
import { Button,Message,Carousel,CarouselItem,Pagination,InputNumber,MessageBox } from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm 

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(InputNumber)
