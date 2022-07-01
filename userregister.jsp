<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Register</title>
</head>
<body>
    <form class="box" action="<%= request.getContextPath() %>/register" method="post">
        <h1>Register</h1>
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" name="" value="Login">
    </form>
<style type="text/css">
    body{
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: #34495e;
    }
    
    .box {
      width: 400px;
      padding: 40px;
      position: absolute;
      
      /* Cách để căn giữa */
      

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #191919;
      text-align: center;
    }
    
    .box h1 {
      color: white;
      text-align: center;
      text-transform: uppercase;
      font-weight:600;
      
    }
    
    .box input[type = "text"], .box input[type = "password"] {
      border: 0;
      background: none;
      display: block;
      margin: 20px auto;
      text-align: center;
      border: 2px solid #3498db;
      padding: 10px 10px;
      width: 200px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;
    }
    
    .box input[type = "text"]:focus, .box input[type = "password"]:focus {
      width: 280px;
      border-color: #2ecc71;
    }
    
    .box input[type = "submit"] {
      border: 0;
      background: none;
      display: block;
      margin: 20px auto;
      color: white;
      padding: 10px 40px;
      outline: none;
      border-radius: 24px;
      transition: 0.5s;
      border: 2px solid #2ecc71;
    }
    
    .box input[type = "submit"]:hover {
      background: #2ecc71;
      cursor: pointer;
    }
</style>
</body>
</html>