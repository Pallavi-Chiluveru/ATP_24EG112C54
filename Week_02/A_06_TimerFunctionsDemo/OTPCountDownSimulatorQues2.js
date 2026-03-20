// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//Simulate OTP sending flow in Node.js: 

//Show “OTP Sent Successfully”  
console.log("OTP Sent Successfully")

//Start 10-second countdown  
//Allow resend only after countdown ends
let count=0
let countDown=setInterval(()=>{
  count++
  console.log(count)
  if(count==10){
  clearInterval(countDown)
  console.log("resend OTP")
  }
},1000)
 

































// console.log("OTP Sent Successfully");
// let time = 10;
// let countdown = setInterval(() => {
//   console.log("Resend OTP in:", time, "seconds");
//   time--;
//   if (time < 0) {
//     clearInterval(countdown);
//     console.log("You can now resend the OTP");
//   }
// }, 1000);