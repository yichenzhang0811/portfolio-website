# 部署说明

## 🚀 快速部署到 Vercel

### 前提条件
- 一个 GitHub 账号
- 本地安装了 Git

### 部署步骤

#### 1️⃣ 推送代码到 GitHub

```bash
# 进入项目目录
cd /Users/jessicaz/Desktop/portfolio-website

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - Portfolio website"

# 在 GitHub 创建新仓库（去 https://github.com/new）
# 仓库名：portfolio-website

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 推送代码
git branch -M main
git push -u origin main
```

#### 2️⃣ 在 Vercel 部署

1. 访问 https://vercel.com
2. 用 GitHub 登录
3. 点击 "Add New Project"
4. 选择你的 `portfolio-website` 仓库
5. 点击 "Import"

#### 3️⃣ 配置项目（Vercel 会自动检测 Next.js）

设置：
- **Framework Preset**: Next.js ✅ (自动检测)
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

点击 **"Deploy"**

#### 4️⃣ 等待部署完成

- ⏱️ 通常需要 1-3 分钟
- 📊 会显示构建日志
- ✨ 完成后会给你一个 URL

#### 5️⃣ 自定义域名（可选）

部署完成后：
1. 在项目设置中
2. 点击 "Domains"
3. 添加你自己的域名

---

## 🔄 后续更新

每次更新代码后：

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel 会自动重新部署！🚀

---

## 📝 注意事项

1. **确保 `.gitignore` 正确** - 不会上传 node_modules 等文件
2. **环境变量** - 如果有需要，在 Vercel 项目设置中添加
3. **构建优化** - Vercel 会自动优化 Next.js 项目

---

## 🎉 部署后

你的网站会在类似这样的 URL 上：
- `https://your-portfolio-name.vercel.app`
- 或者你的自定义域名

访问网站，检查一切是否正常工作！

