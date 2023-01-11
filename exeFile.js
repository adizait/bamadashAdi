const Bamadash = require("./index.js");

function calc(num1, num2, operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(operator){
        case('+'):
            return(num2+num1);
        case('-'):
            return(num2-num1);
        case('*'):
            return(num2*num1);
        case('/'):
            return(num2/num1);   
        default:
            return NaN;     
    }
}

function compact(array){
    const newArr = array.filter((value) => {
        if(!isNaN(value) && value>0)
            return value;
    });
    return newArr;
}

function intersection(array1, array2, isStrict = true){
    let returnedArr =[];
    for (let i = 0; i < array1.length; i++) {
        array2.forEach(element => {
            if(!isStrict){
                if(element==array1[i]){
                    returnedArr.push(element);
                }                
            } 
            else {
                if(element===array1[i]){
                    returnedArr.push(element);
                } 
            }
        });       
    }
    return returnedArr;
}

function size(collection){
    if(typeof(collection) === "object"){
        return Object.keys(collection).length;
    }
    else if(!isNaN(collection)){
        return 0;
    }
    return collection.length;
}

function castArray(value){
    if(!Array.isArray(value)){
        return [value];
    }       
    else
        return value;
}

console.log(castArray({'a': 1}));