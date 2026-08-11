export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 等级为 2，不满足规则就会报错
      'always', // 始终开启校验
      // 只允许使用以下这些 type
      [
        'feat', // 新功能、新页面
        'fix', // 修复 bug
        'docs', // 只修改文档、注释
        'style', // 代码格式（空格、分号、换行，不影响逻辑）
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 添加或修改测试用例
        'build', // 构建脚本、vite 配置
        'ci', // CI/CD 配置
        'chore', // 初始化、依赖更新、构建工具、杂项修改
        'revert', // 回滚某次提交
        'wip', // 开发中（未完成、临时提交）
        'release' // 版本发布
      ]
    ],
    // 文本最大长度为 100
    'header-max-length': [2, 'always', 100]
  }
}
