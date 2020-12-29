class Roof{
	constructor(x,y,w,h){
		var options={
			isStatic:true			
			}
		
		this.body=Bodies.rectangle(x, y, this.w, this.h , options);
		this.w=w
		this.h=h
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
