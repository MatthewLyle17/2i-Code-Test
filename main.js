let x = 4;
let array = [2, 3, 1, 5]

    for(let i = 0; i < array.length; i++){
         if(array[i] + array[i] === x){
            console.log("is Add");
        } 
        else if(array[i] - array[i] === x){
            console.log("is Subtract");
        } 
        else if(array[i] * array[i] === x){
            console.log("is Multiply");
        } 
        else if(array[i] / array[i] === x){
            console.log("is Divide");
        } 
    
}

