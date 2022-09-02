const forms=document.querySelector(".forms")
 pwShowHide=document.querySelectorAll(".eye-icon"),
 links=document.querySelectorAll(".link");

psShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",()=>
    {
        let pwFields=eyeIcon.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if(password.type==="password")
            {
                password.type="text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type="text";
                eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})

/* <i class="fa-solid fa-eye"></i> */
links.forEach(link =>{
    link.addEventListener("click",e =>
    {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})