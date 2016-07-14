
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function updateStyleDOM(scope, variable, value) {
  scope.customStyle[variable] = value;
  scope.updateStyles();
}





