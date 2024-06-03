let a = document.querySelector('.theme-toggle--button')
console.log(a)
a.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    console.log(document.body.classList)
    console.log('click')
})