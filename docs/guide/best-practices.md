# 最佳实践

本指南总结使用 OpenCode 的最佳实践，大约需要 **2 分钟**。

## Git 集成

```bash
# 提交 AGENTS.md
git add AGENTS.md
git commit -m "Add OpenCode analysis"

# 利用 Undo/Redo
/undo    # 撤销更改
/redo    # 重做更改
```

## 高效工作流

### 功能开发

1. 创建分支：`git checkout -b feature/new`
2. Plan 模式规划：`<TAB>`
3. Build 模式执行：`<TAB>`
4. 测试并提交

### Bug 修复

1. 描述问题
2. 让 OpenCode 分析并修复
3. 测试修复
4. 如果不满意：`/undo`

## 提示词技巧

### ❌ 不好
```
优化这个函数
```

### ✅ 好
```
优化 @src/utils/helper.ts 中的 formatDate 函数，
考虑性能和可读性，并添加 JSDoc 注释。
```

## 性能优化

### 配置文件观察

```json
{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**"]
  }
}
```

### 上下文压缩

```json
{
  "compaction": {
    "auto": true,
    "prune": true
  }
}
```

## 核心原则

1. **始终使用 Git** - 保护您的代码
2. **Plan 然后 Build** - 复杂任务先规划
3. **提供上下文** - 具体、明确、有示例
4. **善用工具** - 命令、快捷键、配置
5. **迭代改进** - Undo/Redo 循环

## 继续学习

- [OpenCode 官方文档](https://opencode.ai/docs)
- [GitHub 仓库](https://github.com/anomalyco/opencode)
- [Discord 社区](https://opencode.ai/discord)

**开始使用 OpenCode，提升您的开发效率吧！** 🚀
