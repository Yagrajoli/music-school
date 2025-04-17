function printNumbers(){
    sum =0

    for (let i=1; i<=10 ;i++){
        sum = sum + i
        console.log(`Number printed is ${i}`)
    }
    console.log(`Sum of 1 to 10 = ${sum}`)
    console.log("Table of 5")

    for (let i=1; i<=10 ;i++){
        let mul = 5* i
        console.log(`5 * 1 = ${mul}`)
    }
    i = 10
    while (i>=1){
        console.log(i)
        i-=1
    }

    i=1
    do{
        console.log(i)
        i+=1
    }while(i<=5)

    i=5
    let mul=1
    do{
        mul=mul*i
        i-=1
    }while(i>0)
    console.log(`factorial of a number ${mul}`)

    let j=1
    while (j<=5){
        k=j
        let output=''
        while(k>0){
            output+="*"+' '
            k-=1
        }

        console.log(output)
        j+=1
    }

    for (let i=1;i<10;i++){
        if (i==5){
            continue;
        }

        else if(i==7){
            break;
        }
        
        else{
            console.log(i)
        }
    }
}

printNumbers()