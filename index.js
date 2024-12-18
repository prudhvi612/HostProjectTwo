document.addEventListener("DOMContentLoaded", function () {

    const radioButtons = document.querySelectorAll('input[name="fill"]');
    const emailInput = document.querySelector('.email input');
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter Phone Number';
    phoneInput.classList.add('input');
    phoneInput.style.display = 'none'; 

    const form = document.querySelector('.email');
    form.appendChild(phoneInput);

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.id === 'email') {
                emailInput.style.display = 'block';
                phoneInput.style.display = 'none';
            } else {
                phoneInput.style.display = 'block';
                emailInput.style.display = 'none';
            }
        });
    });

 
    const emailSubmitButton = document.querySelector('.email button');
    emailSubmitButton.addEventListener('click', function (event) {
        const emailValue = emailInput.value.trim();
        if (emailValue && validateEmail(emailValue)) {
            alert('App link sent to your email!');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    
    const phoneSubmitButton = document.querySelector('.email button');
    phoneSubmitButton.addEventListener('click', function (event) {
        const phoneValue = phoneInput.value.trim();
        if (phoneValue && validatePhone(phoneValue)) {
            alert('App link sent to your phone!');
        } else {
            alert('Please enter a valid phone number.');
        }
    });

     
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/; 
        return re.test(phone);
    }

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

