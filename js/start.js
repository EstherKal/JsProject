let inputName=document.getElementById("name")
inputName.addEventListener("blur",f_find)

//הגדרת מערך המשתמשים
let persons=localStorage.getItem('persons')
if (persons == null) {
    persons=new Array();
}
else
    persons=JSON.parse(persons)
//פונקציה המופעלת בעת הכנסת שם משתמש
let thisUser
function f_find(){
    let find = false
    let myName=inputName.value
    let father=document.getElementById("father")
    for(let i=0;i<persons.length && find==false;i++){
        //אם מצאתי כזה לקוח
        if(persons[i].name==myName){
            thisUser=persons[i]
            find=true
            //  יצירת כפתור הכנסת סיסמא וכפתור כניסה לאתר
            let inputCode=document.createElement("input")
            inputCode.setAttribute("class","input")
            inputCode.setAttribute("placeholder","הכנס סיסמא")
            inputCode.setAttribute("id","inputCode")
            father.appendChild(inputCode);
            let enter=document.createElement("button")
            enter.textContent="כניסה"
            enter.addEventListener("click",f_enter)
            enter.setAttribute("class","btn");
            father.appendChild(enter);
        }
    }
    // אם לא נמצא, מודיע הודעה מתאימה 
    if(find==false){
        alert("לקוח לא נמצא")
        let conect=document.createElement("button")
        conect.setAttribute("class","btn")
        conect.textContent="התחברות"
        conect.addEventListener("click",f_newCustomer)
        father.appendChild(conect)   
    }
} 
//פונקצית כניסה הפועלת בעת לחיצת כפתור כניסה של משתמש קיים
function f_enter(){
    if(document.getElementById("inputCode").value!=thisUser.code){
        alert("it is not your code")
        inputCode.focus();
    }
    else{
        sessionStorage.setItem("currentUser",JSON.stringify(thisUser))
        window.location="../html/home.html"
    }
        
    
}
function f_newCustomer(){
    //יצירת תיבות טקסט להכנסת נתוני הלקוח החדש
    let father= document.getElementById("father")
    father.innerHTML="" 
    let inputName=document.createElement("input")
    inputName.setAttribute("placeholder","input your name")
    inputName.setAttribute("class","new")
    inputName.setAttribute("id","inputName")
    let inputCode=document.createElement("input")
    inputCode.setAttribute("placeholder","input your code")
    inputCode.setAttribute("class","new")
    inputCode.setAttribute("id","inputCode")
debugger
    //יצירת כפתור בחירת צבע ללקוח
       let inputColor=document.createElement("input")
       inputColor.setAttribute("value","בחרו צבע לרקע")
        inputColor.setAttribute("type","color")
        inputColor.setAttribute("class","color")
        inputColor.setAttribute("id","inputColor")
 
            //יצירת כפתור התחברות
    let newEnter=document.createElement("button")
    newEnter.textContent="סיים התחברות"
    newEnter.setAttribute("class","done")
    newEnter.addEventListener("click",f_push);
  
    //הכנסת כל הכפתורים לדיב העוטף
    father.appendChild(document.createElement("br"))
    father.appendChild(inputName)
    father.appendChild(document.createElement("br"))
    father.appendChild(inputCode)
    father.appendChild(document.createElement("br"))
    // father.appendChild(inputCrtCode)
    father.appendChild(inputColor)
    father.appendChild(document.createElement("br"))

    father.appendChild(newEnter)
  
    
}
//הכנסת הלקוח החדש למערך הלקוחות
function f_push(){
    //בדיקת תקינות
    //יצירת משתמש
    let newUser=
    {
        name:document.getElementById("inputName").value,
        code:document.getElementById("inputCode").value,
        mySalad:null,
        myBasket:new Array(),
        myColor:document.getElementById("inputColor").value,
        myPrice:0
    }
    sessionStorage.setItem("currentUser",JSON.stringify(newUser))
    persons.push(newUser);
    father.innerHTML=""
    alert("תודה שהצטרפת אלינו")
    localStorage.setItem("persons",JSON.stringify(persons))
    window.location="../html/home.html"
  
}

