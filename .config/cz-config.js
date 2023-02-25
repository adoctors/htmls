/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Description: git commit -m
 */

module.exports = {
  types: [
    { value: "✨feat", name: "feat:        ✨增加新功能" },
    { value: "🐛fix", name: "fix:         🐛修复bug" },
    { value: "📝docs", name: "docs:        📝修改文档" },
    { value: "⚡️perf", name: "perf:        ⚡️性能优化" },
    { value: "🎉init", name: "init:        🎉初始提交" },
    { value: "📦️package", name: "package:     📦️添加或修改依赖" },
    { value: "🔨build", name: "build:       🔨打包" },
    { value: "🔧chore", name: "chore:       🔧更改配置文件" },
    { value: "👷ci", name: "ci:          👷CI部署" },
    { value: "🔥del", name: "del:         🔥删除代码/文件" },
    { value: "♻️refactor", name: "refactor:    ♻️代码重构" },
    { value: "⏪revert", name: "revert:      ⏪版本回退" },
    { value: "💄style", name: "style:       💄样式修改不影响逻辑" },
    { value: "✅test", name: "test:        ✅增删测试" },
    { value: "🔀merge", name: "merge:       🔀分支合并" },
    { value: "🚧wip", name: "wip:         🚧开发中" },
    { value: "🔖mark", name: "mark:        🔖Release / Version tags" },
    { value: "🍱asset", name: "asset:       🍱添加或更新资源" },
  ],
  scopes: [],
  messages: {
    type: "选择更改类型:\n",
    scope: "更改的范围:\n",
    subject: "简短描述:\n",
    body: '详细描述. 使用"|"换行:\n',
    breaking: "Breaking Changes列表:\n",
    footer: "关闭的issues列表. E.g.: #31, #34:\n",
    confirmCommit: "确认提交?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
