let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');
let accountForm = document.querySelector('.account-form');
let load_moreBtn = document.querySelector('.load-more .btn');
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}

loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
}

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    slidesToScroll: 1,
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
    },
});

accordion.forEach((acco) => {
    acco.onclick = () => {
        accordion.forEach((dion) => dion.classList.remove('active'));
        acco.classList.toggle('active');
    };
})

load_moreBtn.onclick = () => {
    document.querySelectorAll('.courses .box-container .hide').forEach((show) => {
        show.style.display = 'block';
    })
    load_moreBtn.style.display = 'none';
}