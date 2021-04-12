<?php

  // $name = $_POST['name'];
  // $visitor_email = $_POST['email'];
  // $message = $_POST['message'];
  //
  // $email_from = 'mrshine.noreply@gmail.com';
  // $email_subject = 'New Query';
  //
  // $email_body = "Name:  $name \n";
  //               "Email: $visitor_email.\n".
  //               "Message: $message.\n".;
  //
  // $email_to = "himanshgupta47@gmail.com";
  //
  // $headers = "From:  $email_from \r\n";
  // $headers .= "Reply-to: $visitor_email \r\n";
  //
  // mail($email_to,$email_subject,$email_body,$headers);
  //
  // header("Location: index.html");


  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_from = 'himanshgupta47@gmail.com';
  $email_subject = "New Form submission";
  $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".

  $to = "himanshgupta47@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
  header("Location: index.html");




 ?>
