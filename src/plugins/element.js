import Vue from 'vue'
// import { Button, Message } from 'element-ui'
import { Button,Message,Carousel,CarouselItem,Pagination,InputNumber} from 'element-ui'

Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(InputNumber)
