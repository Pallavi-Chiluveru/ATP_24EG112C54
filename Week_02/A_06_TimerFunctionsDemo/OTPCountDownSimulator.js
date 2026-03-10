// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//Simulate OTP sending flow in Node.js:        
//Show “OTP Sent Successfully”   
//Start 10-second countdown  
//Allow resend only after countdown ends

console.log("OTP Sent Successfully");
let time = 10;
let countdown = setInterval(() => {
  console.log("Resend OTP in:", time, "seconds");
  time--;
  if (time < 0) {
    clearInterval(countdown);
    console.log("You can now resend the OTP");
  }
}, 1000);