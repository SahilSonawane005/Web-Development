burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')


burger.addEventListener('click',()=>{
    navclass.classlist.toggle('vclass');
    navbar.classlist.toggle('h-list');
    navlist.classlist.toggle('vclass');
})