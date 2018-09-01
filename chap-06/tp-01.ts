
interface Point {
    x:number,
    y:number,
}

function drawPoint(point:Point)
{
    console.log('x = '+point.x);
    console.log('y = '+point.y);
}

drawPoint({x:12,y:10});