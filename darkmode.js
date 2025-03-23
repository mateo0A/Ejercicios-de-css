let btnMode=document.querySelector('.mode-dl')
let mode=localStorage.getItem('Dark')

const eneable=()=>{
    localStorage.setItem('Dark','active')
    document.querySelector('body').classList.add('Dark')    
}
const disable=()=>{
    localStorage.setItem('Dark',null)
    console.log(2);
    document.querySelector('body').classList.remove('Dark')    
    
}

if(mode==='active') eneable()

btnMode.addEventListener('click',()=>{
    mode=localStorage.getItem('Dark')

    mode !=='active'?eneable() : disable()
})