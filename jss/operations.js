function decodeUNICODE(string) {
  'use strict';
  string = decodeURIComponent(string);
  var r = /\\u([\d\w]{4})/gi;
  string = string.replace(r, function(match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
  });
  string = decodeURI(string);

  return string;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function updateStyleDOM(scope, variable, value) {
  scope.customStyle[variable] = value;
  scope.updateStyles();
}

//
//function init() {
//  var sorter = tsorter.create('TABLE-ID');
//}
//
//window.onload = init;




