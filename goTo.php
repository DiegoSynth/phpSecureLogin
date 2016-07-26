<?php
  $goTo = $_POST["goTo"];
  $user = new User();

  if(session_status() != PHP_SESSION_ACTIVE))
  {
    $goTo = "error.php";
  }
  else
  {
    $user = UserManager::getFromSession();
    if($user.getUserId == -1)
    {
	    $goTo = "error.php";
    }
  }
  
  header("Location: " . $goTo);
?>