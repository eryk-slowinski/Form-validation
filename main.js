function submitForm(event) {
    event.preventDefault();
    const name = handleName();
    const email = handleEmail();
    const password = handlePassword();
    const checkbox = handleCheckbox();

    const registrationConfirmDiv = document.querySelector('.confirmation');
    if (name && email && password && checkbox) {
        registrationConfirmDiv.classList.add('email-sent');
        registrationConfirmDiv.textContent = 'We have sent you an email to activate your account';
    }
}

function handleName() {
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const wrongName = document.querySelector('.wrong-name');

    if (firstName.value.length >= 4 && lastName.value.length >= 4) {
        operateClasses(true, firstName, lastName);
        wrongName.textContent = '';
        return true;
    } else {
        wrongName.textContent = 'First and last name has to be at least 4 characters';
        operateClasses(false, firstName, lastName);
        return false;
    }
}

function handleEmail() {
    const email = document.querySelector('.email');
    const wrongEmail = document.querySelector('.wrong-email');
    const emailExpression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailExpression.test(email.value) === false) {
        email.classList.add('require');
        wrongEmail.textContent = 'Please enter valid email';
        return false;
    } else {
        email.classList.remove('require');
        wrongEmail.textContent = '';
        return true;
    }
}

function handlePassword() {
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    const wrongpassword = document.querySelector('.wrong-password');
    const passwordExpression = /^(?=.*[A-Z])/;

    if (passwordExpression.test(password.value) === false) {
        operateClasses(false, password, confirmPassword);
        wrongpassword.textContent = 'Password must contain at least 1 uppercase alphabetical character'
        return false;
    } else if (password.value.length < 8) {
        operateClasses(false, password, confirmPassword);
        wrongpassword.textContent = 'Password must contain at least 8 characters';
        return false;
    } else if (password.value !== confirmPassword.value) {
        operateClasses(false, password, confirmPassword);
        wrongpassword.textContent = 'Passwords are not equal';
        return false;
    } else {
        operateClasses(true, password, confirmPassword);
        wrongpassword.textContent = '';
        return true;
    }
}

function handleCheckbox() {
    const checkBox = document.querySelector('#accept');
    const acceptTerms = document.querySelector('.accept-terms');

    if (checkBox.checked) {
        acceptTerms.textContent = '';
        return true;
    } else {
        acceptTerms.textContent = 'You must accept the Terms of Use & Privacy Policy';
        return false;
    }
}

function operateClasses(bool, element1, element2) {
    if (bool) {
        element1.classList.remove('require');
        element2.classList.remove('require');
    } else {
        element1.classList.add('require');
        element2.classList.add('require');
    }
}

document.querySelector('.register-btn').addEventListener('click', submitForm);