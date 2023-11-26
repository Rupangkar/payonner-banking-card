document.getElementById("loging-button").addEventListener("click",function (){

    const email =document.getElementById('email').value;
    const password = document.getElementById("password").value ;


    // console.log(email,password);

    if(email == 'rupock@gmail.com' && password == 654321){
        window.location.href = 'banking.html'
    }
})