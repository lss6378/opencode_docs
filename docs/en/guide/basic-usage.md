# Basic Usage

This guide introduces OpenCode's core functionality and workflow. It takes approximately **3 minutes**.

## File Reference

Use `@` symbol to reference files:

```
How is the click event handled in @src/components/Button.tsx?
```

## Run Bash Commands

Use `!` to run commands:

```bash
!npm test
!git log --oneline -5
```

## Plan vs Build Mode

- **Plan Mode**: Plan only, don't execute (press Tab to switch)
- **Build Mode**: Execute changes directly

## Common Commands

| Command | Function | Shortcut |
|---------|----------|----------|
| `/help` | Help | Ctrl+x h |
| `/init` | Initialize | Ctrl+x i |
| `/undo` | Undo | Ctrl+x u |
| `/redo` | Redo | Ctrl+x r |
| `/new` | New | Ctrl+x n |
| `/sessions` | Switch session | Ctrl+x l |
| `/share` | Share | Ctrl+x s |
