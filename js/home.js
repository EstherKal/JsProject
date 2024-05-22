//צביעת הרקע בצבע האהוב עי המשתמש-אם נבחר
let currentUser=JSON.parse(sessionStorage.getItem("currentUser"))
let currentColor=currentUser.myColor
if(currentColor!=null)
    document.getElementById("body").style.backgroundColor=currentColor
