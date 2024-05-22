debugger
let currentUser=sessionStorage.getItem("currentUser")
currentUser=JSON.parse(currentUser)
  //צביעת הרקע בצבע האהוב עי המשתמש-אם נבחר
  let currentColor=currentUser.myColor
  if(currentColor!=null)
    document.getElementById("body").style.backgroundColor=currentColor

   let mb=currentUser.myBasket
  for(let i=0;i<currentUser.myBasket.length;i++){
    currentUser.myBasket[i]=JSON.parse(currentUser.myBasket[i]);
}
document.body.onload=f_show()
function f_show(){

  debugger 
  let father=document.getElementById("father")
  if(currentUser.myBasket.length==0)
  {
    father.innerHTML="סל הקניות שלך ריק.. 🛒"
  }
  
  for(let i=0;i<currentUser.myBasket.length;i++)
  {
    
    //יצירת דיב עוטף לכפתורי המוצר
    let myVeg = document.createElement("div")
    myVeg.setAttribute("class","vegDiv")
    //יצירת כותרת ירק
    let tytle=document.createElement("h3")
    tytle.textContent=mb[i].name
    myVeg.appendChild(tytle)
    //יצירת התמונה
    let img=document.createElement("img")
    img.setAttribute("src",mb[i].img)
    myVeg.appendChild(img)
    //יצירת תגית מחיר
    let price=document.createElement("p")
    price.textContent=mb[i].price+"שח"
    myVeg.appendChild(price)
    //יצירת כפתור הסרה מהסל
    let remove=document.createElement("button")
    remove.setAttribute("id",i)
    //remove.setAttribute("data-i", i)
    remove.addEventListener("click",function(){ f_remove(mb);})
    remove.textContent="הסרה מהסל"
    myVeg.appendChild(remove)
    //הוספת דיב הירק לדיב העוטף
    father.appendChild(myVeg)
  }
  
  let cu=sessionStorage.getItem("currentUser")
  cu=JSON.parse(cu)
  let thisBasket=cu.myBasket
  debugger
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





function f_remove(mb){

  debugger
  mb.splice(event.srcElement.getAttribute("id"),1)
 let newBasket=mb;
 for(let i=0;i<newBasket.length;i++)
 {
  newBasket[i]=JSON.stringify(newBasket[i]);
 }
 let cu=sessionStorage.getItem("currentUser");
 cu=JSON.parse(cu)
 cu.myBasket=newBasket
 sessionStorage.setItem("currentUser",JSON.stringify(cu))
 father.innerHTML=""
 for(let i=0;i<currentUser.myBasket.length;i++){
  currentUser.myBasket[i]=JSON.parse(currentUser.myBasket[i])
  }
 f_show();

}


