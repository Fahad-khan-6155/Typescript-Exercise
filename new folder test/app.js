// lower case 
var personName = "Fahad";
console.log("lower case:", personName.toLowerCase());
// Upper case
console.log("uppercase:", personName.toUpperCase());
// TITLE CASE
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
