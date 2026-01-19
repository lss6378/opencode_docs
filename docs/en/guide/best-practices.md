# Best Practices

This guide summarizes best practices for using OpenCode. It takes approximately **2 minutes**.

## Git Integration

```bash
# Commit AGENTS.md
git add AGENTS.md
git commit -m "Add OpenCode analysis"

# Use Undo/Redo
/undo    # Undo changes
/redo    # Redo changes
```

## Efficient Workflows

### Feature Development

1. Create branch: `git checkout -b feature/new`
2. Plan in Plan mode: `<TAB>`
3. Execute in Build mode: `<TAB>`
4. Test and commit

### Bug Fixes

1. Describe the problem
2. Let OpenCode analyze and fix
3. Test the fix
4. If not satisfied: `/undo`

## Prompt Tips

### ❌ Bad
```
Optimize this function
```

### ✅ Good
```
Optimize the formatDate function in @src/utils/helper.ts,
consider performance and readability, and add JSDoc comments.
```

## Performance Optimization

### File Watcher Configuration

```json
{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**"]
  }
}
```

### Context Compaction

```json
{
  "compaction": {
    "auto": true,
    "prune": true
  }
}
```

## Core Principles

1. **Always Use Git** - Protect your code
2. **Plan Then Build** - Plan complex tasks first
3. **Provide Context** - Be specific, clear, and provide examples
4. **Leverage Tools** - Commands, shortcuts, configuration
5. **Iterate** - Undo/Redo loop

## Continue Learning

- [OpenCode Official Documentation](https://opencode.ai/docs)
- [GitHub Repository](https://github.com/anomalyco/opencode)
- [Discord Community](https://opencode.ai/discord)

**Start using OpenCode to boost your development efficiency!** 🚀
