---
title: "RAG 学习笔记与工程实践"
description: "检索增强生成、向量库、Embedding、评估指标，以及真实项目里踩过的坑。"
category: project
project: rag
badge: "笔记"
tags: ["RAG", "Embedding", "FAISS", "向量检索"]
date: "2026-09-20"
pinned: false
draft: false
---

> 整理检索增强生成（RAG）的完整链路，以及在实际问答机器人项目里遇到的问题。

> 代码仓库：[github.com/Fuhai-Liang/Project](https://github.com/Fuhai-Liang/Project) 的 `rag学习/` 目录。

## 什么是 RAG

RAG（Retrieval-Augmented Generation）在生成之前先做检索，把外部知识库中和问题最相关的内容作为上下文喂给 LLM，从而缓解幻觉、让回答有据可依。

## 一条完整的 RAG 链路

```text
文档导入 → 解析/OCR → 分块 Chunk → Embedding 向量化 → 向量库索引
                                                          ↓
用户问题 → Query 向量化 → 相似度检索 Top-K → 拼接上下文 → LLM 生成 → 引用来源
```

## 向量库与 Embedding

- 向量库：**FAISS**（本地高性能检索，适合离线部署）
- Embedding：**bge-small-zh-v1.5**（中文小模型，本地可跑，适合对数据隐私敏感的场景）

## 评估指标

- **Recall@K**：正确答案是否出现在前 K 个召回里
- **MRR**：第一个相关结果排名的倒数均值
- **命中率 / 证据覆盖**：回答是否真正用到了检索到的证据

## 踩坑记录

（待补充：分块大小、重叠、相似度阈值、多文档去重、OCR 噪声等实际问题的处理经验。）

> 这一篇会持续更新，后续把真实项目里的坑逐个补上。
