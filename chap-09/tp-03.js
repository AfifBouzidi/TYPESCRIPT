var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x = ' + this.x);
        console.log('y = ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
