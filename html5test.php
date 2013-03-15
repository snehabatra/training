<!DOCTYPE html>
<html>
<body>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">

<script>

$(function() {
	$("#addform").submit(function() {
		var firstName = $(this).val();
	});	
});

var db = null;
function html5_storage_support() {
  try {
    return 'localStorage' in window && window['localStorage'] == null;
  } catch (e) {
    return false;
  }
}
//CHECK TO SEE IF THE BROWSER IS COMPATIBLE 
if (!html5_storage_support) {
  alert("This Might Be a Good Time to Upgrade Your Browser or Turn On Jeavascript");
} else {
  
	//OPEN AND OR CREATE THE DATABASE ON THE USERS MACHINE
	db = window.openDatabase("MyContacts", "0.1", "My Personal Contacts", 100000);
  
	function storeMyContact(id) {
		console.log(id);
		var fullname	= document.getElementById('fullname').innerHTML;
		var phone		= document.getElementById('phone').innerHTML;
		var email		= document.getElementById('email').innerHTML;
		localStorage.setItem('mClick And Enter An Email AddresscFull',fullname);
		localStorage.setItem('mcPhone',phone);
		localStorage.setItem('mcEmail',email);
	}
  //GET STORED VALUES FROM KEYS TO DEFINE JAVASCRIPT VALUES OR DEFINE IF THEY DO NOT EXIST
  function getMyContact() {
    if ( localStorage.getItem('mcFull')) {
      var fullname	= localStorage.getItem('mcFull');
      var phone		= localStorage.getItem('mcPhone');
      var email		= localStorage.getItem('mcEmail');
    }
    else {
      var fullname	= 'Click And Enter A Name';
      var phone		= 'Click And Enter A Phone Number';
      var email		= 'Click And Enter An Email Address';
    }
    document.getElementById('fullname').innerHTML = fullname;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('email').innerHTML = email;
  }

  function clearLocal() {click
    clear: localStorage.clear(); 
    return false;
  }
}


function display()
{
	alert("your name is");
}
</script>
<div id="myContacts">
  <div>N: <span id="fullname" contenteditable="true" onkeyup="storeMyContact(this.id)"></span></div>
  <div>P: <span id="phone" contenteditable="true" onkeyup="storeMyContact(this.id)"></span></div>
  <div>E: <span id="email" contenteditable="true" onkeyup="storeMyContact(this.id)"></span></div>
  <div><a onclick="clearLocal(); getMyContact();" href="javascript:void(0);">Clear All Of My Data</a></div>

</div>
<script>
  getMyContact();
</script>
    
</head>
<button id= "myContacts" onclick="display()" >click</button>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="./bootstrap/js/bootstrap.min.js"></script>
</body>
</html>