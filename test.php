
<!DOCTYPE html>
<html>
	<head>
<tithle>test</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">
<script>
function greet(){
    name = localStorage.getItem("name");
    if (name == null || name == "null"){
      alert("Hi, Stranger!");
      name = prompt("What is your name?");
      localStorage.setItem("name", name);
    } else {
      alert ("Hi, " + name + "!");
    } // end greet
  } // end function  



</script>
</head>
<body>
<form name="local_storage_form" method="post" action="">
 
<input type="text" name="your_name" id="your_name" value="" />
<input type="text" name="your_surname" id="your_surname" value="" />
 
<input type="submit" value="Submit" />
</form>

<script src="http://code.jquery.com/jquery.js"></script>
<script src="./bootstrap/js/bootstrap.min.js"></script>
</body>
</html>