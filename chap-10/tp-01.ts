class Shape{
    protected z:number=10;
}
class Point extends Shape{
    private x:number;
    private y:number;

    constructor(x:number,y:number)
    {
        super();
        this.x=x;
        this.y=y;
    }
    draw()
    {
        console.log('x = '+this.x);
        console.log('y = '+this.y); 
        console.log('z = '+this.z); 
    }
}

let pointOne:Point=new Point(12,23);
pointOne.draw();

