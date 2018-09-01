class ObjectPoint{
    constructor(private x:number,private y:number)
    {
    }

    get X()
    {
        return this.x;
    }

    set X(value)
    {
        if(value>=0)
        {
      this.x=value;
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

let objectPoint =new ObjectPoint(2,2);
console.log(objectPoint.X);
objectPoint.X=12;