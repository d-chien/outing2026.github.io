/**
 * Firebase 專案設定
 *
 * 取得方式：
 *   Firebase Console → 選擇您的專案 → 專案設定（齒輪圖示）
 *   → 一般 → 您的應用程式 → SDK 設定和設定 → 設定物件
 *
 * 此檔案的 API Key 可安全地放入公開 repo，
 * 資料的存取權限由 Firestore 安全性規則控制，而非 API Key。
 */
const FIREBASE_CONFIG = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId:             "YOUR_APP_ID"
};
