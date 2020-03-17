let psw = 'Hello Passw0rd';
function checkPsw(psw) {
  var signal = [];
  var lengthPsw = psw.length;
  if (lengthPsw < 6) signal.push('Too short');
  var copyPsw = psw.replace(/[a-z]+/g, '');
  if (lengthPsw == copyPsw.length) signal.push('Almost one lower case letter');
  var copyPsw2 = copyPsw.replace(/[A-Z]/g, '');
  if (copyPsw2.length == copyPsw.length)
    signal.push('Almost one upper case letter');
  copyPsw = copyPsw2.replace(/\d/g, '');
  if (copyPsw2.length == copyPsw.length) signal.push('Almost one digit');
  if (copyPsw.replace(/ /, ''.length == 0))
    signal.push('Almost one special character');
  return signal.join('\n');
}
console.log(checkPsw(process.argv[2]));
