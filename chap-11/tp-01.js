var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point.prototype.draw = function () {
        console.log('x = ' + this.x);
        console.log('y = ' + this.y);
        console.log('z = ' + this.z);
    };
    return Point;
}());
var point = new Point(10, 20, 30);
point.draw();
