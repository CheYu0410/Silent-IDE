# Silent IDE - Official Website

> The ultimate coding experience with zero distractions

一個使用 Next.js 打造的現代化、專業級 IDE 產品展示網站，採用黑色極簡風格設計。

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ 特色功能

- 🎨 **現代化設計** - 黑色極簡風格，專業且優雅
- 🚀 **高性能** - 基於 Next.js 14 構建，快速響應
- 📱 **完全響應式** - 完美適配桌面、平板和手機
- 🎭 **流暢動畫** - 精心設計的懸停和過渡效果
- 💎 **漸層特效** - 現代化的視覺設計語言
- ⚡ **SEO 優化** - 完整的 meta 標籤和語義化 HTML

## 📦 網站區塊

### 1. Hero Section (首頁區塊)
- 大標題與副標題
- 雙按鈕 CTA（下載 + 了解更多）
- 淡入上移動畫效果

### 2. Features Section (功能展示)
- 4 個核心功能卡片
- 懸停時上浮與縮放效果
- 頂部進度條動畫

### 3. Screenshot Section (介面展示)
- 3D 透視效果的螢幕展示
- 懸停時的旋轉動畫
- 模擬 IDE 介面的暗色背景

### 4. Stats Section (統計數據)
- 4 個關鍵數據指標
- 漸層文字效果
- 互動式懸停動畫

### 5. Testimonials Section (用戶評價)
- 3 個真實開發者評價
- 大型引號設計
- 作者資訊展示

### 6. Pricing Section (價格方案)
- 3 種定價方案（Free / Pro / Enterprise）
- 推薦方案特別標注
- 完整功能列表

### 7. CTA Section (行動呼籲)
- 吸引人的標題與描述
- 雙按鈕設計強化轉換

### 8. Footer (頁尾)
- 4 欄式布局
- 完整的導航連結
- 社交媒體連結區域

## 🛠️ 技術棧

- **框架**: Next.js 14.0.0
- **UI 庫**: React 18.2.0
- **樣式**: CSS Modules
- **字體**: System Fonts (SF Pro, Segoe UI, Roboto)
- **開發工具**: ESLint

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 生產構建

```bash
npm run build
npm start
```

### 代碼檢查

```bash
npm run lint
```

## 📁 專案結構

```
silent-ide-website/
├── pages/
│   └── index.js          # 首頁組件
├── styles/
│   ├── globals.css       # 全域樣式
│   └── Home.module.css   # 首頁模組化樣式
├── public/               # 靜態資源
├── package.json          # 專案配置
└── README.md            # 專案說明
```

## 🎨 設計理念

### 配色方案
- **主色調**: 黑色到深灰漸層 (#0a0a0a → #2a2a2a)
- **強調色**: 純白色與灰色漸層
- **透明度**: 使用 rgba 實現層次感
- **發光效果**: box-shadow 營造現代感

### 動畫效果
- **淡入上移**: fadeInUp (1s)
- **滑入**: slideIn (0.8s)
- **懸停上浮**: translateY + scale
- **3D 旋轉**: rotateY + rotateX

### 響應式斷點
- **手機**: 480px 以下
- **平板**: 768px 以下
- **桌面**: 768px 以上

## 📊 性能優化

- ✅ CSS Modules 避免樣式衝突
- ✅ 圖片懶加載
- ✅ 最小化重繪與重排
- ✅ 使用 transform 而非 position 進行動畫
- ✅ 合理使用 will-change

## 🌐 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 📝 待辦事項

- [ ] 添加實際的 IDE 截圖
- [ ] 整合真實的下載連結
- [ ] 添加 favicon 和 OG 圖片
- [ ] 實作表單提交功能
- [ ] 添加多語言支援
- [ ] 整合分析工具 (Google Analytics)
- [ ] 添加部落格頁面
- [ ] 實作搜尋功能

## 🤝 貢獻指南

歡迎提交 Issue 或 Pull Request！

1. Fork 本專案
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 👥 作者

**BAILU AI Team**

## 🙏 致謝

- Next.js 團隊提供優秀的框架
- React 社群的支持
- 所有貢獻者的努力

---

⭐ 如果這個專案對你有幫助，請給它一顆星星！

**專案連結**: [https://github.com/yourusername/silent-ide-website](https://github.com/yourusername/silent-ide-website)
