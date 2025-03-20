let num = 19

while(num!==0){
     console.log(num)
     let res = 0

         while(num>0){
           let rem = num%10
               res += rem**count
               num = Math.floor(num/10)
            }
    num = res
    if(num == 1){
      console.log(num)
      console.log("happy number")
      break;
    }
}
