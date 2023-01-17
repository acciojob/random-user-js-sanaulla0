//your code here

let user={};
let picture = document.getElementById('img');
let detail = document.getElementById('name');

let agebtn = document.getElementById('age'); 
let emailbtn = document.getElementById('email'); 
let phonebtn = document.getElementById('phone'); 

let releventdata = document.getElementById("releventdata");
let releventdata1 = document.getElementById("releventdata1");
let releventdata2 = document.getElementById("releventdata2");

let fetchbtn = document.getElementById('getUser');


function collect(user){
      picture.innerHTML='';
      detail.innerHTML='';
 let img = document.createElement('img');
 let fname = document.createElement('span');
     img.src = user.picture.large;
//      img.classList.add('img')
     fname.innerHTML = user.name.first+" "+user.name.last;
     picture.append(img);
     detail.append(fname); 
}



let fetchuser = async()=>{
      let resp = await fetch("https://randomuser.me/api/");
      let data = await resp.json();
      user = data.results[0];
      console.log(user);
      collect(user);
}

document.addEventListener("DOMContentLoaded",fetchuser);

function ages(){
      releventdata1.innerText='';
      releventdata2.innerHTML="";
      // let getage = document.createElement('span');
      // getage.innerHTML=;
releventdata.innerHTML = user.dob.age;
}

function mail(){
      releventdata.innerText='';
      releventdata2.innerText='';
      //  let getage = document.createElement('span');
      //  getage.innerHTML=user.email;
      //  console.log(getage);
       releventdata1.innerHTML= user.email;
}
function phone(){
      releventdata.innerText='';
      releventdata1.innerHTML="";
      releventdata2.innerHTML=user.cell;
}



  agebtn.addEventListener("click",ages);
emailbtn.addEventListener("click",mail);
phonebtn.addEventListener("click",phone);

fetchbtn.addEventListener('click',fetchuser);