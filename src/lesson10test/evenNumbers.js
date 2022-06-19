
const evenNamber = (num) =>{

    if(num > 0 && num < 100){

        if(num % 2 === 0){
            return true;
        }
        return false;


    }
    return false;

    
}

module.exports = evenNamber;