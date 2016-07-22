<?php
  require_once 'LoginAdmin.php';

	$loginAdmin = new LoginAdmin();

  $messageResponse = $loginAdmin->loginCheck($_POST['txtEmail'], $_POST['hPassword']);
  
  /* Output header */
  header('Content-type: application/json');
  echo json_encode($messageResponse);
?>