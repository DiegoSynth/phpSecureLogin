<?php
  require_once 'LoginAdmin.php';
  require_once 'User.php';

	$user = new User();
  $user->setEmail($_POST['txtEmail']);
  $user->setPassword($_POST['hPassword']);
  
  $messageResponse = LoginAdmin::loginCheck($user);
  if($messageResponse["status"] == 0)
  {
    session_start();
    LoginAdmin::storeInSession($user);
    die($_SESSION["email"]);
  }
  
  /* Output header */
  header('Content-type: application/json');
  echo json_encode($messageResponse);
?>