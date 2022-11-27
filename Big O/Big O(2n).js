function logItems(n){
    for (let i = 0;i < n; i++){ // O(n) 
        console.log(i)
    }
    for (let j = 0; j < n; j++) { // O(2n) Drop Constants n + n or 2n
        console.log(j)
        
    }
}

logItems(3)