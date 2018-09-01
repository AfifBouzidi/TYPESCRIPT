
export class Calculus
{

    public add(a1:number,a2:number) :number
    {
      return a1+a2;  
    }

    public sub(a1:number,a2:number) :number
    {
      return a1-a2;  
    }

    public mult(a1:number,a2:number) :number
    {
      return a1*a2;  
    }

    public div(a1:number,a2:number) :number
    {
        if(a2==0)
        {
            throw new Error("Division by zero");
        }
      return a1/a2;  
    }
} 