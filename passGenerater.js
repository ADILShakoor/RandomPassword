const upperSet="QWERTYUIOPLAKSDJFHGMZXNCBV";
const lowerSet="qpwoeirutylaksjdhfgmznxbcv";
const numberSet="0123456789";
const symbolSet="!@#$%^&*()_+";

//selectors
const passBox=document.getElementById("pass-box")
const totalchar= document.getElementById("total-char")
const upperinput= document.getElementById("upper-case")
const lowerinput= document.getElementById("lower-case")
const symboleinput= document.getElementById("symbols")
const numberinput= document.getElementById("numbers")


 const getRandomData = (dataSet)=> {
    return dataSet[Math.floor(Math.random()*dataSet.length)];
 };
 const generatePassword=(password="")=>{
   if (upperinput.checked) {
    password += getRandomData(upperSet);
   }
   if (lowerinput.checked) {
    password += getRandomData(lowerSet);
   }
   if (symboleinput.checked) {
    password += getRandomData(symbolSet);
   }
   if (numberinput.checked) {
    password += getRandomData(numberSet);
   }
   if (password.length < totalchar.value) {
    return generatePassword(password);
    
   }
 passBox.innerHTML= turncateString(password,totalchar.value)
   
 }
//  generatePassword();

 document.getElementById("btn").addEventListener(
    "click",
    function (){
        generatePassword();
    }
 )


 function  turncateString(str,num) {
    if (str.length > num) {
        //sunstring(startpoint , endpoint) will gives the number from startpoint to endpoint position
        let subStr = str.substring(0,num);
        return subStr
    }
    else{
        return str;
    }
 }
 
