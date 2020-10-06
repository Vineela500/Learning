var global:number = 20;
class sample{
    loacal: number =50;
    static stat:number=60;
     func():number{
        var fun:number =40;
        return fun;
    }
}
console.log(global);
console.log(sample.stat);
var obj = new sample();
console.log(obj.loacal);
console.log(obj.func());