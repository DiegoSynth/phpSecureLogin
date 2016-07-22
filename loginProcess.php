<?php
  require_once 'LoginAdmin.php';

	$loginAdmin = new LoginAdmin();

  $messageResponse = $loginAdmin->loginCheck($_POST['txtEmail'], $_POST['txtPassword']);
  
  /* Output header */
  header('Content-type: application/json');
  echo json_encode($messageResponse);
?>