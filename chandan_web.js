<html>
<head>
    <title>Email Validation</title>

    <script>
        function validateForm() {
            var email = document.getElementById("email").value;
            var c = document.getElementById("n3").value;

            // Regular Expression for basic email format
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "" || c === "") {
                alert("Email and Password cannot be empty");
                return false;
            }
            else if (!emailPattern.test(email)) {
                alert("Please enter a valid Email ID");
                return false;
            }
            else {
                alert("DONE");
                return true;
            }
        }
    </script>

</head>
<body>

    <form onsubmit="return validateForm()" action="1stwebsite.html">
        Email ID: <input type="text" id="email"><br><br>
        Password: <input type="password" id="n3"><br><br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>

