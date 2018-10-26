---
layout: blog
banana: true
category: python
title:  使用 face_recognition 和 opncv 编写实时人脸识别
date:   2018-05-13 10:06:42
background-image: http://ot1cc1u9t.bkt.clouddn.com/17-8-1/24280498.jpg
tags:
- opecv
- python
- face_recognition
- 人脸识别
- 实时
redirect_from:
  - /code/
---


[TOC]

> 虽然说人脸识别技术现在已经很成熟了，但是毕竟没有人会为你一个人打造专门的工具，或者是或多或少增加一些不需要的功能甚至广告。所以我们很有必要掌握如何自己实现自己想要的功能～
环境说明： macOs + python3.6

# 环境依赖

python3.6 安装必要的依赖库： `pip install docopt numpy opencv-python opencv-contrib-python dlib face_recognition`

> 这里可能会有点慢，如果要加速的话可以使用 pip 的国内镜像：修改 ~/.pip/pip.conf，(windows下，直接在user目录中创建一个pip目录，如：C:\Users\编程之蛙\pip，新建文件pip.ini, 内容相同)增加如下内容，然后执行上面的命令就会快很多了。

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=mirrors.aliyun.com
```

# 人脸识别实现流程
+ 首先明确功能需求：就是通过PC的摄像头实时的录制图像，并在图像中标记出各个人的称呼。
+ 然后确定需要的技术：既然要实时识别人脸，首先要有一个人脸数据库，不然程序肯定不认识这个人；然后需要实时从数据库中找出摄像头中的人是哪一个。
+ 最后锁定实现方案：
    * 实现人脸数据库的储存，每次运行时指定人物的称呼以及其人脸图像/或者实时截取。
    * 在准备好人脸数据库的基础上，运行识别程序可以实时的检测出界面上所有的人脸图像属于谁。

## 人脸检测
通过图片中扣取人脸图像作为数据库文件的核心代码流程：
```py
# 读取含单个人脸的人脸图像文件
image = cv2.imread(imgname)
# 获取人脸特征位置
face_locations = face_recognition.face_locations(image)
# 人脸特征编码
face_encodings = face_recognition.face_encodings(image, face_locations)
# 获取检测到的第一个人脸区域，这里假设储存数据库的过程只有一个人在图片中
top, right, bottom, left = face_locations[0]
# 截取人脸子图像（方便后面查看和匹配）
face_img = image[top:bottom, left:right, :]
# 保存人脸图像
cv2.imwrite(usrname, face_img)
```
后续增加了通过摄像头获取图像的方法以及一些输入输出参数的处理。

## 人脸识别
加载所有人脸数据库下的人脸图片特征，实时将图像中的所有人脸特征与数据库匹配，找到则显示称呼，否则显示未知。核心代码流程：
```py
# 与数据库匹配以寻找是否存在的函数
def recognize_faces(face_encodings):
    face_names = []
    for face_encoding in face_encodings:
        # See if the face is a match for the known face(s)
        matches = face_recognition.compare_faces(
            known_face_encodings, face_encoding)
        name = "unknown"
        # If a match was found in known_face_encodings, just use the
        # first one.
        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]
        face_names.append(name)
    return face_names
```
接下来的流程就是循环读取摄像头返回的帧数据，对每一帧数据提取各个人脸特征，然后传递给这个回调函数判断--将返回的称呼显示在界面上。

## 运行源程序
github 地址： https://github.com/HeLiangHIT/real_time_recognize

使用步骤：
1. 通过两种方法创建人脸数据库举例如下：
+ `python face_db.py --name='baby' --image='/Users/heliang/baby.jpg'` # 通过指定单人脸图片文件创建
+ `python face_db.py --name='owner'` # 通过摄像头捕捉人脸实现，感觉光照合适后就可以按空格/回车确认照片
2. 运行如下命令即可通过摄像头实时识别人脸：
+ `python run_recognize.py` 同样可以使用 --dir 参数指定人脸数据库目录，默认同上。
> 创建的人脸数据库默认保存在 家目录/Pictures/head/ 下，也可以使用 --dir 参数指定到其他目录，可以前往查看保存的文件信息。主要是 .jpg 和 .npy 两种。

效果如下：
![./img/人脸识别效果-min.gif](./img/人脸识别效果-min.gif)

# 后记
我觉得最麻烦的部分大概是安装dlib库，在mac/linux上安装是相对简单的，百度的流程基本都能走通；在windows上则非常繁琐，最让我恶心的是必须要安装臃肿的VS2015以上，所以程序没有在windows上测试。





