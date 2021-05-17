<?php

   //Check for subject
   $subject = "Anfrage von Website";

    $name = $_POST['name']; // required
    $email_user = $_POST['mail']; // required
    $text = $_POST['text']; // required

    $email_stoppa49 = "brief@stoppa49.org"; //default mail for all User Kontakt

    $email_subject = "StoppA49 - " . $subject;

    $email_message = "Es folgen die Nutzereingaben.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email_user) . "\n";
    $email_message .= "Nachricht: " . clean_string($text) . "\n";

    $response = false;
    // create email headers
    $headers = 'From: ' . $email_user . "\n"
            . 'MIME-Version: 1.0\n'
            . 'Content-type: text/html; charset=iso-8859-1\n';

    $headers_auto_answer = "From: " . $email_stoppa49 . "\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: text/html; charset=UTF-8";

    $email_message_auto_answer = file_get_contents("$_SERVER[DOCUMENT_ROOT]" . "/Templates/contactAutoAnswer.html");

    // Auto Answer to User
    if (mail($email_user, $email_subject, $email_message_auto_answer, $headers_auto_answer)){

        // Mail to our inbox
        if (mail($email_stoppa49, $email_subject, $email_message, $headers)){
            $response = true;
        } else {
            $response = false;
        }
    } else {
        $response = false;
    }

?>
<html>
<head>

    <meta charset='utf-8'>
	<meta lang='de'>

<style>

body {

    display: grid;


    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    font-weight: 300;

    background-color:#3c9c3c;
    color: white;
    padding: 5%;
}

.content {
    text-align: center;
}

h1 {
    display: none;
}

h2 {
    text-transform: uppercase;
    font-weight: 300;
}

img {
    height: 2em;
    transition: transform 0.5s;
}

img:hover{
    transform: scale(1.5);
}

</style>
</head>
<body>
    <div class="topnav">
        <a href="./" title="Zurück zu StoppA49"><img src="./Images/arrow-left.svg" alt="Pfeil nach Links"/></a>
    </div>

    <div class="content">
        <?php if($response) : ?>
            <h1>Die E-Mail wurde erfolgreich versendet!</h1>
            <h2>
                Danke für dein Interesse. Falls dich keine Bestätigungsmail erreicht schreibe uns doch einfach eine E-Mail an <a href="mailto:brief@stoppa49.org" title="Alternativer Kontakt">brief@stoppa49.org</a> mit deinem Anliegen.
            </h2>
            <p>
               Über den Pfeil oben kommst du zurück auf unsere Seite.
            </p>
        <?php else : ?>
            <h1>Fehler beim Versenden der E-Mail</h1>
            <h2>
                Danke für dein Interesse. Leider ist beim Versenden der E-Mail ein Fehler aufgetreten.
            </h2>
            <p>Bitte versuche es noch einmal oder schreibe uns eine Mail unter <a href="mailto:brief@stoppa49.org" title="Alternativer Kontakt">brief@stoppa49.org</a>. <br/>Über den Pfeil oben kommst du zurück auf unsere Seite.</p>
        <?php endif; ?>

        <h2>#dannibleibt</h2>
    </div>

</body>
</html>


<?php
?>
