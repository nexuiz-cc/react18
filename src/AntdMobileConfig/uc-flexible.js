(function (doc, win) {
  var docEl = doc.documentElement,
    w = 750, //标准
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      //控制基础字号
      var clientWidth = docEl.clientWidth; //取到宽度
      if (!clientWidth) return;

      // 设定最大支持范围， 淘宝的lib-flexible 个人的afme-flexible都有限定不支持pad或者更大尺寸
      // if (clientWidth >= w) {
      //   clientWidth = w;
      // }

      //标准 10倍
      docEl.style.fontSize = (w / 10) * (clientWidth / w) + "px";
    };

  //窗口变化时，文档加载完毕时，控制基础字号
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
