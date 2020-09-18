
// Binary Tree
// Part 1: https://youtu.be/ZNH0MuQ51m4
// Part 2: https://youtu.be/KFEvF_ymuz
var nodes = [];
var tree;
var addLeaf;
function setup() {



  createCanvas(300,300);
  background(51);

  tree = new Treee();
  addLeaf = floor(random(0,100));
  for(var i=0; i<20; i++){
    var levelObj = new LevelObj();

    nodes.push(floor(random(0,100)));
  }



}


function LevelObj(){
  this.TotalInLevel = 0;
  this.iteration = 1;
}


function draw(){


  for(var i=0;i<nodes.length;i++){
    tree.add(nodes[i]);
  }
  tree.add(addLeaf);
  tree.drawTree();


}
