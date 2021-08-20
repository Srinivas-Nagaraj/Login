window.addEventListener('load',()=>{
    const username=localStorage.getItem("USERNAME");
    const password=localStorage.getItem("PASSWORD");
    document.getElementById("username").innerHTML=username;
    document.getElementById("password").innerHTML=password;
})