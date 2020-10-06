var global = 20;
var sample = /** @class */ (function () {
    function sample() {
        this.loacal = 50;
    }
    sample.prototype.func = function () {
        var fun = 40;
        return fun;
    };
    sample.stat = 60;
    return sample;
}());
console.log(global);
console.log(sample.stat);
var obj = new sample();
console.log(obj.loacal);
console.log(obj.func());
