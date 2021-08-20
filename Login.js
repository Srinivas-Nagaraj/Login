function data(){
    const username=document.getElementById("exampleInputUsername").value;
    const password=document.getElementById("exampleInputPassword1").value;
    localStorage.setItem("USERNAME",username);
    localStorage.setItem("PASSWORD",password);
    return;


}
