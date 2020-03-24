for (var i = 0; i < 3; i++) {
  console.log(i + ' start');
  setTimeout(function() {
    console.log(i + ' inside function');
  }, 0);
  console.log(i + ' end ');
}
