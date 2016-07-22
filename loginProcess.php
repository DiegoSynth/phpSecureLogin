<?php
  require_once 'LoginAdmin.php';

	$loginAdmin = new LoginAdmin();

  if($_SERVER['REQUEST_METHOD'] == "POST")
	{
    $messageRequest = json_decode(file_get_contents('php://input'), true);
    $messageResponse = $loginAdmin->loginCheck($messageRequest['username'], $messageRequest['password']);
  }
	else
	{
    $messageResponse = array("status" => -1, "msg" => "Request method not accepted only POST messages are accepted!");
  }

  /* Output header */
  header('Content-type: application/json');
  echo json_encode($messageResponse);
?>