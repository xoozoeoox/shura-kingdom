# 修羅國網站：電腦版 Codex 交接

## 先做這件事

解壓整個 ZIP，以電腦上的 Codex 開啟這個 `shura-kingdom` 資料夾。
先請它閱讀 `AGENTS.md` 和 `HANDOFF.md`。不要只上傳單一 HTML 或圖片，也不要只提供網站網址。

可直接貼給 Codex：

> 請先閱讀 AGENTS.md 和 HANDOFF.md，接手修羅國網站。這是現有完整專案，不要重建或重新設計。請先確認我電腦的 Node.js、npm 與作業系統，建立本機 Git 備份，讓網站能在本機預覽，再將它轉成 GitHub Pages 可部署的靜態版本。保留所有圖片、文字大小、分頁、動畫、角色浮窗和怪物原圖浮窗。轉換後先在本機驗證，不要擅自建立公開 GitHub 儲存庫或公開任何內容；等我提供 GitHub 帳號／儲存庫並確認後再上傳發布。原本的 Sites 網站保持不變。

## 這個包是什麼

- 2026-09-02 已部署版本 59 的原始程式碼與所有 `public/` 素材。
- 原始提交：`fab9f7cf931fec244a6797d14c279c4f9e0695af`。
- 新增的三份交接文件：START-HERE.md、HANDOFF.md、AGENTS.md。
- 沒有包含 node_modules、建置產物、Git 歷史、聊天紀錄、帳戶憑證或私密環境變數。
- 尚未轉成 GitHub Pages 版本；不是上傳就能直接開站的純 HTML 成品。

## 注意

現有執行腳本偏向 Linux。Windows PowerShell 不能直接照搬所有 npm scripts；請讓 Codex 先處理相容性，或在你同意後使用 WSL。不要讓它因為原指令不能跑，就把已完成的網站整個換掉。

GitHub 公開儲存庫會公開其中的程式碼和素材。禁止右鍵只是介面限制，並不能保證圖片不被下載。
