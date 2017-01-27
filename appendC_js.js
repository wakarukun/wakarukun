function JSSyncLoad(srces) {
  if (srces.length == 0) {
    return;
  }

  var sc = document.createElement('script');
  sc.type = 'text/javascript';
  sc.src = srces.shift();

  // クロスブラウザ対応（IE : readyStateはファイルのキャッシュ有無で変わるようです）
  if (window.ActiveXObject) {
      sc.onreadystatechange = function() {
          if (sc.readyState == 'complete' || sc.readyState == 'loaded')  {
            JSSyncLoad(srces);
          }
      };
  } else {
      sc.onload = function(){
            JSSyncLoad(srces);
      };
  }
body = document.getElementsByTagName('body')[0];
  body.appendChild(sc);
}
