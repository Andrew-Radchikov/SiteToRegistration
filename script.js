const hisName=document.getElementById("nameNew");
const surname=document.getElementById("surnameNew");
const login=document.getElementById("loginNew");
const password=document.getElementById("passwordNew");
const loginToSee=document.getElementById("login");
const passwordToSee=document.getElementById("password");
const loginDiv=document.querySelector(".logIn");
const registrationDiv=document.querySelector(".inputForm");
const mySHoe=document.querySelector(".mainPage");
const welcome=document.querySelector(".welcome");


document.querySelector(".myButton").addEventListener("click", ()=>{
    let data = new FormData();
    data.append("name", hisName.value);  
    data.append("surname", surname.value); 
    data.append("login", login.value); 
    data.append("password", password.value); 
    fetch(`https://script.google.com/macros/s/AKfycbwEP3u3bPYCdonf0dCnT5hZ7VscqhrZzR4Jt-8yGbts7zbH-S-kxCKeI4RFFrmXdxueCg/exec`, { method: "POST", mode: 'no-cors', body: data })
})


document.querySelector(".logButton").addEventListener("click", ()=>{
    let red=0;
    let numb;
    var json_obj = JSON.parse(Get(`https://script.google.com/macros/s/AKfycbwEP3u3bPYCdonf0dCnT5hZ7VscqhrZzR4Jt-8yGbts7zbH-S-kxCKeI4RFFrmXdxueCg/exec?login=${loginToSee.value}`));
   
    for(let i=0; i<json_obj.users.length; i++){
        if(json_obj.users[i].Password == passwordToSee.value){
            red=1;
            numb=i;
          

            break;
        }
               
    }
        if(numb != undefined){
            loginDiv.classList.toggle("notShow");
            let str=`Добро пожаловать ${json_obj.users[numb].Name} ${json_obj.users[numb].Surname}`;
            welcome.innerHTML=str;
          
            mySHoe.style.display="flex";
            
        }
    if(red == 0){
        alert("Неправильный логин или пароль");
    }
     
})

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


document.querySelector(".goToRegistration").addEventListener("click",()=>{
    registrationDiv.classList.toggle("show");
    loginDiv.classList.toggle("notShow");
})

document.querySelector(".goToInput").addEventListener("click",()=>{
    registrationDiv.classList.toggle("show");
    loginDiv.classList.toggle("notShow");
})