

const indificationNumber = (a, b) => {
    if(a > 0 && b > 0){
        return a + b;
    }else if(a > 0 && b < 0 || a < 0 && b > 0){
        return a * b;

    }else{
        return a / b;
    }
};

module.exports = indificationNumber;