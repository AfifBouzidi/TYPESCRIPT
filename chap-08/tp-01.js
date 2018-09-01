var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x = ' + this.x);
        console.log('y = ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 22;
point.draw();
