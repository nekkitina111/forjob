function checkBrowser() {
  var checkIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  if (checkIE) {
    alert('Сочувствую, но ваш браузер IE :)))))');
  } else {
    alert('Браузер не IE');
  }  
  return checkIE;
}
