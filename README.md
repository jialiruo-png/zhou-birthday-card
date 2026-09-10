# 周洁红教授六十岁纪念相册

手机端互动纪念相册，包含开场贺卡、三章照片、文字祝福、师生故事、祝福视频与筹备组名单。

## 本地预览

解压后直接打开 `index.html` 即可浏览。由于浏览器对本地视频加载有限制，完整测试建议使用静态服务器：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 部署到 GitHub Pages

推荐仓库名：`zhou-birthday-card`。

1. 在 GitHub 新建 **Public** 仓库，不要初始化 README、`.gitignore` 或 License。
2. 解压本压缩包，在解压后的项目目录中执行：

```bash
git init
git add .
git commit -m "发布周老师纪念相册"
git branch -M main
git remote add origin https://github.com/jialiruo-png/zhou-birthday-card.git
git push -u origin main
```

3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. Branch 选择 `main`，目录选择 `/ (root)`，点击 **Save**。
6. 等待约 1–5 分钟，访问：

`https://jialiruo-png.github.io/zhou-birthday-card/`

## 注意事项

- 请保持 `index.html`、`style.css`、`script.js` 和 `assets` 的目录层级不变。
- 四段视频均已转为 H.264 + AAC，适合常见手机浏览器播放。
- 如果修改视频或图片，请尽量沿用原文件名；若更换文件名，还需同步修改 `script.js`。
