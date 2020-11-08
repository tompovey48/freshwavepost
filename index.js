// const toggle = document.querySelector("toggle");
// const menu = document.querySelector("menu");

// function toggleMenu(){

// if (menu.classList.contains("active")) {

//     menu.classList.remove("active");

//     toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";

// } else {
//     menu.classList.add("active");

//     toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
// }
// }

// toggle.addEventListener("click", toggleMenu, false);




$(".toggle").click(function(){

        $(".menu").toggleClass("active");

        let classList = ($(".menu").attr("class"));

        if (classList.includes("active")) {
            $(".toggle").html(`<a href="#"><i class="fas fa-times-circle"></i></a>`);
        } else {
            $(".toggle").html(`<a href="#"><i class="fas fa-bars"></i></a>`);

        }           
        
        
        
});

