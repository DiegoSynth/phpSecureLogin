<?php
	session_start();
	require_once 'User.php';
	require_once 'UserManager.php';

	$user = new User();

	if(session_status() == PHP_SESSION_ACTIVE))
	{
		$user = UserManager::getFromSession()
	}
	else
	{
		$user->setUserId(-1);
	}

	/* Output header */
	header('Content-type: application/json');
	echo json_encode($user->toJson());
	exit();
?>