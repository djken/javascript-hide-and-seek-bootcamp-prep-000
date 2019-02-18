
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("div.target")
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')
  
  for ( let i = 0, l = rankedList.length; i < l ; i++){
    
    var children = rankedList[i].children;
    
    for ( let j = 0, k = children.length; j <k; j++) {
      
      children[j].innerHTML = parseInt(children[j].innerHTML)+n
      
    }
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var childNode = node.children[0]
  
  while (childNode){
    node = childNode
    childNode = node.children[0];
  }
  return node;
}