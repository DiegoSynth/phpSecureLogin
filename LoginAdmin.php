<?php
    require_once 'config.php';

	class LoginAdmin
	{
	
		public function loginCheck($username, $password)
		{
			$checkResult ="";

			//create Database connection
			$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
			if ($mysqli->connect_error)
			{
				$checkResult = array("status" => -4, "msg" => "Database connection error!");
			}
			else
			{
      echo $username
				$queryUserCheck = "SELECT id, username, password FROM members WHERE username = ? LIMIT 1";
				$stmt = $mysqli->prepare($queryUserCheck);
				$stmt->bind_param('s', $username);
				$stmt->execute();
				$stmt->store_result();
				$stmt->bind_result($db_userId, $db_username, $db_password);
				$stmt->fetch();

				if ($stmt->num_rows == 1)
				{
					if($password == $db_password)
					{
						$checkResult = array("status" => 0, "msg" => "User authenticated", "userId"=> $db_userid );
					}
					else
					{
						$checkResult = array("status" => -6, "msg" => "Wrong password for the specified user!");
					}
				}
				else
				{
					$checkResult = array("status" => -5, "msg" => "User does not exists!");
				}
			}
			return($checkResult);
		}
	}
?>