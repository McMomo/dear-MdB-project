<?php
if (isset($_POST['mail'])) {

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.";
        echo $error;
        echo "Please go back and fix these errors.";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['reason']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['text'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }
    
    $name = $_POST['name']; // required
    $reason = $_POST['reason']; // required
    $email = $_POST['mail']; // required
    $text = $_POST['text']; // required
    
    if ($reason == 'brief'){
        if (!isset($_POST['hometown']) ){
            problem('We are sorry, but there appears to be a problem with the form you submitted.');
        } else {
            $hometown = $_POST['hometown']
        }
    }

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.';
    }

    $string_exp = "/^[A-Za-z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.';
    }

    if ($reason == "brief"){
        if (!preg_match($string_exp, $hometown)) {
            $error_message .= 'The Hometown you entered do not appear to be valid.';
        }
    }

    //if (strlen($error_message)>0){
    //       problem($error_message);
    //  }

    $email_to = ($reason == "brief"? "brief@stoppa49.org": "info@stoppa49.org");
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
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    Thank you for contacting us. We will be in touch with you very soon.

<?php
}
?>