function det(num1) {
    if (num1 == 0) {
        return "zero";
    }
    else if (num1 > 0) {
        return "positive";
    }
    else {
        return "negative";
    }
}
console.log(det(10));
