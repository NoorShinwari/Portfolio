// Callback in callback......
//how can we load two scripts sequentially: the first one, the second one after it?
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('/my/script.js', function(script) {
  alert(`Cool, the ${script.src} is loaded, let's load one more`);
  loadScript('/my/script2.js', function(script) {
    alert('Cool, the second script is loaded');
    loadScript('/my/script2.js', function(script) {
      alert('Cool, the second script is loaded');
    });
  });
});

loadScript('/my/script.js', function(script) {
  loadScript('/my/script2.js', function(script) {
    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });
  });
});
