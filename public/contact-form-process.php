<?php
   
   //Check for subject
   $possibleReasons = array('brief', 'petition', 'other');
   $subject = array();
   foreach ($possibleReasons as $reason){
       if (isset($_POST[$reason])){
           array_push($subject,$_POST[$reason]);
        }
    }
    
    $name = $_POST['name']; // required
    $email = $_POST['mail']; // required
    $text = $_POST['text']; // required
    
    if (in_array('brief', $subject)){
            $hometown = $_POST['hometown'];
    }

    $email_to = "brief@stoppa49.org"; //default mail for all User Kontakt

    $email_subject = join(" - ", $subject) . " - Anfrage von Website";

    $email_message = "Es folgen die Nutzereingaben.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    if (in_array('brief', $subject)){
        $email_message .= "Wohnort: " . clean_string($hometown) . "\n";
    }
    $email_message .= "Nachricht: " . clean_string($text) . "\n";

    $response = false;
    // create email headers
    $headers = 'From: ' . $email . "\r\n"
            . 'MIME-Version: 1.0\n'
            . 'Content-type: text/html; charset=iso-8859-1\n';
    
    ;
    if (mail($email_to, $email_subject, $email_message, $headers)){
        $response = true;
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
            <h1>Die Email wurde erfolgreich versendet!</h1>
            <h2>
                Danke für dein Interesse. Wir werden in kürze mit dir Kontakt aufnehmen.
            </h2>
            <p>
                Wir brauchen auch noch viele weitere Briefeschreiber*innen. Am besten aus ganz Deutschland, um einen direkten Bezug zu den Abgeordneten herzustellen.
                <br/>
                Kennst du noch welche?. Teile unsere Seite mit ihnen!
                <br/><br/>
                Über den Pfeil oben kommst du zurück auf unsere Seite.
            </p>
        <?php else : ?>
            <h1>Fehler beim versenden der E-Mail</h1>
            <h2>
                Danke für dein Interesse. Leider ist beim versenden der Email ein Fehler aufgetreten.
            </h2>
            <p>Bitte versuche es noch einmal oder schreibe uns eine Mail unter <a href="mailto:brief@stoppa49.org" title="Alternativer Kontakt">brief@stoppa49.org</a>. <br/>Über den Pfeil oben kommst du zurück auf unsere Seite.</p>
        <?php endif; ?>

        <h2>#dannibleibt</h2>
    </div>
 
</body>
</html> 


<?php
?>