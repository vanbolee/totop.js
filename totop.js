(function() {
  // 使用JavaScript为页面添加返回顶部滑块儿
  var div = document.createElement("div");
  div.id = "to-top";
  div.style.cssText = ` display: none;   
                      position: fixed;
                      bottom: 20px;
                      right: 20px;
                      z-index: 100;
                      cursor: pointer;
                      width: 40px;
                      height: 40px;
                      line-height: 40px;
                      border-radius: 3px;
                      background: #666;
                      text-align: center;
                      font-size: 25px;
                      `;
  // 为了方便，我这里直接使用HTML向上箭头的实体
  div.innerHTML = "&uarr;";
  document.body.appendChild(div);

  // 返回顶部 动画实现
  // animationToTop() 默认有2个参数
  // step 设置滚动函数中每次向上滚动的像素值，默认为 5像素
  // delay 设置每次调用滚动函数的时间间隔，默认为 20ms
  function animationToTop(step = 5, delay = 20) {
    var intervalID;
    intervalID = window.setInterval(roll, delay); // 计时器
    var length = window.scrollY;

    // 向上滚动函数
    function roll() {
      window.scrollTo(0, length -= (step++));
      if (length <= 0) {
        clearInterval(intervalID);
        var top = document.getElementById("to-top");
        top.style.pointerEvents = "auto";
        top = null;
      }
    }
  }

  // 添加点击事件
  var top = document.getElementById("to-top");
  top.onclick = function() {
    var top = document.getElementById("to-top");
    top.style.pointerEvents = "none";
    top = null;
    animationToTop();
  };

  // 在合适的时间 显示 返回顶部按钮
  document.addEventListener("scroll", function() {
    var top = document.getElementById("to-top");
    if (window.scrollY < document.body.clientHeight / 4) {
      top.style.display = "none";
    } else {
      top.style.display = "block";
    }
    top = null;
  });

})();
