
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginform');
    var l_email = document.getElementById('loginEmail');
    var l_password = document.getElementById('loginPassword');
   

    //Add event listener to the form's submit1 event login



    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const login_email_Input = l_email.value;
        const login_password_Input = l_password.value;





        // data for login and signup
        const data = {
            email: login_email_Input,
            password: login_password_Input
        };




        // post request for login

        axios.post('/login', data)
            .then(response => {
                console.log("Response", response)
                if (response.status == 200){
                    window.location.href = "/chennai.html";
                    
                }
              
                
            })
            .catch(error => {
                alert('An error occurred: ' + error);

              
                

            });





    });




});



// https://simonplend.com/how-to-use-fetch-to-post-form-data-as-json-to-your-api/