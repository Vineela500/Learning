function det(num1:number):string
{
    if(num1==0){
        return "zero";
    }
    else if(num1>0){

        return "positive";
    }
    else{
        return "negative";
    }
}
console.log(det(10));