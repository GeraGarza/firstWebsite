

function Nodee(val, x=null ,y=null, level=0){
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.level = level;
}

Nodee.prototype.search = function(val){


  if(this.value == val){
    return this;
  }else if(val < this.value && this.left !=null){
    return this.left.search(val);
  }else if(val > this.value && this.right !=null){
    return this.right.search(val);
  }

  return null;
}


Nodee.prototype.visit = function(parent){

  if(this.left !=null){
    this.left.visit(this);
  }

  stroke(255);
  line(parent.x,parent.y,this.x,this.y);

  fill(10,10,255);
  ellipse(this.x,this.y,20,20);

  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  text(this.level,this.x,this.y);


  if(this.right !=null){
    this.right.visit(this);
  }

}

Nodee.prototype.drawTree = function(parent){

  if(this.left !=null){
    this.left.drawTree(this);
  }

  // this divides the screen into parts
  //var widthX =  width/(((nodesInLevel[this.TotalInLevel]).TotalInLevel));
  //var levelX = ((((nodesInLevel[this.TotalInLevel]).iteration )) *  (widthX) ) - widthX/2;

  if(parent.x > this.x){
    stroke(255,100,255);

  }else{
    stroke(100,255,255);

  }
  line(parent.x,parent.y, this.x,this.y);
  fill(10,10,255);
  var szeAdj = this.level+1;
  ellipse(this.x,this.y,25 - szeAdj ,25 - szeAdj);


  fill(255,255,255);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(16-szeAdj);
  text(this.value,this.x,this.y);


  if(this.right !=null){
    this.right.drawTree(this);
  }

}


Nodee.prototype.addNode = function (n, level=0) {

  var moveX = ((1/(Math.pow(2, level))) * width)/4;
  var moveY = 80 - (level * 8) ;

  if(n.value < this.value){
    if(this.left == null){
      this.left = n;
      this.left.x = this.x-moveX;
      this.left.y = this.y+moveY;
      this.left.level = level+1;

    }else{
      level ++;
      this.left.addNode(n,level);
    }
  }else if(n.value > this.value){
    if(this.right == null){
      this.right = n;
      this.right.x = this.x+moveX;
      this.right.y = this.y+moveY;
      this.right.level = level+1;

    }else{
      level ++;
      this.right.addNode(n,level);
    }
  }


}









//
