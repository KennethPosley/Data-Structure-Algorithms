function logItems(n){
    for (let i = 0;i < n; i++){ 
        for (let j = 0; j < n; j++) { // O(n^2) iterates through n the called number of time and is more efficient.
            console.log(i,j)
        }
        
    }
}

logItems(10)