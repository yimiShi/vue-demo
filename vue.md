#### 1. 是什么
  1. 渐进式框架, 需要什么导入什么
  2. angular -- 模板, 数据绑定,   react -- 组件化, 虚拟dom

#### 2. 组成
  1. vue-cli 脚手架

#### 3. 数据监视
  1. data里面所有的数据和子数据, 都受到set方法的监视, 数组除外
  2. 所以数组里面元素的改变, 不能通过 this.persons[index] = ''来修改, 这样改了页面不会变动
  3. 数组的变化监测, push(), pop, shift, unshift, splice, sort, reverse, 把这些方法进行了重写, 使他们能被监测到, 从而更新页面

#### 4. 事件处理
  1. 绑定监听
     1. @click, @keyup, 默认带event参数, 或者自己带过去@click="test(12, $event)"
  2. 事件修饰符
     1. @click.prevent(test), @click.stop(test)
  3. 按键修饰符
     1. @keyup.enter(test)

#### 5. 表单数据收集, v-model 数据双向绑定

#### 6. 生命周期, 初始化, 更新, 死亡
  1. create, mounted, update, destory

#### 7. 动画, 过渡
  <transtion name=""></transtion>

#### 8.过滤器
  1. 对显示的数据进行格式化之后再进行显示
  2. 全局过滤器, 到处复用, computed只针对一个data里面的属性
  3.  // 定义过滤器
  Vue.filter('dateString', function (value, format='YYYY-MM-DD HH:mm:ss') {
    return moment(value).format(format);
  })
  {{time|dateString}}

#### 9. 指令
  1. 内置指令, 都是操作标签
    v-text : 更新元素的 textContent
    v-html : 更新元素的 innerHTML
    v-if : 如果为true, 当前标签才会输出到页面
    v-else: 如果为false, 当前标签才会输出到页面
    v-show : 通过控制display样式来控制显示/隐藏
    v-for : 遍历数组/对象
    v-on : 绑定事件监听, 一般简写为@
    v-bind : 强制绑定解析表达式, 可以省略v-bind
    v-model : 双向数据绑定
    ref : 为某个元素注册一个唯一标识, vue对象通过$refs属性访问这个元素对象
    v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }
  2. 自定义指令
     1. 注册全局指令
       ```
        Vue.directive('upper-text', function (el, binding) {
          console.log('upper-text', binding)
          el.textContent = binding.value.toUpperCase()
        })
       <p v-upper-text="msg"></p>
       ```
    2. 注册局部指令
       ```
       directives: {
         // 单引号, 因为由 - , 不能使用小驼峰写法
          'lower-text'(el, binding) {
            console.log(el, binding)
            el.textContent = binding.value.toLowerCase()
          }
        }
       <p v-lower-text="msg"></p>
       ``` 
#### 10.插件
  1. 实例方法(this.eat = function(){}, 实例使用
  2. 静态方法(static, Cat.eat = function(){}, 构造器函数使用
  3. 原型方法(prototype), 实例和构造器函数都能用

  
#### 11. vue-cli
  1. vue webpack vue-demo
  2. 

##### 1. 项目结构
  1. .babelrc
     1. 语法转换工具, 用很多插件完成功能
     2. .babelrc  (runtime controll), 制定转发规则配置
        1. presets 预设包, 包含很多插件
           1. env
           2. state-2
        2. plugins 插件包, 添加presets之外的插件

  2. .eslintrc  
    1. 语法检查配置文件
  3. /build webpack打包构建文件
  4. /src
  
#### 2. 组件间通信
  1. 父子, 兄弟, 祖孙
  2. props
     1. 一般属性 父-> 子
     2. 函数属性 子-> 父, 事件在子组件, 数据在父组件
     3. 兄弟通信 props设置在父组件, 数据在父组件
     4. 祖孙通信 逐层传递
  3. ref, 获取子组件对象
     1. 事件在父组件, 数据在子组件
  4. vue自定义事件
     1. 子向父, 相当于传递函数
     2. 事件总线实现任意组件数据通信
  5. 消息订阅与发布
     1. pubSubJs
     2. 任意组件通信
  6. slot 插槽
     1. 父向子通信, 传递标签

#### 3. 事件操作
  1. 绑定事件监听
     1. 事件名/类型
     2. 回调函数, 在分发事件时执行, 可以接收到传递的数据
  2. 触发/分发事件
     1. 原生: 用户对标签元素的界面做特定操作时, 浏览器会自定分发对应名称的事件, 并根据操作封装一个人包含所有相关信息数据的对象event
     2. 自定义的: 必须执行特定的分发事件的代码
     3. 事件名/类型
     4. 数据
  3. 自定义事件
     1. 子向父传递数据
        <Header @addTodo="addTodo"></Header> 
        this.$emit('addTodo', todo)
     2. 子向父传递数据
        ```
          App.vue
          <Header ref="header"></Header>
          mounted() {
            this.$refs.header.$on('addTodo', this.addTodo)
          },
          methods: {
            addTodo() {...}
          }
          Header.vue
          this.$emit('addTodo', todo)
        ```
     3.全局事件中线