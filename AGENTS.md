# AGENTS.md

This file contains guidelines for agentic coding agents working on this repository.

## Project Overview

This is a VitePress documentation site for OpenCode tutorials. The site provides a 15-minute quick-start guide for the OpenCode AI coding assistant. All content is written in Chinese.

## Build Commands

```bash
# Start development server (http://localhost:5173)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Testing & Linting

This project has no tests or linting configured. When making changes:
- Verify the dev server runs without errors
- Build the production version to check for issues
- Test the built site locally with `npm run docs:preview`

## Code Style Guidelines

### Markdown Formatting

- Use Chinese for all user-facing content
- Include estimated reading time in each guide: `大约需要 **X 分钟**`
- Use standard H1 (`#`) for page titles
- Use H2 (`##`) for major sections, H3 (`###`) for subsections
- Add line breaks after headings

### VitePress-Specific Syntax

#### Frontmatter
```yaml
---
layout: home

hero:
  name: Name
  text: Text
  tagline: Tagline
  actions:
    - theme: brand
      text: Button Text
      link: /path

features:
  - title: Title
    details: Description
---
```

#### Callout Blocks
```markdown
::: tip
Tip content
:::

::: info
Information content
:::
```

#### Code Groups
```markdown
::: code-group

```bash [Label]
code here
```

```bash [Label 2]
code here
```

:::
```

### Code Examples

- Use language tags: ```bash, ```typescript, ```json, ```markdown
- For shell commands, use bash highlighting
- Include clear, descriptive comments when showing examples
- Use table format for command references:

```markdown
| 命令 | 功能 |
|------|------|
| `/help` | 显示帮助 |
```

### Links

- Use relative links for internal content: `/guide/getting-started`
- Use absolute URLs for external resources: https://opencode.ai/docs
- Link text should be descriptive in Chinese

### Content Guidelines

- Keep guides concise with specific time estimates
- Use bullet points for lists
- Number ordered lists when sequence matters (e.g., steps)
- Include "Next steps" section at end of guides with links
- Use emojis sparingly for emphasis (check existing usage first)
- Include "继续学习" (Continue learning) section with external links at guide end

### File Structure

```
docs/
├── .vitepress/          # VitePress cache and build outputs (auto-generated)
├── guide/              # Tutorial pages
│   ├── installation.md
│   ├── getting-started.md
│   ├── basic-usage.md
│   ├── advanced-features.md
│   ├── integration.md
│   └── best-practices.md
├── public/             # Static assets
└── index.md           # Homepage
```

## No Configuration Files

This project uses VitePress default configuration. There is no custom config.ts in `.vitepress/`. The site uses VitePress's default theme and navigation.

## Git Workflow

- Commit messages should be concise and descriptive
- No pre-commit hooks configured
- Always test build before committing major changes

## Common Tasks

### Adding a new guide page:
1. Create `.md` file in `docs/guide/`
2. Add estimated time: `大约需要 **X 分钟**`
3. Add to navigation in relevant pages
4. Test in dev server

### Updating existing content:
1. Maintain existing style and structure
2. Keep Chinese language consistent
3. Verify links are correct
4. Check for VitePress syntax errors

## Important Notes

- This repository is documentation-only, no application code
- All content is educational/tutorial material
- Build outputs in `docs/.vitepress/dist/` should not be edited manually
- Cache in `docs/.vitepress/cache/` is auto-generated
