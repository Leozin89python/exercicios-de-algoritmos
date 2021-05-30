function geometria1(x1,x2,y1,y2){
    let d = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
    return d
}
console.log(geometria1(4,-8,2,-3).toFixed(3))