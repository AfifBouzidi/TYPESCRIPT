class Point{
    constructor(private x:number,public y:number,protected z:number)
    {
    }
    draw()
    {
        console.log('x = '+this.x);
        console.log('y = '+this.y); 
        console.log('z = '+this.z);
    }
}


let point:Point=new Point(10,20,30);
point.draw();