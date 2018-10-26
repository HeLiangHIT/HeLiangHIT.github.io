---
layout: blog
istop: true
title: "Markdown中插入数学公式的方法"
background-image: https://o243f9mnq.qnssl.com/2017/06/116099051.jpg
date:  2018-10-26
category: tools
tags:
- markdown
- math
- 效率
redirect_from:
  - /tool/
---

[TOC]

>关于MARKDOWN的基本使用可以在需要时查阅： http://xianbai.me/learn-md/article/about/readme.html 写得还是非常优秀简洁的。

自从使用Markdown以来，就开始一直使用Markdown在写文章，整理自己的所学所思。本文亦是通过这种方式完成的。

然而，Markdown自由书写的特性很好，唯独遇到数学公式时就要煞费苦心——每次都是先使用Latex书写(在线的Latex编辑器参考[1])，然后保存为图片，使用img标签进行引用，当公式很多的时候稍显复杂。

本文的方法使用html的语法，调用[1]的公式生成API，在线生成Latex数学公式，免去将公式保存为图片的麻烦。当然，弊端也是有的，公式太多，可能会造成刷新比一般的网页慢一些。


## 使用MathJax引擎

大家都看过[Stackoverflow](http://stackoverflow.com/)上的公式吧，漂亮，其生成的不是图片。这就要用到MathJax引擎，在Markdown中添加MathJax引擎也很简单，

```
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"></script>
```

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"></script>

然后，再使用Tex写公式。`$$公式$$`表示行间公式，本来Tex中使用`\(公式\)`表示行内公式，但因为Markdown中`\`是转义字符，所以在Markdown中输入行内公式使用`\\(公式\\)`，如下代码：

```
$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
\\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\\)
```

分别显示结果（行间公式）：

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

行内公式：\\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\\)
> CSDN上需要使用四个反斜杠转义。

不信，你可以试一下，在公式上还可以使用鼠标右键操作。

## 参考
[1] <http://www.forkosh.com/mathtextutorial.html>
[2] <http://www.ruanyifeng.com/blog/2011/07/formula_online_generator.html>
[3] <http://www.forkosh.com/mathtex.html>

