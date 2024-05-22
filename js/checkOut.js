//צביעת הרקע בצבע האהוב עי המשתמש-אם נבחר
let currenUser=JSON.parse(sessionStorage.getItem("currentUser"))
let currentColor=currenUser.myColor
if(currentColor!=null)
    document.getElementById("body").style.backgroundColor=currentColor
debugger
let father=document.getElementById("father")

let cu=sessionStorage.getItem("currentUser")
cu=JSON.parse(cu)
let thisBasket=cu.myBasket
document.body.onload=function(){ f_price();}
function f_price(){
    debugger
    if(cu.myBasket.length==0){
      let lable=document.createElement("lable")
      lable.textContent="עדיין לא קנית "
      father.appendChild(lable).style.fontSize="30px"
      father.style.background="pink"
    }
    else{
      let sum=0;
      for(let i=0;i<thisBasket.length;i++)
          thisBasket[i]=JSON.parse(thisBasket[i])
      for(let i=0;i<thisBasket.length;i++)
      {
          sum+=thisBasket[i].price
      }
      let text=document.createElement("h3")
      text.textContent="הסכום לתשלום הוא "+sum+"שח"
      father.appendChild(text)
    }
}

