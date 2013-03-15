<!DOCTYPE html>
<html>
	<head>
<title>test</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">
<script type="text/javascript">
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
  msg = '<p>Log message created and row inserted.</p>';
  document.querySelector('#status').innerHTML =  msg;
});

db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
   var len = results.rows.length, i;
   msg = "<p>Found rows: " + len + "</p>";
   document.querySelector('#status').innerHTML +=  msg;
   for (i = 0; i < len; i++){
     msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
     document.querySelector('#status').innerHTML +=  msg;
   }
 }, null);
});
</script>
</head>
<body>
<div id="status" name="status">Status Message</div>
</body>
</html>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="./bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
	