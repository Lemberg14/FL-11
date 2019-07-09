let email = prompt('your email', '');
let password;
let oldpassword;
let newpassword;
let newpassword1;
const login1 = 6;
const password1 = 5;

if(email) {
    console.log('true');
} else {
    alert('canceled');
}

if( email.length < login1 ) {
    alert(' I dont know any emails having name length less than 6 symbols');
}
if( email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('your password', '');
} else {
    alert('I don’t know you');
}
if(password) {
    console.log('true');
} else {
    alert('canceled');
}

if ( email === 'user@gmail.com') {
    if(password === 'UserPass') {
        let change = confirm('change password?');
        if( change === false ) {
            alert('You have failed the change');
        }
        if( change === true) {
            oldpassword = prompt('enter your old password', '');
        } else {
            alert('wrong old password');
        }
        if( oldpassword === 'UserPass' ) {
            newpassword = prompt('your new password', '');
            if( newpassword.length < password1) {
                alert('It’s too short password. Sorry.');
            } else {
                newpassword1 = prompt('your new password again', '');
                if( newpassword === newpassword1) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');          
                }
            }
        } else {
            alert('You wrote the wrong password');
        }
    } else {
        alert('You wrote the wrong password');
    }
} else if ( email === 'admin@gmail.com' ) {
    if(password === 'UserPass') {
        let change = confirm('change password?');
        if( change === false ) {
            alert('You have failed the change');
        }
        if( change === true) {
            oldpassword = prompt('enter your old password', '');
        } else {
            alert('wrong old password');
        }
        if( oldpassword === 'UserPass' ) {
            newpassword = prompt('your new password', '');
            if( newpassword.length < password1) {
                alert('It’s too short password. Sorry.');
            } else {
                newpassword1 = prompt('your new password again', '');
                if( newpassword === newpassword1) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');          
                }
            }
        } else {
            alert('You wrote the wrong password');
        }
    } else {
        alert('You wrote the wrong password');
    }
} else {
    alert('Wrong password');
}