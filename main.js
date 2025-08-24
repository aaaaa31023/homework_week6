// 動畫部分
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700, // 動畫時間
  once: false, // 設成 false，每次進入 viewport 都會重新觸發
});
// 動畫部分

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");
