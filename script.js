var username=null;
let numrepos= document.getElementById("numrepository");
document.getElementById("search").addEventListener('click',function(){
 username=document.getElementById("userid").value;
    search1();
})
async function search1(){
    console.log(username);
    let container=document.getElementsByClassName("card-container")[0];
    container.innerHTML="";
let promise1=fetch(`https://api.github.com/users/${username.trim()}/repos`);
promise1.then(function(response){
    if(response.status==404){
         return 404;
    }
    else{
        return response.json();
    }
}).then(function(response){
 
    if(response==404){
         numrepos.innerHTML="Enter the correct Id";
     
         numrepos.className="red";

    }
    else{
        
         numrepos.innerHTML=response.length;
         numrepos.classList.remove("red");
  
for(var i=0;i<response.length;i++){
container.innerHTML+=` <div class="card">  
<div class="name"> Name :${response[i].name.toUpperCase()}</div>
<div class="visit"><a href="${response[i].clone_url}" target="_blank"><button>Visit</button></a></div>
</div>`;
}

    }
})

.catch(function(error){
    numrepos.innerHTML=`Error: ${error.message}`;
    numrepos.className="red";
})
}