const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "indexbelogin.html"
    }else{
        alert("Neteisingai suvesti duomenys!")
    }
})

// funkcija kuri patikrina ar gerai suvesti duomenys

function authentication(username,password){
    if(username === "admin" && password === ""){
        return true
    }else{
        return false
    }
}