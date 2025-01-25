<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form input
    $answer = htmlspecialchars($_POST['answer']);
    
    // Email settings
    $to = "ethang27000@gmail.com"; // Replace with your email
    $subject = "New Visitor Answer";
    $message = "A visitor submitted the following answer: \n\n" . $answer;
    $headers = "From: no-reply@yourwebsite.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "There was an error sending your answer. Please try again.";
    }
}
?>