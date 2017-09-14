---
layout: default
modal-id: 1
title: Merging multiple pcb laout/gerber files - Tutorial
date: 2016-12-20
img: PCB.jpg
alt: image-alt
project-date: Dec 2016
client: personal
tags: [Hardware, PCB, Eagle, Python, Simple Parse, CAM files, Excellion]
description:  |
    Gerbmerge is software written in python that will combine multiple gerber files into one super board. Gerbmerge offers both manual and automatic (optimization algorithms) as means of board placement. Because eagle cad design software has a limitation of 100x80mm routing area (express) or 160x100mm routing area(edu) , multiple boards cannot be combined together without requiring to upgrade a paid version. To work around this limitation, we can combine the gerber files generated from the eagle instead. By combining the gerber files, we also avoid the problems caused by the panelizing script which redefines all the components to different names. (We combined boards of 10 people and checking each person's board for name conflict is an annoying and time consuming task). The gerbmerge code is originally written by ruggecircuits, here I added some extra programs and altered the code to enable ease up merging the PCBs. This tutorial is a detailed explanation of how to accomplish this goal.

link: <a href="https://radrajith.github.io/gerbmerge/">Project Tutorial Page Link
---
