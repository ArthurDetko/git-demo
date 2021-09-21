function getPrimeNumber(x){
    if (x <= 1){
        console.log("не простое");
        return false;
    }
    if (x % 2 == 0 && x > 2){ //исключение четных чисел
        console.log("составное"); 
        return false;
    }
    const s = Math.sqrt(x);
    for(let i = 3; i <= s; i += 2){ //перебор нечетных до значения корня
        if(x % i === 0){
            console.log("составное");
            return false;
        }
    }
    console.log("простое");
}
getPrimeNumber(73);