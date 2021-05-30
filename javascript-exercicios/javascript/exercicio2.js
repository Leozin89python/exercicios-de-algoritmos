function geometria2(a,b,c){
    let r =  Math.pow((a + b),2)
    let s =  Math.pow((b + c),2)
    const d = ((r + s) /2)
    
    if(a <= 0 || b <= 0|| c <= 0){
        console.log('valores inválidos')
    }else{
       console.log('D =' + d)
    }
}
geometria2(1,5,3)