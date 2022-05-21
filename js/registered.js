
/*
window.onload = ()=>{
    if(localStorage.getItem('users')!= null){
        localStorage.getItem('users');
    }
}
*/


window.onload = ()=>{
    if(localStorage.getItem('data') != null){
       var div = document.getElementById('table')
       div.innerHTML += localStorage.getItem('data');
    }
 }
 