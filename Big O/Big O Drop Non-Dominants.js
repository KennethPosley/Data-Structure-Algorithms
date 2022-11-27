function logItems(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            console.log(i, j)
        }
    }
// O(n^2 + n) the non dominant loop is below 
    for (let k = 0; k < n; k++){
        console.log(k)
    }
}

logItems(10)