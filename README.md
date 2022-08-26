### 專案簡介
「短網址產生器」是我在 AlphaCamp 全端課程中學期 2-3 的技術驗收作業，透過這個專案，證明自己能初步開發包含 CRUD 功能的簡單前後端產品。

### 產品功能
1. 使用者可以輸入想要縮短的網址，並且得到「縮短過後的網址」
2. 點擊「複製」鍵可快速把「短網址」複製到自己的剪貼簿中
3. 針對 Desktop 與 Mobile 使用者設計 RWD，可以放心在不同尺寸裝置上使用
4. 資料庫記錄使用者曾經輸入的原始網址，再次貼上相同網址時，可得到「與過去相同的短網址」

### 如何使用
Method 1: 此專案已上傳至遠端 Heroku，在 Server 開啟期間，可直接前往「https://youhua-reurl.herokuapp.com/」使用產品
Method 2: 從 Github 中下載到本地端進行使用，並且在 Terminal 中下指令「npm run dev」即可使用
  - `npm run dev` 可直接在本地端開啟產品使用，並且即時在程式碼中更改，也能收到回饋
  - `npm run start` 也可直接在本地端開啟產品使用，但在程式碼中的即時更改不會影響到網頁
  - `heroku open` 可開啟遠端的 Heroku Server，並且可以提供 Method1 中的網址直接供他人使用


### 專案規格
- express: "^4.18.1",
- express-handlebars: "^6.0.6",
- mongoose: "^6.5.2"
- database: mongoDB
- cloud server: heroku

### 備註（學習能力驗收）
- 使用 Git 管理程式碼
- 安裝 Node.js 執行環境，並啟動 Express 伺服器
- 在 Express 框架中，運用樣板引擎來打造具有動態資料的前端頁面
- 啟動 MongoDB 資料庫伺服器，並與 Express 專案對接，順利打造出具有 CRUD 功能的網站
- 將專案發佈至 Heroku 並連接 MongoDB 雲端服務
- 親手打造一個兼具前端體驗與後端資料庫的網路應用程式
