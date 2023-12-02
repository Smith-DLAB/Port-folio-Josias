<?php 

    if ( isset($_POST["submit_form"]) ) {
 
        $user_name = $_POST["name_user"] ;
        $email_user = $_POST["email_user"] ;
        $subject_user = $_POST["subject_user"] ;
        $message_user = $_POST["message_user"] ;

        mail("amirbabio43@gmail.com", $subject_user, $message_user );

    }

?>