"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Alex A. Somoza
   Date: 4-4-19  

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/
//These global variable will keep track of nodes within the document
var nodeCount = 0;
var elementCount = 0;
var textCount = 0;
var wsCount = 0;

//When the window loads it will run the makeTree function.
window.onload = makeTree;

//This function will create the node tree.
function makeTree() {
      var treeBox = document.createElement("aside");
      treeBox.id = "treeBox";
      treeBox.innerHTML = "<h1>Node Tree</h1>";

      var mainSection = document.getElementById("main");
      mainSection.appendChild(treeBox);

      var nodeList = document.createElement("ol");
      treeBox.appendChild(nodeList);
      var sourceArticle = document.querySelectorAll("#main article");
      makeBranches(sourceArticle, nodeList);
}

//This function will append branches to the node tree.
function makeBranches(treeNode, nestedList) {
      nodeCount++;
      var liElem = document.createElement("li");
      liElem.innerHTML = "+--";
      var spanElem = document.createElement("span");
      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);
}

if (treeNode.nodeType === 1) {
      elementCount++;
      spanElem.setAttribute("class", "elementNode");
      spanElem.textContent("<" + treeNode.nodeName + ">");
} else if (treeNode.nodeType === 3) {
      textCount++;
      var textString = treeNode.nodeValue;


      if (isWhiteSpaceNode(textString)) {
            wsCount++;
            spanElem.setAttribute("class", "whiteSpaceNode");
            spanElem.textContent("#text");
      } else {
            spanElem.setAttribute("class", "textNode")
            spanElem.textContent = textString
      }
}







function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}