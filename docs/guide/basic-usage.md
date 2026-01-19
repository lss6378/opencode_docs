# 基本使用

本指南介绍 OpenCode 的核心功能和工作流程，大约需要 **3 分钟**。

## 文件引用

使用 `@` 符号引用文件：

```
@src/components/Button.tsx 中是如何处理点击事件的？
```

## 运行 Bash 命令

使用 `!` 运行命令：

```bash
!npm test
!git log --oneline -5
```

## Plan vs Build 模式

- **Plan 模式**：只规划，不执行（按 Tab 切换）
- **Build 模式**：直接执行更改

## 常用命令

| 命令 | 功能 | 快捷键 |
|------|------|--------|
| `/help` | 帮助 | Ctrl+x h |
| `/init` | 初始化 | Ctrl+x i |
| `/undo` | 撤销 | Ctrl+x u |
| `/redo` | 重做 | Ctrl+x r |
| `/new` | 新建 | Ctrl+x n |
| `/sessions` | 切换会话 | Ctrl+x l |
| `/share` | 分享 | Ctrl+x s |
