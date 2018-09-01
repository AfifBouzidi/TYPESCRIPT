class PointObject{
    constructor(private x:number,private y:number)
    {
    }

    getX()
    {
        return this.x;
    }

    setX(x:number)
    {
        if(x>=0)
        {
      this.x=x;
    }
      else
      {
          throw new Error("x < 0");
      }
    }
    draw()
    {
        console.log('x = '+this.x);
        console.log('y = '+this.y);
    }
}

let pointTwo =new PointObject(2,2);
pointTwo.setX(-1);