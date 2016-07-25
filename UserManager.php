<?php
    require_once 'config.php';

	class UserManager
	{
	
		public static function getUser($user)
		{
			//create Database connection
			$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
			if ($mysqli->connect_error)
			{
				$user->setUserId(-1);
			}
			else
			{
      			$query = "SELECT id, username, password FROM members WHERE email = ? LIMIT 1";
				$stmt = $mysqli->prepare($query);
				$stmt->bind_param('s', $user->getEmail());
				$stmt->execute();
				$stmt->store_result();
				$stmt->bind_result($db_userId, $db_username, $db_password);
				$stmt->fetch();
				
				if ($stmt->num_rows == 1)
				{
					if($user->password == $db_password)
					{
						$user->setUserId($db_userId);
						$user->setUsername($db_username);
					}
					else
					{
						$user->setUserId(-3);
					}
				}
				else
				{
					$user->setUserId(-2);
				}
			}
			return($user);
		}
    
		public function storeInSession($user)
		{
    
		}
	}
?>