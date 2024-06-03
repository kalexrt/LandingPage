let a = document.querySelector('.item--moon')
let b = document.querySelector('.item--sun')

a.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    console.log(document.body.classList)
})
b.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    console.log(document.body.classList)
})

