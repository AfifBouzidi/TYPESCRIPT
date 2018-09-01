class Point{
    x:number;
    y:number;

    constructor(x:number,y:number)
    {
        this.x=x;
        this.y=y;
    }
    draw()
    {
        console.log('x = '+this.x);
        console.log('y = '+this.y); 
    }
}


let point:Point=new Point(11,12);
point.draw();