# MonoPro

## pnpm-workspace 搭建的多项目仓库

```docs
涉及到的技术包含：React、VUe3、
Svelte、Solid、Next.js、Nuxt.js、
Remix、Vite、Qiankun、Typescript
```

### 启动项目

```shell
使用concurrently作为启动器
```

### git commit 提交规范

- commit 关键词

  - "feat", // 新功能 feature
  - "fix", // 修复 bug
  - "docs", // 文档注释
  - "style", // 代码格式
  - "refactor", // 重构
  - "perf", // 性能优化
  - "test", // 增加测试
  - "chore", // 构建过程或辅助工具的变动
  - "revert", // 回退
  - "build", // 打包

- 例子
  ```shell
    git add .
    git commit -m "feat: 新增了xxx功能" |
    git commit -m "fix: 修复了xxxbug" |
    git commit -m "chore: 增加了xxxpipeline，改善了xxx流程" |
    git commit -m "build: 打包"
  ```
