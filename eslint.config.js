import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import pluginImport from 'eslint-plugin-import'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  // 继承 js 官方推荐规则
  js.configs.recommended,
  // 继承 ts 官方推荐规则
  ...tseslint.configs.recommended,
  // 继承 import 插件推荐规则
  pluginImport.flatConfigs.recommended,
  // 继承 vue 基础规则（flat 格式）
  pluginVue.configs['flat/essential'],

  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      // 声明运行在浏览器环境，实现在使用 window、document 等浏览器内置变量时不报错
      globals: globals.browser,
      // 支持最新 es 语法
      ecmaVersion: 'latest',
      // 使用 es module
      sourceType: 'module'
    },
    rules: {
      // 以下规则全部移至 .prettierrc 文件，通过让 prettier 作为 eslint 规则实现这
      // 些功能，eslint 只做语法检查
      // semi: ['error', 'never'], // 必须加分号，改为 "never" 表示不加分号
      // quotes: ['error', 'single'], // 必须用双引号，改为 "double" 表示双引号
      // indent: ['error', 2], // 2 空格缩进
      // 'arrow-parens': ['error', 'as-needed'], // 允许箭头函数只有一个参数时省略括号
      // 'comma-dangle': ['error', 'never'], // 允许最后一个属性后不加逗号

      // 处理未使用的变量给警告提示，no-unused-vars 和 @typescript-eslint/no-unused-vars
      // 只要开启其中一个就可以，否则会造成重复警告，同时需要把 tsconfig.json 中的
      // noUnusedLocals 和 noUnusedParameters 注释掉或者设置为 false，不然也会
      // 重复警告，因此都不处理的话同一个错会出现三次警告
      'no-unused-vars': ['warn'],
      '@typescript-eslint/no-unused-vars': 'off',

      // ts 通过声明完成的变量还是会被 eslint 的 no-undef 标记为未定义，需要关闭
      'no-undef': 'off',
      // 允许声明为 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许 ts 注释，如 // @ts-ignore
      '@typescript-eslint/ban-ts-comment': 'off',
      // 启用 prettier 作为 eslint 规则，eslint 只做 js 代码检测
      'prettier/prettier': 'error',
      // 排序规则
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // 1.node 内置模块（fs...）
            'external', // 2.第三方包（vue...）
            'internal', // 3.项目内部文件（@/utils...）
            'parent', // 4.父级文件（../xxx）
            'sibling', // 5.同级文件（./xxx）
            'index' // 6.入口文件
          ],
          // 不同分组之间空一行
          'newlines-between': 'always',
          // 按字母顺序排序同时不区分大小写
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            // @/ 开头的路径归为内部模块
            { pattern: '@/**', group: 'internal', position: 'before' }
          ],
          // node 内置模块不被 pathGroups 规则影响，否则内部模块可能会排到 node 内置
          // 模块上面
          pathGroupsExcludedImportTypes: ['builtin']
        }
      ]
    },
    settings: {
      // 解析器配置
      'import/resolver': {
        // 支持 typescript
        typescript: true,
        // 支持 node
        node: true
      }
    },
    // prettier 作为 eslint 规则，格式错误会直接在 ide 里标红
    plugins: { prettier: pluginPrettier }
  },
  {
    files: ['**/*.vue'],
    rules: {
      // 让 template 中的 web component 使用 slot 时不报错
      'vue/no-deprecated-slot-attribute': 'off',
      // 允许组件名不是多单词（如 Home.vue 不会报错，多单词是为了避免和 html 标签冲突）
      'vue/multi-word-component-names': 'off',
      // 处理标签自闭和
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always', // 空元素必须自闭合 <img />
            normal: 'never', // 普通标签禁止自闭合 <div></div>
            component: 'always' // vue 组件必须自闭合 <MyComponent />
          },
          svg: 'always', // svg 所有相关标签都允许自闭合
          math: 'always' // math 所有相关标签都允许自闭合
        }
      ]
    },
    languageOptions: {
      parserOptions: {
        // vue 文件里的 ts 用 ts 解析器
        parser: tseslint.parser
      }
    }
  }
])
