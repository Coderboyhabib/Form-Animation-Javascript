function form() {
    const arrow = document.querySelectorAll('.fa-arrow-down');
    arrow.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && ValidateEmail(input)) {
                nextSlide(parent, nextForm);
            }
        });
    });
};

function validateUser(user) {
    if (user.value.length < 6) {
        error('rgb(189,87,87)');

    } else {
        error('rgb(87, 189, 130)');
        return true;
    };
};

function ValidateEmail(email) {
    if (validation.test(email.value)) {
        return true;
        error('rgb(189,87,87)');
    } else {
        error('rgb(189,87,87)');
    };
};

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
};

function error(color) {
    document.body.style.background = color;
};

form();