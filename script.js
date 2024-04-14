function fibonacci(num) {
// your code here
	let n1 = 0;
        let n2 = 1;
        if(n == 0){
            return 0;
        }
        else if(n == 1){
            return 1;
        }
        else{
            for (let i = 1; i < n; i++) {
                let n3 = n1 + n2;
                n1 = n2;
                n2 = n3;
             }
             return n2;
        }   
}

module.exports = fibonacci;
