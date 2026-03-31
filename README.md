# InnoSoc AI Studio

AI 工作室统一工作流前端界面 - 覆盖 AI 生图、图片编辑、图像生成、数字人视频生成与本地翻译能力。

## 项目简介

InnoSoc AI Studio 是一款 AI 客户端应用和智能助手，支持众多先进的 AI 模型和 API，可在 Windows、MacOS、Android、iOS、Linux 和网页版上使用。连接物理世界与 AI 工作台能力。

## 核心功能

### 四大核心工具

| 工具名称 | 参数 | 功能描述 |
|---------|------|---------|
| 智能视频生成器 | `tool=1` | 从提示词或素材出发，快速生成可用于演示与传播的短视频内容 |
| 多模式图像编辑器 | `tool=2` | 支持单图、双图、多图编辑，按自然语言完成替换、融合与精修 |
| 概念图生成器 | `tool=3` | 通过草图、参考图和提示词组合，快速输出可用于提案的概念视觉图 |
| 数字人视频生成器 | `tool=4` | 上传角色图像与音频即可生成口型驱动视频，适合讲解、客服与培训场景 |

### 其他工具

- **本地大语言模型翻译工具** (Local Translate) - 接入 LM Studio 的本地翻译工具，访问地址：https://fy.innosoc.com/

## 快速开始

### 访问工作台

所有工具模块通过统一入口访问：

```
http://localhost:8502
```

### 通过 URL 参数直达工具

```
http://localhost:8502?tool=1  # 智能视频生成器
http://localhost:8502?tool=2  # 多模式图像编辑器
http://localhost:8502?tool=3  # 概念图生成器
http://localhost:8502?tool=4  # 数字人视频生成器
```

## 项目结构

```
innosoc-ai-studio/
├── 首页.html              # 主页，展示四大核心工具
├── 下载.html              # 下载中心页面
├── 工具介绍.html          # 工具详细介绍页面
├── 定价.html              # 定价方案页面
├── 帮助.html              # 帮助中心页面
├── styles.css             # 全局样式
├── site.js                # 交互逻辑
├── README.md              # 项目说明文档
├── assets/                # 图片资源目录
│   ├── logo-innosoc.svg
│   ├── hero-studio.svg
│   ├── download-studio.svg
│   ├── help-center.svg
│   ├── tools-overview.svg
│   ├── module-ai-image.svg
│   ├── module-image-edit.svg
│   ├── module-image-generate.svg
│   ├── module-digital-human.svg
│   └── fy-logo.svg
└── PRDs/                  # 产品需求文档
```

## 页面说明

| 页面 | 文件 | 描述 |
|-----|------|------|
| 首页 | `首页.html` | 展示核心工具卡片，提供快速入口 |
| 下载 | `下载.html` | 多平台下载中心（Windows/macOS/Web/企业部署） |
| 工具介绍 | `工具介绍.html` | 各工具模块的详细说明 |
| 定价 | `定价.html` | 个人版/团队版/企业版定价方案 |
| 帮助 | `帮助.html` | 常见问题和技术支持 |

## 定价方案

| 版本 | 价格 | 适用场景 |
|-----|------|---------|
| 个人版 | ¥99/月 | 个人创作者和小型项目试用 |
| 团队版 | ¥699/月 | 营销、品牌和内容团队协作生产 |
| 企业版 | 定制/年付 | 对安全、审计和系统集成有要求的组织 |

## 技术栈

- **前端框架**: 纯 HTML5 + CSS3 + Vanilla JavaScript
- **响应式设计**: 支持移动端和桌面端
- **CSS 特性**: CSS 变量、Grid 布局、Flexbox
- **部署方式**: 静态文件托管，无需构建

## 本地开发

直接打开 `首页.html` 文件即可在浏览器中预览：

```bash
# 或使用 Python 启动简单 HTTP 服务器
python -m http.server 8080
```

然后访问 `http://localhost:8080/首页.html`

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 其他现代浏览器

## 相关链接

- [工作台入口](http://localhost:8502)
- [本地翻译工具](https://fy.innosoc.com/)
- [GitHub 仓库](https://github.com/ZengWenJian123/innosoc-ai-studio)

## 联系方式

- 技术支持邮箱：support@innosoc.ai
- 工作时间：工作日 9:30-18:30

## 许可证

© 2026 InnoSoc AI Studio. All rights reserved.