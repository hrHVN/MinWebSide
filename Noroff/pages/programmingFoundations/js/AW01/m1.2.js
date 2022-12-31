//string Methods
var text = "My favourite book is \"Harry Potter\". I love this book so much.";
text.slice(8, 14);
text.substring(4, 10);
text.substr();
text.replace(/book/g, "movie");
var result = text.toLowerCase();
text.toUpperCase();
text.indexOf("book");
text.lastIndexOf("book");
text.startsWith("My");
text.includes("My", 4);
text.endsWith("book");

document.writeln(result);
