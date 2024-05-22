//צביעת הרקע בצבע האהוב עי המשתמש-אם נבחר
let currenUser=JSON.parse(sessionStorage.getItem("currentUser"))
let currentColor=currenUser.myColor
if(currentColor!=null)
    document.getElementById("body").style.backgroundColor=currentColor
let veg=document.getElementById("veg")
veg.addEventListener("click",f_show)
let fried=document.getElementById("fried")
fried.addEventListener("click",f_show)
let others=document.getElementById("others")
others.addEventListener("click",f_show)
let rotev=document.getElementById("rotev")
rotev.addEventListener("click",f_show)
//כפתור להצגת המוצרים 
function f_show() {
  debugger
    let father = document.getElementById("father")
    father.innerHTML=""
    let arrVeg = []
    arrVeg = loadData()
    let vegDiv
    for (let i = 0; i < arrVeg.length; i++) {
        if(arrVeg[i].category==event.target.id){
            //יצירת דיב עוטף לפתורי המוצר
            vegDiv = document.createElement("div")
            vegDiv.setAttribute("class","vegDiv")
            //יצירת כותרת ירק
            let tytle=document.createElement("h3")
            tytle.textContent=arrVeg[i].name
            tytle.setAttribute("class","tytle")
            vegDiv.appendChild(tytle)
            //כפתור הוספה לסל
            
            let add=document.createElement("button")
            add.textContent="הוספה לסל"
            add.setAttribute("class","btnVeg")
            add.addEventListener("click",f_add)
            add.setAttribute("id",i)
            vegDiv.appendChild(add)

            //יצירת כפתור לפרטים נוספים
            let details=document.createElement("button")
            details.textContent="לפרטים נוספים"
            details.addEventListener("click",f_details)
            details.setAttribute("class","btnVeg")
            details.setAttribute("id",i)
            vegDiv.appendChild(details)

            //יצירת התמונה
            let img=document.createElement("img")
            img.setAttribute("src",arrVeg[i].img)
            vegDiv.appendChild(img)
            //יצירת תגית מחיר
            let price=document.createElement("p")
            price.textContent=arrVeg[i].price+"שח"
            vegDiv.appendChild(price)
            //הוספת דיב הירק לדיב העוטף
            father.appendChild(vegDiv)
        }
    }

}
//פונקציה שמופעלת בעת לחיצה על כפתור לפרטים נוספים
function f_details(){
  debugger
  father.innerHTML=""
  let vegDiv = document.createElement("div")
  vegDiv.setAttribute("class","vegDiv")
  let i=event.target.id
  //יצירת כותרת ירק
  let tytle=document.createElement("h3")
  tytle.textContent=arrVeg[i].name
  vegDiv.appendChild(tytle)
  //יצירת התמונה
  let img=document.createElement("img")
  img.setAttribute("src",arrVeg[i].img)
  vegDiv.appendChild(img)
  //כפתור הוספה לסל
  let add=document.createElement("button")
  add.textContent="הוספה לסל"
  add.setAttribute("class","btnVeg")
  //add.addEventListener("click",f_add)
  add.setAttribute("id",i)
  vegDiv.appendChild(add)
  //יצירת תגית מחיר
  let price=document.createElement("p")
  price.textContent=arrVeg[i].price+"שח"
  vegDiv.appendChild(price)
  //הוספת דיב הירק לדיב העוטף
  father.appendChild(vegDiv)
//let p=sessionStorage.getItem("curentUser")
}
//פונקציה שמופעלת בעת לחיצה על מוצר
function f_add() {
  debugger
  let who=event.srcElement.id
  let newList = arrVeg[who]
  nl=JSON.stringify(newList)
  sessionStorage.setItem("now",nl)
  let currentUser=sessionStorage.getItem("currentUser")
  currentUser=JSON.parse(currentUser)
  let cuprod=sessionStorage.getItem("now")
  if(currentUser.myBasket[0]==null)
  {
    currentUser.myBasket[0]=cuprod
  }
  else{
    debugger
   currentUser.myBasket.push(cuprod)
    sessionStorage.setItem("currentUser",JSON.stringify(currentUser))

  }
    sessionStorage.setItem("currentUser",JSON.stringify(currentUser))
    alert("המוצר נוסף בהצלחה")
}
