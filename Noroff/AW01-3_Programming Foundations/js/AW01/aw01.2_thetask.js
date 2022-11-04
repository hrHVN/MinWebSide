var oriText = "My favourite book is \"Harry Potter\". I love this book so much.";
let text1, text2, text3, text4;

//task 1
let target1 = "favourite";
let target2 = "book";
let target3 = "is";
let target4 = "Harry Potter";

let t1_1 = oriText.indexOf(target1);
let t1_2 = oriText.indexOf(target2);
let t1_3 = oriText.indexOf(target3);
let t1_4 = oriText.indexOf(target4);

text1 = oriText.substring(t1_1, (t1_1 + target1.length)) + " ";
text1 += oriText.substring(t1_2, (t1_2 + target2.length)) + " ";
text1 += oriText.substring(t1_3, (t1_3 + target3.length)) + " ";
text1 += oriText.substring(t1_4, (t1_4 + target4.length));

document.writeln(text1 + "<br>");

//task 2
let target2_1 = "My";
let target2_2 = "love";

text2 = text1;
text2 = text2.replace("favourite", target2_1);
text2 = text2.replace("Harry Potter", target2_2);

document.writeln(text2 + "<br>");

//Task 3
t3_1 = oriText.substring(t1_4, (t1_4 + target4.length));
t3_1 = t3_1.toUpperCase();
text3 = text2;

text3 = text3.replace("love", t3_1);

document.writeln(text3 + "<br>");

//Task 4
let t4_1 = oriText.substring(t1_4, (t1_4 + target4.length));
t4_1 = t4_1.toLowerCase();

text4 = t4_1.slice(t4_1.indexOf("potter"), t4_1.length) + " ";
text4 += t4_1.slice(t4_1.indexOf("harry"), 5);

document.writeln(text4 + "<br>");