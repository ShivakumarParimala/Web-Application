function primenumber() {
    for (let i=1; i<=100;i++){
        let isPrimeNumber = true;
        for(let j=2; j*j<=i; j++){
            if(i%j==0){
                isPrimeNumber=false;
                break;
            }
        }
        if(isPrimeNumber){
            console.log(i+" "+"it is a primenumber");
        }
    }
}
primenumber();