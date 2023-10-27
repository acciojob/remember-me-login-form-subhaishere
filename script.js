//your JS code here. If required.

const check=document.getElementById("checkbox");
const submit=document.getElementById("submit");
const form=document.getElementById("form");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name1=document.getElementById("username").value;
const pass=document.getElementById("password").value;
 let userData=[name1, pass]
  if(check.checked == true){
   
    localStorage.setItem("user", JSON.stringify(userData))
  }
  else{
  
    localStorage.clear("user");
  }
})