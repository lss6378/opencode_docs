# Advanced Features

This guide introduces OpenCode's advanced features. It takes approximately **4 minutes**.

## Multi-Session Management

```
/new      # Create new session
/sessions # Switch sessions
```

## Share Conversations

```
/share    # Create share link
/unshare  # Unshare
```

## Model Selection

```
/models   # List and switch models
```

## Custom Configuration

Create `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "theme": "opencode",
  "autoupdate": true
}
```

## Custom Commands

```json
{
  "command": {
    "test": {
      "template": "Run test suite and show coverage",
      "description": "Run tests"
    }
  }
}
```

## Custom Agents

```json
{
  "agent": {
    "reviewer": {
      "prompt": "You are a code review expert",
      "tools": { "write": false, "edit": false }
    }
  }
}
```
