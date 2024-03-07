// lower case 
let personName: string ="Fahad"
console.log ("lower case:", personName.toLowerCase());

// Upper case
console.log("uppercase:" , personName.toUpperCase());

// TITLE CASE
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));