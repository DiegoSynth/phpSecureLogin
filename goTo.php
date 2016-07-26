<?php
  session_start();
  require_once 'User.php';
  require_once 'UserManager.php';
  
  $goTo = $_POST["hGoTo"];
  $user = new User();

  if(session_status() != PHP_SESSION_ACTIVE)
  {
    $goTo = "error.html";
  }
  else
  {
    $user = UserManager::getFromSession();
    if($user->getUserId() == -1)
    {
	    $goTo = "error.html";
    }
  }
  
  header("Location: " . $goTo);
  exit();
?>