
class Slingshot {

constructor(bodyA,bodyB)
{

   var options = {
  
  bodyA:bodyA,
  bodyB:bodyB,
  stiffness:0.01,
  lenght:10
    
   }

  this.chain= Matter.Constraint.create(options);
  World.add(world,this.chain);


}

display() {

 var pointa=this.chain.bodyA.position
 var pointb=this.chain.bodyB.position
 strokeWeight(3);
line(pointa.x,pointa.y,pointb.x,pointb.y)
}







}