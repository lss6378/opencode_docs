# 高级功能

本指南介绍 OpenCode 的进阶功能，大约需要 **4 分钟**。

## 多会话管理

```
/new      # 创建新会话
/sessions # 切换会话
```

## 分享对话

```
/share    # 创建分享链接
/unshare  # 取消分享
```

## 模型选择

```
/models   # 列出和切换模型
```

## 自定义配置

创建 `opencode.json`：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "theme": "opencode",
  "autoupdate": true
}
```

## 自定义命令

```json
{
  "command": {
    "test": {
      "template": "运行测试套件并显示覆盖率",
      "description": "运行测试"
    }
  }
}
```

## 自定义代理

```json
{
  "agent": {
    "reviewer": {
      "prompt": "你是代码审查专家",
      "tools": { "write": false, "edit": false }
    }
  }
}
```
