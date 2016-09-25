var imports = document.querySelectorAll('link[rel="import"]');

for(importElement of imports ) {
  var body = document.body;
  body.insertBefore(importElement.import.body.firstChild.cloneNode(true), body.firstChild)
}
