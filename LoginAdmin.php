<?php
  require_once 'UserManager.php';
  require_once 'User.php';
  
  class LoginAdmin
	{
	
		public static function loginCheck($user)
		{
		  $result = "";
      $dbUser = UserManager::getUser($user);
      
      if($dbUser->getUserId() == -1)
      {
        $result =  array("status" => -4, "msg" => "Database connection error!");
      }
      else
      {
			  if($dbUser->getUserId() == -2)
        {
          $result = array("status" => -5, "msg" => "User does not exists!");  
        }
        else
        {
          if($dbUser->getUserId() == -3)
          {
            $result = array("status" => -6, "msg" => "Wrong password for the specified user!");
          }
          else
          {
            $result = array("status" => 0, "msg" => "User authenticated", "userId"=> $user->getUserId());
          }
        }
			}
			return($result);
		}
    
    public static function storeInSession($user)
    {
      $_SESSION["userId"] = $user->getUserId();
    }
	}
?>