var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
        this.z = 10;
    }
    return Shape;
}());
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Point.prototype.draw = function () {
        console.log('x = ' + this.x);
        console.log('y = ' + this.y);
        console.log('z = ' + this.z);
    };
    return Point;
}(Shape));
var pointOne = new Point(12, 23);
pointOne.draw();
