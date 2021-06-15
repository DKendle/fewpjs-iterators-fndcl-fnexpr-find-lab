function superbowlWin(array) {
   let win = array.find(function(obj){
       return obj.result === "W"
   })
   if (win){
       return win.year
   } else{
       return win
   }
}
