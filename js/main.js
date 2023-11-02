const inicioSecion = document.querySelector('#inicioSesion');
inicioSecion.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    console.log(email, password)
})

