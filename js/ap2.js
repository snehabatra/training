/**
 * @author Rohit Jindal
 */

			var db = openDatabase('data', '1.0', 'sign up users', 2 * 1024 * 1024);

			var createStatement = "CREATE TABLE IF NOT EXISTS data(id integer primary key autoincrement, email, password,op1,op2,address,remember)";

			var selectAllStatement = "SELECT * FROM data";
			 
			var insertStatement = "INSERT INTO data (email, password,op1,op2,address,remember) VALUES (?,?,?,?,?,?)";
			 
			var updateStatement = "UPDATE data SET email = ?, password = ?,op1=?,op2=?,address=?,remember=? WHERE id=?";
			 
			var deleteStatement = "DELETE FROM data WHERE id=?";
			 
			var dropStatement = "DROP TABLE data";

			var db = openDatabase('data', '1.0', 'sign up users', 2 * 1024 * 1024);
			var dataset;
 

/*
			function initDatabase()
			{
			  try {
			       if (!window.openDatabase) 
			        {
			        alert('Databases are not supported in this browser.');
			        }
			       else {
			        createTable(); 
				        }
			 	    }
			 	    catch (e) {
			 
			        if (e == 2) {
			            console.log("Invalid database version.");
			 
			        } else {
			 
			            console.log("Unknown error " + e + ".");
			 
			        }
			 
			        return;
			 
			    }
			 
			}
*/
function createTable() { 

        db.transaction(function(tx) {

          tx.executeSql(createStatement, [], showRecords, onError);

        });

      }
      
			 
			function insertRecord(){ 		 
						var email1 =$("#email").val();
			var password1 = $("#password").val();
			var op1 =$("#op1").val();
			var op2 =$("#op2").val();
			var address1 = $("#address").val();
			var remember1 = $("#remember").val();

			db.transaction(function(tx) {
			tx.executeSql('INSERT INTO data(email,password,op1,op2,address,remember) VALUES (?,?,?,?,?,?)', [email1, password1, op1,op2,address1,remember1], loadAndReset, onError);

			}
			
			function deleteRecord(id)
			{var iddelete =  id.toString();
				   db.transaction(function(tx) 
        {
		tx.executeSql(deleteStatement, [id], showRecords, onError);	alert("Delete Sucessfully"); });
		    resetForm();
 			}
			
			function updateRecord()

			{
			var uemail = $("#email").val().toString();
			var upassword = $("#password").val().toString();
			var uop1 = $("#op1").val().toString();
			var uop2 =$("#op2").val().toString();
			var uaddress = $("#address").val().toString();
			var uremember = $("#remember").val().toString();
			var useridupdate = $("#id").val();

			db.transaction(function (tx) {
			tx.executeSql(updateStatement, [uemail, upassword, uop1,uop2,uaddress,uremember,Number(useridupdate)], loadAndReset, onError); });

			}
			function dropTable()
			 			{
		    db.transaction(function (tx) {
			tx.executeSql(dropStatement, [], showRecords, onError); });
			     resetForm();
			     initDatabase(); 
			}

			function loadRecord(i)
			{
			var item = dataset.item(i);
			$("#email").val((item['email']).toString());
			$("#password").val((item['password']).toString());
			$("#op1").val((item['op1']).toString());
			$("#op2").val((item['op2']).toString());
			$("#address").val((item['address']).toString());
			$("#remember").val((item['remember']).toString());
			$("#id").val((item['id']).toString());
			}

			function resetForm()
			{
			$("#email").val("");
			$("#password").val("");
			$("#op1").val("");
			$("#op2").val("");
			$("#address").val("");
			$("#remember").val("");
			$("#id").val("");
			}
			
			function loadAndReset()

			{
			resetForm();
			showRecords()

			}

			function onError(tx, error)
			{
			alert(error.message);
			}

			function showRecords() 
			{
			$("#results").html('')

			db.transaction(function (tx) {

			tx.executeSql(selectAllStatement, [], function (tx, result) {

			dataset = result.rows;

			for (var i = 0, item = null; i < dataset.length; i++) {

			item = dataset.item(i);
			var linkeditdelete = '<li>' + item['email'] + ' , ' + item['password'] +','+item['opt1']+ ', '+item[opt2] + ' , ' +item['address']+ ' , ' +item['remember']'   ' + '<a href="#" onclick="loadRecord(' + i + ');">edit</a>' + '    ' +

			'<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';

			$("#results").append(linkeditdelete);

			}

			});

			});

			}
			$(document).ready(function ()

			{

			$("body").fadeIn(2000);
			
			createTable();
			
			$("#submitButton").click(insertRecord);.

			$("#btnUpdate").click(updateRecord);

			$("#btnReset").click(resetForm);

			$("#btnDrop").click(dropTable);

			});
