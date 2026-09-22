---
title: "SCGA：语义-上下文图适配器（Semantic-Context Graph Adapter）"
description: "车辆重识别：把多任务视觉编码器的语义预测分布与相机元数据构造成概率异构图，做编码器后置的特征适配。"
category: project
project: scga
badge: "研究"
tags: ["Re-ID", "计算机视觉", "图神经网络", "度量学习", "WACV"]
date: "2026-09-22"
pinned: false
draft: false
---

> 本文整理我在车辆重识别（Vehicle Re-ID）方向的一项研究工作：**SCGA（Semantic-Context Graph Adapter）**。

## 研究背景

车辆重识别的目标，是在多个**互不重叠的摄像头**之间检索出同一辆车，支撑跨摄像头车辆检索、交通调查等应用。

难点在于：不同车辆常常颜色、车型、品牌相似；而同一辆车在不同摄像头下，又会因为光照、视角、运动模糊、遮挡和分辨率变化而外观差异很大。因此**仅靠外观特征的匹配并不可靠**。

## 核心思想

现有方法往往只在 Re-ID 流程的**特定阶段**使用语义属性和相机元数据——比如作为辅助监督、相机感知编码、表征网络内部的图推理，或检索时过滤。

SCGA 走了一条不同的路：

> 把多任务视觉编码器输出的「颜色 / 车型」**预测分布** + 相机元数据，构造成一个**编码器后置的概率图**，在图上对特征做语义-上下文适配。

几个关键点：

- 不依赖关键点、部件或车辆内部结构标注；
- 图由 `image`、`attribute`（color / type）、`camera` 三类节点组成；
- `image–attribute` 边由**预测置信度**加权，`image–camera` 边来自**元数据**；
- 图卷积传播语义-上下文信息，图精炼后的特征与原始视觉嵌入做**残差融合**；
- AQE（Alpha Query Expansion）只作为**可选的检索时后处理**，与表征层增益分开报告。

## 方法：四个阶段

### Stage 1 · 视觉-语义编码

编码器采用 **ResNet50-IBN-a**，同时输出身份判别特征 `I_i` 和语义预测 `P_i`（颜色 + 车型分布），用 identity、triplet、color、type 四个目标联合训练。Stage 1 结束后编码器冻结。

### Stage 2 · 语义-上下文图构建

把编码器输出与元数据映射成一个加权异构图 `G_sc = (V, E, W)`，节点 `V = V_img ∪ V_sem ∪ V_ctx`：图像节点用 `I_i` 初始化，语义 / 上下文节点作为共享锚点。

### Stage 3 · 图推理 + 残差融合

两层 GCN 在图上传播语义-上下文信息，图精炼特征与原始嵌入做残差融合，得到最终表征。

### Stage 4 · 可选检索时精炼（AQE）

用 top-K 近邻做 α 加权查询扩展（`K=5, α=3.0`），与 SCGA 的表征增益分开评估。

## 实验结果

### VeRi-776

| 方法 | mAP | Rank-1 | Rank-5 |
| --- | --- | --- | --- |
| Baseline（ResNet50-IBN-a） | 78.96 | 96.66 | 98.51 |
| **SCGA（无后处理）** | **87.04** | **97.62** | **98.87** |
| **SCGA + AQE** | **87.99** | **97.91** | **98.93** |

与代表性方法的 mAP 对比：VAMI+STR 61.3、RAM 61.5、AAVER 58.5、PRN 74.3、VARID 79.3、PVEN 79.5、SAVER 79.6、TransReID 82.0、DFNet 80.9、GiT 80.3、SSBVER 82.1、SRF 82.4、SHCI 82.9、KGG 83.3。

### 消融：语义节点类型（B=16）

| 节点 | mAP | ΔmAP |
| --- | --- | --- |
| Camera | 78.23 | -0.73 |
| Type | 84.58 | +5.62 |
| Color | 84.75 | +5.79 |
| Color + Type | 86.41 | +7.45 |
| Color + Type + Camera | 87.04 | +8.08 |

**结论**：语义属性（颜色 / 车型）带来主要增益，相机元数据提供互补的上下文。

其它消融：置信度阈值 `τ=0.1`、融合比例 `λ=0.5`；图卷积 **GCN 优于 GAT**（84.13 vs 77.36，且更稳定）；两层 GCN 最优。

### VehicleID 可扩展性

| Split | Baseline mAP | SCGA mAP | ΔmAP |
| --- | --- | --- | --- |
| Test800 | 76.71 | 84.19 | +7.48 |
| Test1600 | 75.17 | 81.79 | +6.62 |
| Test2400 | 72.79 | 79.31 | +6.52 |

### 效率（RTX 2080Ti，11,579 张画廊图）

SCGA 增加 8.47M 参数、0.67 GFLOPs；单查询延迟从 7.76ms 增至 9.53ms，AQE 另加 0.35ms；默认 B=16 时 3.97ms/query（约 252 queries/s）。

### AIC21 CityFlow-ReID 迁移

属性对齐微调后达到 79.93% mAP、94.16% Rank-1；零样本定性分析也验证了跨相机网络与数据分布下，语义-上下文图适配仍然有效。

## 主要贡献

1. 提出 **SCGA**——编码器后置的语义-上下文图适配器；
2. 构造**概率异构图**（image ↔ color/type 置信度加权边、image ↔ camera 元数据边）；
3. 用图推理 + 残差融合精炼视觉嵌入，**保留身份判别的外观特征**；
4. 在 **VeRi-776、VehicleID、AIC21 CityFlow-ReID** 上验证。

## 论文状态

本工作投稿 **WACV 2027（Applications Track）**，目前处于审稿阶段。项目说明已同步到 [github.com/Fuhai-Liang/Project](https://github.com/Fuhai-Liang/Project) 的 `SCGA/` 目录，代码将在论文接收后整理发布。
