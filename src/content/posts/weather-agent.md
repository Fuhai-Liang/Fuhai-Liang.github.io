---
title: "城市天气 Agent：4 个 Agent + RAG 的城市环境智能分析"
description: "从数据获取、变化检测、网页检索到 RAG 报告生成，拆解一个四 Agent 协作的城市环境智能 Agent。"
category: project
project: weather-agent
badge: "项目"
tags: ["Agent", "RAG", "FAISS", "Streamlit", "Open-Meteo"]
date: "2026-09-22"
pinned: false
draft: false
---

> 这是一个刻意压缩成 **4 个 Agent + 1 个 Streamlit 文件** 的城市环境智能分析项目。

> 代码仓库：[github.com/Fuhai-Liang/Project](https://github.com/Fuhai-Liang/Project) 的 `城市天气Agent/` 目录。

## 项目结构

```text
agent1_data.py     数据获取与年度整理
agent2_change.py   重点变化检测
agent3_search.py   网页政策/报告检索
agent4_rag.py      RAG + 最终报告
app.py             Streamlit 动态界面
```

## 数据流程

```text
Streamlit 选择城市和时间
        ↓
Agent 1：Open-Meteo Geocoding + Historical Weather + Air Quality / 用户 AQI CSV
        ↓
年度 CSV
        ↓
Agent 2：识别 AQI / PM2.5 重点变化年份
        ↓
Agent 3：搜索同期政府政策、环境公报和报告
        ↓
Agent 4：网页正文 → Chunk → Embedding → FAISS → RAG → 报告
```

## 为什么要用 Open-Meteo

Open-Meteo 提供标准 API，不需要维护城市代码，也不需要应对 2345 的 403 反爬。历史天气 API 可用于很长时间范围；对于跨几十年的比较，项目固定使用 ERA5-Land 以保持模型来源尽量一致。

## 空气质量的重要限制

Open-Meteo 的全球空气质量数据主要来自 CAMS Global，全球历史覆盖远短于 Historical Weather。因此对于中国城市：

- **历史天气**：可直接通过 Open-Meteo 自动获取多年数据
- **长期 AQI**：建议上传以前爬取的历史 AQI CSV
- **2022-08 之后**：项目会尝试直接使用 Open-Meteo Air Quality

## Agent 3：Selenium + 百度

新版 Agent 3 使用真实 Chrome 浏览器访问百度：从 Agent 2 的研究主题出发，走「百度搜索 → 进入结果页 → 正文文本 + HTML + 截图」的流程，结果存入 `search_sources/<run_id>/`。如出现百度验证码，程序会停止并提示人工处理，不做验证码绕过。

## RAG 数据库怎么看

每次 Agent 4 都会生成：

```text
rag_db/<run_id>/
├── sources.jsonl        # 最适合人工查看，每行一篇参考资料（S001、标题、URL、截图路径）
├── chunks.jsonl         # RAG 实际切成的文本块
├── final_evidence.json  # 本次回答真正召回的证据
└── faiss_index/         # 向量索引本体
```

最终 LLM 报告引用 `[S001]`、`[S002]`，可以直接和 Streamlit 底部的「参考文献 / 网页来源」对应。

## 运行

```bash
conda activate env_langchain
pip install -r requirements.txt
cp .env.example .env   # 填写 OPENAI_API_KEY
streamlit run app.py
```
