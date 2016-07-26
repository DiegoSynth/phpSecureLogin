<?php
  require_once 'LoginAdmin.php';
  require_once 'User.php';
try
{

	$user = new User();
  /*
  $user->setEmail($_POST['txtEmail']);
  $user->setPassword($_POST['hPassword']);
  */
$user->setEmail("test@example.com");
$user->setPassword("test123");

  $messageResponse = LoginAdmin::loginCheck($user);
  if($messageResponse["status"] == 0)
  {
    session_start();
    LoginAdmin::storeInSession($user);
  }
  
  /* Output header */
  header('Content-type: application/json');
  echo json_encode($messageResponse);
}
catch (Exception $e)
{
  echo($e->getMessage());
}
?>