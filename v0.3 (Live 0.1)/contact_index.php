<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
 // $email_from = 'admin@freekishopping.in';
  $email_subject = "New qyery from Mediascopy.com";
  $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".

  $to = "vivek@mediascopy.com";
$headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");

 ?>
