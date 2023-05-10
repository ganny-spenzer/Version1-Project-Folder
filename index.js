function valid(){
     var firstname = document.getElementById("regfname").value;
     var lastname = document.getElementById("reglname").value;
     var phoneno = document.getElementById("regphn").value;
     var enterPassword = document.getElementById("regpass").value;
     var confirmpassword = document.getElementById("regconpas").value;
     var alphavalidate = /^[A-Za-z]+$/;
     // var phonevalidate = /^[6-9]{1}[0-9]{9}+$/;
     if (firstname.match(alphavalidate)) {
     }
     else {
         alert("Enter Valid Firstname that contains only alphabets");
         return false;
     }

     if (lastname.match(alphavalidate)) {
     }
     else {
         alert("Enter Valid Lastname that contains only alphabets");
         return false;
     }
     // if (!regphoneno.match(phonevalidate)) {
     //     alert("Invalid Phone Number.Enter Valid One");
     //     return false;
     // }
     if (enterPassword.length < 6 || enterPassword > 10) {
         alert("Enter avalid password with a range of Greater than 6 and smaller than 10");
         return false;

     }
     if (confirmpassword != enterPassword) {
         alert("Not Matched");
         return false;
     }
     return alert('success');
 }
