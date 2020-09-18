
function Treee(){
  this.root = null;
}

Treee.prototype.traverse = function(){
//  this.root.visit(this.root);

}

Treee.prototype.drawTree = function(){
  this.root.drawTree(this.root);
}


Treee.prototype.add = function(val,nodesInLevel){


  var n = new Nodee (val);
  if(this.root == null){
    this.root = n;
    this.root.x = width/2;
    this.root.y = 24;

  }else{
    this.root.addNode(n,nodesInLevel);
  }
}



Treee.prototype.search = function (val) {

return this.root.search(val);
};
