const burgerMenu = document.querySelector(".burger-menu");
const Menu = document.querySelector(".menu-modal");
const crossMenu = document.querySelector(".cross-menu");

burgerMenu.addEventListener("click", function(){
    Menu.classList.remove("hidden");
});

crossMenu.addEventListener("click", function(){
    Menu.classList.add("hidden");
});



const kz = document.querySelector(".kz");
const locationKz = document.querySelector(".location");
const crossLocation = document.querySelector(".cross-location");
const locationBtn = document.querySelectorAll(".location-btn")

kz.addEventListener("click", function(){
    locationKz.classList.remove("none");
})

crossLocation.addEventListener("click", function(){
    locationKz.classList.add("none");
})

for (let i = 0; i < locationBtn.length; i++) {
    locationBtn[i].addEventListener("click", function(){
        locationKz.classList.add("none");
    });

    document.addEventListener("keydown", function(e){
        if (e.key === "Escape" && !locationKz.classList.contains("none")) {
        locationKz.classList.add("none"); 
        }
    })
}


const textLanguage = document.querySelector(".text-language");
const modalLanguage = document.querySelector(".modal-language");
const crossLanguage = document.querySelector(".cross-language");
const btnLanguage = document.querySelectorAll(".btn-language");
const btnTown = document.querySelectorAll(".btn-town");
const textCountry = document.querySelector(".text-country");

textLanguage.addEventListener("click", function(){
    modalLanguage.classList.remove("none");
})

crossLanguage.addEventListener("click", function(){
    modalLanguage.classList.add("none");
})

for (let i = 0; i < btnLanguage.length; i++) {
    btnLanguage[i].addEventListener("click", function(){
        textLanguage.textContent = btnLanguage[i].innerHTML;
        modalLanguage.classList.add("none");    
    });
    document.addEventListener("keydown", function(e){
        if (e.key === "Escape" && !modalLanguage.classList.contains("none")) {
        modalLanguage.classList.add("none"); 
        }
    });
}

for (let i = 0; i < btnTown.length; i++) {
    btnTown[i].addEventListener("click", function(){
        textCountry.textContent = btnTown[i].innerHTML;
        modalLanguage.classList.add("none");    
    });
}

const phone = document.querySelector(".phone");
const phoneNumber = document.querySelector(".phone-number");
const phoneText = document.querySelector(".phone-text");
const phoneModal = document.querySelector(".phone-modal");
const crossPhone = document.querySelector(".phone-cross");
const blockPhone = document.querySelectorAll(".block-phone");

phone.addEventListener("click", function(){
    phoneModal.classList.remove("none");
});

crossPhone.addEventListener("click", function(){
    phoneModal.classList.add("none");
    document.addEventListener("keydown", function(e){
        if (e.key === "Escape" && !phoneModal.classList.contains("none")) {
        phoneModal.classList.add("none"); 
        }
    });
})

for (let i = 0; i < phoneText.length; i++) {
    phoneText[i].addEventListener("click", function(){
        phoneNumber.textContent = phoneText[i].
        phoneModal.classList.add("none");
    })
}

const notificationModal = document.querySelector(".notification-modal");
const bell = document.querySelector(".bell");
const notificationCross = document.querySelector(".cross-notification");

bell.addEventListener("click", function(){
    notificationModal.classList.remove("none");
});

notificationCross.addEventListener("click", function(){
    notificationModal.classList.add("none");
});

document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && !notificationModal.classList.contains("none")) {
    notificationModal.classList.add("none"); 
    }
});

const cart = document.querySelector(".cart");
const cartModal = document.querySelector(".cart-modal");
const cartCross = document.querySelector(".cross-cart");
const orderCross = document.querySelector(".cross-order");
const blockOrder = document.querySelectorAll(".block-order");

cart.addEventListener("click", function(){
    cartModal.classList.remove("none");
});

cartCross.addEventListener("click", function(){
    cartModal.classList.add("none");
});

orderCross.addEventListener("click", function(){
    for (let i = 0; i < blockOrder.length; i++) {
        blockOrder[i].style.display = "none";
    }
});

document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && !cartModal.classList.contains("none")) {
    cartModal.classList.add("none"); 
    }
});