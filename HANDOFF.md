# 技術與設計交接

## 目前狀態

- 原站：https://discord-bot-lore.xoozoeoox.chatgpt.site
- 最後完成：所有 31 隻怪物可點圖開啟同頁原圖浮窗，支援原始尺寸 100% 切換。
- 交接前原站只允許擁有者查看，尚未公開；未建立使用者 GitHub 儲存庫、未設定 GitHub Pages，使用者沒有自訂網域。
- 本 ZIP 是原提交的檔案快照，不含 .git 與歷史。先 `git init` 並建立備份提交再遷移。
- 本網站是遊戲說明／圖鑑網站，不是 Discord Bot 的運行程式，也沒有玩家資料庫。不要把說明文字誤當已實作遊戲後端。

## 技術架構與本機注意

- React 19.2.6、Next 16.2.6 API 相容程式碼、Vinext 0.0.50、Vite 8.0.13、TypeScript 5.9.3。
- Node 要求：package.json engines `>=22.13.0`；套件管理器 npm，保留 package-lock.json。
- 現有建置為 Cloudflare Worker：`worker/index.ts`，`vite.config.ts` 的 cloudflare + vinext + sites 外掛，`build/sites-vite-plugin.ts`。
- `.openai/hosting.json` 的 d1/r2 皆 null，沒有啟用資料庫或物件儲存。
- `app/chatgpt-auth.ts`、`db/`、`examples/d1/` 有原始模板輔助程式；遷移前查明實際引用，不要把範例當正式功能。
- 原 `npm run install:ci` 需要 Linux flock、GNU timeout、curl、sha256sum、Bash；`npm run build` 也走 Bash，dev/start scripts 含 POSIX 環境變數語法。
- Windows 接手先選擇相容本機腳本或使用者同意的 WSL；不要默默假設 PowerShell 能執行 Bash。不要沿用原環境的代理、檔案絕對路徑、token 或快取。
- 網站程式碼不依賴本次聊天才能運作；套件仍須在新電腦重新安裝。

## 路由與檔案

| 路由 | 用途 |
| --- | --- |
| / | 修羅國系統總覽 |
| /basic | 基礎系統 |
| /gacha | 抽卡 |
| /work | 城內工作 |
| /adventure | 外出探險 |
| /tavern | 小灼酒館 |
| /market | 中央市集 |
| /bestiary | 獨立城外怪物圖鑑 |

- `app/globals.css`：共用視覺樣式，請勿以遷移為由重設字級。
- `app/tavern/TavernExperience.tsx`：人物與介紹浮窗、希爾妲解鎖流程。
- `app/bestiary/monsters.ts`：全部 31 隻怪物資料。
- `app/bestiary/InteractiveAtlas.tsx`：地圖標籤與資料展開時序、地圖左右平移。
- `app/bestiary/MonsterImageDialog.tsx`：原生 dialog 原圖浮窗；showModal 提供模態鍵盤行為。
- `app/bestiary/atlas.css`：圖鑑樣式、原圖浮窗、無名古廟 Lv.11 紅字。
- `app/adventure/items.ts`：山賊宏翰的睡衣效果共用文字。
- `public/`：全部正式站點素材；舊版本图片亦保留，使用哪張以程式碼引用為準。

## 使用者已確認的重點

- 奇幻王國 16-bit 圖像；深藍／金框、既有背景延續各頁，不擅自新增不一致裝飾。
- 原有字級不要縮小。人物圖比例與位置已經多次調整並確認，維持現況。
- 酒館角色：米露、莉莉安、諾雅、艾琳、希爾妲。希爾妲有黑色遮罩與解鎖動畫，然後人物／文字／好感度事件依序顯示。
- 地圖置中初始無怪物展開；標籤隨捲動揭露；hover 顯示地區介紹、手指游標可點擊。
- 左側標籤展開時地圖向右，右側標籤展開時地圖向左。切換地區依序收起→平移→新資料由下往上出現。關閉回中心。
- 保留禁止右鍵與拖曳圖片；此功能不是防下載安全機制。
- 放大圖使用完整原 PNG，不使用縮圖的裁切框。小石像鬼縮圖較小，但原圖浮窗不繼承縮小 transform。
- 怪物共 6 區：north 5、forest 7、mine 5、valley 6、quartz 7、temple 1。精確數值以 monsters.ts 和資料測試為準。
- 路標與元素靈使用 `*-eyeless.png`，不要換回有眼版本。
- 石像鬼五張同種族且沒有臉，以姿勢／花束／大小區別。
- 綠髮魔族使用已完成的綠髮角色設計；哥布林王與貧窮哥布林同種族。
- 山賊宏翰的睡衣有 tooltip；其它新掉落物未提供效果，僅顯示名稱；無掉落不顯示空列。

## 下一步：GitHub Pages 遷移（尚未完成）

1. 先建立 Git 備份、安裝依賴並確認本機可運作。遷移只修改此份匯出專案，不操作原站。
2. GitHub Pages 不執行此 Worker。評估保留 React/App Router 的 Next 靜態匯出路徑，或可驗證的等效靜態建置；不要直接把 Worker dist 上傳宣稱完成。
3. 若切換 build pipeline，仔細調整 Vite／Cloudflare 專用設定、套件腳本與必要 image 設定，不要刪除 UI 或互動。
4. 確認選用 `帳號.github.io` 根站或 `帳號.github.io/專案名/`。目前很多 href/src 以 `/` 起頭；專案子路徑必須全面處理圖片、CSS url、導航、動態圖片來源以及 SVG image href，避免首頁正常但內頁缺圖。
5. 查核字型外部依賴、任何動態伺服器 API，調整到靜態環境。不要加入不必要登入。
6. 為 GitHub Pages 加上適合的 GitHub Actions 或靜態發布文件；依目前官方規範設定。在使用者提供帳號／儲存庫並確認公開前，不要外部推送或發布。
7. 驗證所有 8 個路由直接開啟／重整、圖片載入、角色浮窗、31 張怪物點圖、100%／fit、Esc／背景關閉、焦點返回、捲動鎖定、地圖切換與手機排版。

## 已有驗證與已知限制

- 原始提交已通過 `npm run build`、`node --test tests/bestiary-data.test.mjs`。
- 圖鑑兩個互動元件已通過針對性 TypeScript 檢查。
- 未做本機瀏覽器端到端測試；不能將上述編譯／資料測試稱為已測完所有點擊互動。
- `tests/rendered-html.test.mjs` 是原模板的 development preview metadata 斷言，不是完整產品測試；遷移時要審視更新，不能因它過時就破壞現有 UI。
- Cloudflare 型別在全專案 tsc 中曾有模板缺漏；按實際遷移架構處理，不要臆造遊戲功能。
- 本包不含私人憑證／.env／聊天紀錄；完整素材隨專案提供。公開 GitHub 會使其中素材可被讀取，先取得使用者確認。
