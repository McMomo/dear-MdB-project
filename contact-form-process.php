<?php
   
    $name = $_POST['name']; // required
    $reason = $_POST['reason']; // required
    $email = $_POST['mail']; // required
    $text = $_POST['text']; // required
    
    if ($reason == 'brief'){
            $hometown = $_POST['hometown'];
    }

    $email_to = ($reason == "brief"? "brief@stoppa49.org": ($reason == "petition"? "petition@stoppa49.org" : "info@stoppa49.org"));
    $email_subject = $reason . " - Anfrage von Website";

    $email_message = "Es folgen die Nutzereingaben.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Grund: " . clean_string($reason) . "\n";
    if ($reason == 'brief'){
        $email_message .= "Wohnort: " . clean_string($hometown) . "\n";
    }
    $email_message .= "Nachricht: " . clean_string($text) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n";
    if (mail($email_to, $email_subject, $email_message, $headers)){
        echo "SUCCES";
    } else {
        echo "ERROR";
    }
?>

    <!-- include your success message below -->

    Thank you for contacting us. We will be in touch with you very soon.

<?php
?>