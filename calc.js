const $ = document;

const display = $.getElementById('display')
const num = $.querySelectorAll('.num')
const pointer = $.querySelectorAll('span.pointer')
const clrMe = $.querySelector(".clr")
const deletMe = $.getElementById("display")


   // ||DISPLAY ON SCREEN||
         
   function disp(val){
      // display.value += val
   }

   
   // ||TURNING ON/OFF POINTERS||

   num.forEach((items) =>{
      items.addEventListener("click", () =>{
         if(display.value == ' '){
            pointer.forEach((items) =>{
               items.classList.add('pointer')
            })
         } else{
            pointer.forEach((items) =>{
               items.classList.remove("pointer")
            })
         }
      })
   })


   // || CALCULATE [EVALUATE] ||

   function equal() {
      // console.log('evaluate');
      display.value = eval(display.value.replaceAll("X", "*"))
      let x = display.value
      let y = eval(x)
      display.value = y
   }

   
      
   // ||DELETING||

   function del(){
      deletMe.value = deletMe.value.substring(0, deletMe.value.length - 1)
      // console.log('deleteMe');
   }

   // ||CLEAR||

   clrMe.addEventListener('click', () =>{
            // console.log("clearMe");
            display.value = ''
   })

   // function clear() {
   //    console.log("clearMe");
   // }

   // function clear(){
   //    console.log('clearAll');
   //    // clrMe.value += "" 
   // }

   // clrMe.addEventListener('click', () =>{
   //    console.log('delete');
   // })









 

