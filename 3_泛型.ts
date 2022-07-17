// 看一个示例： 不使用泛型

// function createArray(value: any, count: number): any[] {
//   const arr: any[] = []
//   for (let index = 0; index < count; index++) {
//     arr.push(value)
//   }
//   return arr
// }

// const arr1 = createArray(11, 3)
// const arr2 = createArray('aa', 3)
// console.log(arr1[0].toFixed(), arr2[0].split(''))

// 使用泛型
// function createArray2 <T> (value: T, count: number) {
//   const arr: Array<T> = []
//   for (let index = 0; index < count; index++) {
//     arr.push(value)
//   }
//   return arr
// }
// const arr3 = createArray2<number>(11, 3)
// console.log(arr3[0].toFixed())

// const arr4 = createArray2<string>('aa', 3)
// console.log(arr4[0].split(''))

// 可以这样理解：Js中没有类型。Ts中有类型。为了复用同一个函数、方法,
// 于是，提供了泛型（广泛的类型，或者说以及使用者设置类型）


// ------------------------- 分割线 --------------------------
// 多个泛型参数的函数

// function swap <K, V> (a: K, b: V): [K, V] {
//   return [a, b]
// }
// const result = swap<string, number>('abc', 123)
// console.log(result) //  ['abc', 123]


// ------------------------- 分割线 -------------------
// 泛型接口
// interface IbaseCRUD <T> {
//   data: T[]
//   add: (t: T) => void
//   getById: (id: number) => T
// }

// class User {
//   id?: number; //id主键自增
//   name: string; //姓名
//   age: number; //年龄

//   constructor (name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// class UserCRUD implements IbaseCRUD <User> {
//   data: User[] = []
  
//   add(user: User): void {
//     user = {...user, id: Date.now()}
//     this.data.push(user)
//     console.log('保存user', user.id)
//   }

//   getById(id: number): User {
//     return this.data.find(item => item.id===id)
//   }
// }

// const userCRUD = new UserCRUD()
// userCRUD.add(new User('tom', 12))
// userCRUD.add(new User('tom2', 13))
// console.log(userCRUD.data)


// ------------------- 分割线 -----------------------

// 在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型

// class GenericNumber<T> {
//   zeroValue: T
//   add: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = function(x, y) {
//   return x + y 
// }

// let myGenericString = new GenericNumber<string>()
// myGenericString.zeroValue = 'abc'
// myGenericString.add = function(x, y) { 
//   return x + y
// }

// console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12)) // 12
// console.log(myGenericString.add(myGenericString.zeroValue, 'test')) // abctest

// 泛型约束
// 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性

// function fn <T>(x: T): void {
//   // console.log(x.length)  // 类型“T”上不存在属性“length”。
// }

/**
 interface Lengthwise {
  length: number;
}

// 指定泛型约束
function fn2 <T extends Lengthwise>(x: T): void {
  console.log(x.length)
}

// 我们需要传入符合约束类型的值，必须包含必须 length 属性：
fn2('abc')
// fn2(123) // error  number没有length属性

 */
