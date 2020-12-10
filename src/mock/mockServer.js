import Mock from "mockjs";

// import banners from "./banners.json";
import banners1 from "./banners.js";
// import banners from "./rbanners.json";

import floors from "./floors.json";

Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|1": [banners1],
});

/* Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|1": [banners],
}); */

/* Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
}); */

Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2-4": floors,
});
