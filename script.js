//your JS code here. If required.
//your JS code here. If required.
window.onload = function() {
    // check if there are saved details
    if(localStorage.getItem('username') && localStorage.getItem('password')) {
        // show button to login as existing user
        var btn = document.getElementById('existing');
        btn.style.display = "block";
        btn.onclick = function() {
            alert('Logged in as ' + localStorage.getItem('username'));
        };
        // document.getElementById('form').appendChild(btn);
    }
};

function submitForm() {
    // get form data
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('checkbox').checked;

    // save details to localstorage if checkbox is checked
    if(remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // remove saved details from localstorage if checkbox is unchecked
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // show alert with username
    alert('Logged in as ' + username);
}