const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.Agregar-imagen')
const contenerdorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
       aparecerImagen(imagen.getAttribute('src'))
         
    })
})

contenerdorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
        contenerdorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')
hamburguer1.style.opacity ='1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenerdorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')
hamburguer1.style.opacity ='0'

}
