/* Julie Rizzino
rizzino_a09b.js
INFO 2124
Thoendel
2/12/20 */

document = "rizzino_a09b.html";
//define the document for the js file

var pCount = document.getElementsByTagName('p');
//get the p tag element from the html document and label it pCount
let msgP = `The total number of p tags in this document is: ${pCount.length}.<br>`;
//message for output in the html file to display the length of the var pCount
document.write(msgP);
//output message in browser when accessing html file

var divCount = document.getElementsByTagName('div');
//get the div tag element from the html document and label it divCount
let msgDiv = `The total number of div tags in this document is: ${divCount.length}.<br>`;
//message for output in the html file to display the length of the var divCount
document.write(msgDiv);
//output message in browser when accessing html file

var paraCount = document.getElementsByClassName('paragraph');
//get the paragraph class element from the html document and label it paraCount
let msgPara = `The total number of paragraph class elements in this document is: ${paraCount.length}.<br>`
//message for output in the html file to display the length of the var paraCount
document.write(msgPara);
//output message in browser when accessing html file

var textCount = document.getElementsByClassName('block-text');
//get the blocl-text class element from the html document and label it textCount
let msgText = `The total number of block-text class elements in this document is: ${textCount.length}.<br>`
//message for output in the html file to display the length of the var textCount
document.write(msgText);
//output message in browser when accessing html file

var dispId = document.getElementById('b001');
//get the ID b001 element from the html document and label it dispId
let msgId = `This is the ID attribute b001 in this document: ${dispId}.`;
//message for output in the html file to display the b001 element
document.write(msgId);
//output message in browser when accessing html file








