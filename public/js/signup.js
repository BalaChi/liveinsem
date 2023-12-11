document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupform');
   
    var s_email = document.getElementById('signupEmail');
    var s_password = document.getElementById('signPassword');
   
   

    // Add event listener to the form's submit event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const signup_email_Input = s_email.value;
        const sign_password_Input = s_password.value;

        // data for login and signup
        const data = {
            email: signup_email_Input,
            password: sign_password_Input
        };


        // post request for signup
        axios.post('/signup', data)
            .then(response => {
                const { redirectUrl } = response.data;
                window.location.href = "/login.html";
                alert("sucessfully signed up now login to continue");
            })
            .catch(error => {
                console.error(error);

                
            });
    });
});







