// 接口
/**
 * TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。
 * 接口是对象的状态(属性)和行为(方法)的抽象(描述)
 */
// 1. 定义一个人的接口
// interface IPerson {
//     id: number;
//     name: string;
//     age: number;
//     sex: string;
// }
// const person1: IPerson = {
//     id: 1,
//     name: 'Tom',
//     age: 20,
//     sex: '男'
// }
/**
 * 2.可选属性
 * 接口里的属性不全都是必需的。
 */
// interface IPerson {
//     id: number;
//     name: string;
//     age: number;
//     sex?: string; // 可选值
// }
// const person2: IPerson = {
//   id: 1,
//   name: 'tom',
//   age: 20,
//   // sex: '男' // 可以没有
// }
/**
 * 3. 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性
 */
//  interface IPerson {
//   readonly id: number
//   name: string
//   age: number
//   sex?: string
// }
// 一旦赋值后再也不能被改变了。
// const person2: IPerson = {
//   id: 2,
//   name: 'tom',
//   age: 20,
//   // sex: '男' // 可以没有
//   // xxx: 12 // error 没有在接口中定义, 不能有
// }
// person2.id = 2 // 无法分配到 "id" ，因为它是只读属性。
// 4. 类类型
/**
 * 类实现接口
 * 与 C# 或 Java 里接口的基本作用一样，TypeScript 也能够用它来明确的强制一个类去符合某种契约。
 */
// interface Alarm {
//   alert(): any;
// }
// class Car implements Alarm {
//   alert() {
//     console.log('Car alert');
//   }
// }
// 一个类可以实现多个接口
// interface Alarm {
//   alert(): any;
// }
// interface Light {
//   lightOn(): void;
//   lightOff(): void;
// }
// class Car2 implements Alarm, Light {
//   alert(): void {
//     console.log('Car alert');
//   }
//   lightOn(): void {
//       console.log('Car loght on');
//   }
//   lightOff(): void {
//       console.log('Car loght off');
//   }
// }
// 5. 接口继承接口
/**
 * 和类一样，接口也可以相互继承。
 * 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
// interface Alarm {
//   alert(): any;
// }
// interface Light {
//   lightOn(): void;
//   lightOff(): void;
// }
// interface LightableAlarm extends Alarm, Light {
// }
