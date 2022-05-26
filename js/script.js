const menubarrasss = document.getElementById("menubarrasss");
const menuprincepavisible2 = document.getElementById("menuprincepavisible2");

menubarrasss.addEventListener("click", function()){
    if(menuprincepavisible2.classList.contains("menuprincipal")){
        menuprincepavisible2.classList.add("menuprincipal");
        menuprincepavisible2.classList.remove("menuprincipal");
    }else{
        menuprincepavisible2.classList.remove("menuprincepavisible2");
        menuprincepavisible2.classList.add("menuprincipal");
    }
}