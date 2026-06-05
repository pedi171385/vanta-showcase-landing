
console.log(document.querySelector('.hamburger'));
console.log(document.querySelector('.nav-links'));


const slider = document.querySelector('.portfolio-slider');

const leftZone =
document.querySelector('.left-zone');

const rightZone =
document.querySelector('.right-zone');

leftZone.addEventListener('click',()=>{

    slider.scrollBy({
        left:-350,
        behavior:'smooth'
    });

});

rightZone.addEventListener('click',()=>{

    slider.scrollBy({
        left:350,
        behavior:'smooth'
    });

});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

});

document.querySelectorAll('.nav-links a')
.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');
        hamburger.classList.remove('active');

    });

});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }else{

            entry.target.classList.remove('active');

        }

    });

},{threshold:0.15});

reveals.forEach(item=>{
    observer.observe(item);
});

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 60;

            const updateCounter = () => {

                current += increment;

                if(current < target){

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target + '+';

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{
    counterObserver.observe(counter);
});

emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e){

    e.preventDefault();

    emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        this
    )

    .then(() => {

        status.textContent = "Message sent successfully.";

        form.reset();

    })

    .catch(() => {

        status.textContent = "Failed to send message.";

    });

});