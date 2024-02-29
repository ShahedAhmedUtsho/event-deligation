

let ul = document.getElementById('ul')
ul.addEventListener('click',(e)=>{
   if(e.target.matches('li')){
    e.target.style.background="#ddd";
    e.target.style.color="#000"
   }
    
})


function add(){
    let li = document.createElement('li');
    li.innerText = "another"
    ul.appendChild(li)
    
}

