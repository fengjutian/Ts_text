### 初始化
```
tsc --init
```

### Vscode 使用tsc watch
在Vscode
`1.` 菜单选择：终端
`2.` 选择：运行任务 
`3.` 输入框，输入 typescript
`4.` 选择： tsc: 监视 - tsconfig.config

### 面向对象程序设计概述

面向对象编程（OOP），是一种设计思想或者架构风格。OO语言之父Alan Kay，Smalltalk的发明人，在谈到OOP时是这样说的：
I thought of objects being like biological cells and/or individual computers on a network, only able to communicate with messages (so messaging came at the very beginning -- it took a while to see how to do messaging in a programming language efficiently enough to be useful)....OOP to me means only messaging, local retention and protection and hiding of state-process, and extreme late-binding of all things. It can be done in Smalltalk and in LISP.

简单解释一下上面的这几句话的大概意思：OOP应该体现一种网状结构，这个结构上的每个节点“Object”只能通过“消息”和其他节点通讯。每个节点会有内部隐藏的状态，状态不可以被直接修改，而应该通过消息传递的方式来间接的修改。

OOP是组件化思想的一种体现。
类的内部包含属性与行为。类是对现实事物的抽象。
比如：人这个事物。有名字、年龄、性别等属性，会说话、
会跑等行为。把这些属性与行为，封装到一起。
不会被外部随便访问到，与外部世界形成了隔离。
在同一类的内部，拥有相似属性的类。通过继承进行数据与行为的交流。
这样也就形成了一个从上而下的数据结构。

在代码层面提供了一个数据与行为的追踪路线。可以为开发者提供一个适当的预期。


### 推荐软件：
JupyterLite：
官网：https://jupyterlite.readthedocs.io/en/latest/
https://github.com/jupyterlite/jupyterlite