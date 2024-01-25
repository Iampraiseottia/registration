<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = $_POST["name"];
        $username = $_POST["username"];
        $email = $_POST["email"];
        $country = $_POST["country"];
        $password = $_POST["password"];
        $confirmPassword = $_POST["confirm_password"];

        // Display form details
        echo "<h2>Congratulation!!! Welcome here is your details</h2>";
        echo "<p><strong>Name:</strong> " . $name . "</p>";
        echo "<p><strong>Username:</strong> " . $username . "</p>";
        echo "<p><strong>Email:</strong> " . $email . "</p>";
        echo "<p><strong>Country:</strong> " . $country . "</p>";

    }
?>