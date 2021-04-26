import initServices from "./loaders/init-services";

initServices().then(() => {
  require("./server");
});
