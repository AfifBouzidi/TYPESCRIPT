class Point{
    constructor(private x?:number,private y?:number)
    {
    }
    draw()
    {
        console.log('x = '+this.x);
        console.log('y = '+this.y); 
    }
}


let point:Point=new Point();
point.draw();