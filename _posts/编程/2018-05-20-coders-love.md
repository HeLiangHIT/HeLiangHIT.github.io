---
layout: blog
code: true
istop: true
category: python
title:  用 python 完成程序员的表白
date:   2018-05-20 10:06:42
background-image: http://ot1cc1u9t.bkt.clouddn.com/17-8-1/24280498.jpg
tags:
- python
- 女朋友
- 图片墙
- 爱心
- 情书
- wordcloud
- Pillow
- clize
redirect_from:
  - /code/
---


[TOC]

# 你知道我是怎么用python表(liao)白(mei)的吗？

> 刚开始维护的公众号，最近公司就忙得不得了，天天加班到很晚才回来，根本没有时间搞(chui)技(niu)术(bi)。其实对于这个公众号，我还是有很多好的想法准备分享的，但是鉴于今天又到了万众期待的520，所以我还是准备给大家分享一点小把戏，希望有对象的能取悦到你的对象/没对象的能忽悠到一个对象～咳。

本文主要就分享两个小把戏，后期要是有更多想法我会同时更新到 [gayhub](https://github.com/HeLiangHIT/coders_love) ，鉴于代码和原理的解释通常都比较枯燥无味，所以我就直接把代码地址扔出来了 https://github.com/HeLiangHIT/coders_love ，本文主要就介绍一下使用方法，由于大部分观众都是windows用户，特地找了一个windows电脑尝试尽可能详细的把安装步骤介绍一下，以便帮助大家快速使用，看不懂的地方可以留言提问或者私聊(别忘了点击文章左上角的 **编程之蛙** 关注我哦)。

## 环境准备
1. 到 anaconda 官网:  https://www.anaconda.com/download/#windows 下载 Python 3.6 version 最新的安装包，然后一路点击确认下一步安装完成。
2. 按 windows键+R 弹出的框中输入cmd，然后输入`pip install Image clize jieba numpy pandas matplotlib wordcloud scipy wordcloud` 安装所有依赖包。
3. 使用 cd 命令跳转到代码所在路径（windows 下磁盘之间的跳转直接输入 `e:` 即可进入E盘，然后 cd 依次进入对应目录）
4. 然后参考下面的命令使用～以我四级英文水平写的帮助希望大家能看得懂～


## 照片墙
依赖：
`pip install Image clize`

使用：
`python picture_wall.py --help`
```
Usage: ./picture_wall.py [OPTIONS] [text...]

生成照片墙

Arguments:
  text...                 Text of picture wall, if not defined this will generage a rectangle picture wall

Options:
  -s, --font-size=INT     font size of a clear value (default: 20)
  -e, --edge-len=INT      sub picture's egde length (default: 50)
  -w, --wall-width=INT    picture number of rectangle width (default: 20)
  -l, --wall-length=INT   picture number of rectangle length (default: 10)
  -d, --pic-dir=STR       picture's path (default: ./img)
  -o, --out-dir=STR       output dir (default: ./out)
  -p, --font-path=STR     font path (default: ./demo.ttf)

Other actions:
  -h, --help              Show the help
```
for example:

`./picture_wall.py 我爱你 -s 30 -e 10`
![./img/我爱你.png](./img/我爱你.png)

如果指定为相册文件夹的话，将得到如下效果（文件夹下图片太多而且太大的话会比较慢）：
![./img/520.png](./img/520.png)


## 爱心情书
依赖：
`pip install jieba numpy pandas matplotlib wordcloud scipy wordcloud`

使用：
`python heart_cloud_word.py --help`
```
Usage: ./heart_cloud_word.py [OPTIONS] [par...]

生成文字云

Arguments:
  par...

Options:
  -t, --text-file=STR   text file that contain all you word (default: ./data/love_letter.txt)
  -s, --stop-file=STR   the stop word which can't be considered (default: ./data/stopwords.txt)
  -c, --color-img=STR   the color map img (default: ./data/pink.jpg)
  -m, --mask-file=STR   the mask img for the word
  -o, --out-file=STR    output file path which should with sufix of png/jpg... (default: ./out/word_cloud.png)
  -p, --font-path=STR   font path (default: ./demo.ttf)

Other actions:
  -h, --help            Show the help
```
for example:

`./heart_cloud_word.py`
![./img/word_cloud.png](./img/word_cloud.png)

后期稍微PS处理一下就可以得到下面的效果：
![./img/I_LOVE_KWY.jpg](./img/I_LOVE_KWY.jpg)




