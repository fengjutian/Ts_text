/**
 * 装饰器的最佳使用场景是横切关注点——面向切面编程。
 *
 * 面向切面编程（AOP） 是一种编程范式，它允许我们分离横切关注点，
 * 藉此达到增加模块化程度的目标。它可以在不修改代码自身的前提下，给已有代码增加额外的行为（通知）。
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器在类声明之前被声明〈紧靠着类声明)。
// 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
function logClass(target) {
    target.prototype.apiUrl = 'http://www.baidu.com';
    target.prototype.hello = () => {
        console.log("hello world");
    };
}
let HttpClient = class HttpClient {
    constructor() { }
};
HttpClient = __decorate([
    logClass
], HttpClient);
const http = new HttpClient();
console.log(http.apiUrl); // http://www.baidu.com
http.hello(); //hello world
// TypeScript装饰器完全指南: https://saul-mirone.github.io/zh-hans/a-complete-guide-to-typescript-decorator
// 推荐框架： http://www.midwayjs.org/
