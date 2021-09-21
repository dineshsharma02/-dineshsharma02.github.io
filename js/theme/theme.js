window.onload = function () {
    let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './themes/bootstrap.min.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/theme1.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './themes/sketchy.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/lux.css';
  }
  localStorage.setItem('style', theme);
}
}
// / var themetglr = document.getElementById("themetglr");
    // var cssid = document.getElementById("switcher-id");
    // themetglr.onclick = function () {
    //     cssid.href = './themes/theme1.css'; 
    //     // console.log("toogle button clicked");
    // };