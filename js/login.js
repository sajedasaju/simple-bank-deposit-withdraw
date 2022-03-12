document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    //console.log(userEmail);

    //get user password
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;
    //console.log(userPassword)

    //check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = "banking.html";
    }
})

