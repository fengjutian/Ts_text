// 1. 基本示例

/**
 * 
class Info {
  //成员属性，实际上是通过public上进行修饰，只是省略了
  name2:string = 'name2' //ok 
  //name3:string //error
  name_1!:string
  name4:string //ok 不设置默认值的时候必须加入 !

  //构造方法
  constructor(name4:string){
    this.name4 = name4
  }

  //成员方法
  getName4 = () => {
    return `我是成员方法:${this.name4}`
  }

  // 存取器
  // get 方法
  get name5(){
    return this.name4
  }

  //set 方法
  set name5(name5){
    this.name4 = name5
  }

  // 静态属性
  static name1: string = 'Li' 

  //静态方法
  static getName = () => {
    return '我是静态方法'
  }
}

const _info = new Info('你好')
console.log('_info.name_1', _info.name_1); // undefined
console.log('_info.name2', _info.name2) // name2
console.log('_info.name4', _info.name4) // 你好

console.log('_info.getName4()', _info.getName4()) // "我是成员方法:你好" 

_info.name5 = '555'
console.log('_info.name5',_info.name5); // 555

console.log('Info.name1', Info.name1) //  "Li" 
// console.log(_info.name1); // 报错 静态属性属于类，不能再示例中使用

console.log('Info.getName()', Info.getName()) // "我是静态方法" 
// console.log(_info.getName()) // 报错 静态方法属于类，不能在实例中使用

 */

// ------------------ 分割线 -----------------
// 2. 继承 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
/**
 * 
class Animal {
  name: string
  
  constructor (name: string) {
    console.log('Animal:', name)
    this.name = name
  }

  run (distance: number=0) {
    console.log(`=== ${this.name} run ${distance}m`)
  }
}

class Snake extends Animal {
  constructor (name: string) {
    console.log('Snake:', name)
    // 调用父类型构造方法
    super(name)
  }

  // jump () { // 会跳的Snake
  // }
}

class Horse extends Animal {
  color: string

  constructor (name: string, color: string) {
    // 调用父类型构造方法
    // this.color = color // 访问派生类的构造函数中的 "this" 前，必须调用 "super"。
    console.log('Horse:', color, name)
    super(name)
    this.color = color;
  }

  // 重写父类型的方法
  run (distance: number=50) {
    console.log('Horse run')
    // 调用父类型的一般方法
    super.run(distance)
  }

  xxx () {
    console.log('xxx()')
  }
}

const snake = new Snake('小snake')
snake.run() // 小snake run 0m

const horse = new Horse('小马', '绿')
horse.run() // 小马 run 50m
horse.run(60) // 小马 run 60m
horse.xxx() // xxx()

//如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例
const tom3: Snake = new Animal('Tom Snake')
tom3.run() // Tom Snake run 0m

*/



// ----------------------- 分割线 ------------------
// 3. 公共，私有与受保护的修饰符
// [1]: 默认为 public  类中、子类内的任何地方、外部都能调用
// [2]: protected 类中、子类内的任何地方都能调用,但外部不能调用
// [3]: private  类中可以调用，子类内的任何地方、外部均不可调用

/**
 * 
class Animal {
  public name: string

  public constructor (name: string) {
    this.name = name
  }

  public run (distance: number=0) {
    console.log(`${this.name} run ${distance}m`)
  }
}

class Person extends Animal {
  private age: number = 18
  protected sex: string = '男'

  run (distance: number=5) {
    console.log('Person:', this)
    super.run(distance)
  }
}

class Student extends Person {
  run (distance: number=6) {
    console.log('Student:', this)
    console.log('子类能看到父类中受保护的成员: ', this.sex) // 子类能看到父类中受保护的成员
    // console.log(this.age) // 属性“age”为私有属性，只能在类“Person”中访问。

    super.run(distance)
  }
}

console.log(new Person('abc').name) // 公开的可见
// console.log(new Person('abc').sex) // 受保护的不可见  不能被访问，可被子类使用
// console.log(new Person('abc').age) //  私有的不可见

 */

// 私有字段(#)
// 在 TS 3.8版本便开始支持ECMACMAScript的私有字段。

// 需要注意的是私有字段与常规字段不同，主要的区别是：
// [1]: 私有字段以 # 字符开头，也叫私有名称；
// [2]: 每个私有字段名称都唯一地限定于其包含的类；
// [3]: 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// [4]: 私有字段不能在包含的类之外访问，甚至不能被检测到。

/**

class Info {
  #name: string; //私有字段
  getName: string;

  constructor(name: string) {
    this.#name = name;
    this.getName = name
  }

  setName() {
    return `我的名字是${this.#name}`
  }
}

let myName = new Info("Domesy");

console.log(myName.setName()) // "我的名字是Domesy" 
console.log(myName.getName) // ok "Domesy" 
// console.log(myName.#name) // 属性 "#name" 在类 "Info" 外部不可访问，因为它具有专用标识符。

 */


// ----------------- 分割线 -----------------
// readonly 修饰符
// 你可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

/**
 * 
class Person {
  readonly name: string = 'abc'
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person('John')
// john.name = 'peter' // 无法分配到 "name" ，因为它是只读属性。

 */



// ----------------------  分割线 --------------------- 
// abstract: 用abstract关键字声明的类叫做抽象类，声明的方法叫做抽象方法
// 抽象类：指不能被实例化，因为它里面包含一个或多个抽象方法。
// 抽象方法：是指不包含具体实现的方法；
// 注：抽象类是不能直接实例化，只能实例化实现了所有抽象方法的子类

/**
 
abstract class Animal {
  abstract cry() // 抽象方法
  run () {
    console.log('run()')
  }
}

class Dog extends Animal {
  cry () {
    console.log(' Dog cry()')
  }
}

const dog = new Dog()
dog.cry()
dog.run()

 */
