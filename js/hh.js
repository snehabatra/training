var User = {
  deleteStatement: '',
  create: function(data) {
      DB.exec(createStatement, data);
  }  
};

var DB = {
   db: '',
   init: function() {
       db = '';
   },
   exec: function(stmt, data) {
       db.execute
   }
}

var Book = {
    create: function() {
      }   
}

 


            console.log();
            var dataset;
            var DataType;
            var selectAllStatement = "SELECT * FROM data";
            var insertStatement = "INSERT INTO data(email, password,op1,op2,address,remember) VALUES (?,?,?,?,?,?)";
            var updateStatement = "UPDATE data SET email = ?, password = ?, op1=?, op2=?, address=?, remember=? WHERE id=?";
            var deleteStatement = "DELETE FROM data WHERE id=?";
            var dropStatement = "DROP TABLE data";

            function initDatabase() {
            console.debug('called initDatabase()');

            try {
            if (!window.openDatabase) {
            alert('not supported');
            } else {
            var shortName = 'MyDatabase';
            var version = '1.0';
            var displayName = 'My Test Database Example';
            var maxSizeInBytes = 65536;
            db = openDatabase(shortName, version, displayName, maxSizeInBytes);

            createTable();
            }
            } catch(e) {
            if (e == 2) {
            alert('Invalid database version');
            } else {
            alert('Unknown error ' + e);
            }
            return;
            }
            }
            function createTable() {
            console.debug('called createTable()');

            var sql = "CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, op1 TEXT , op2 TEXT , address TEXT, remember TEXT)";

            db.transaction(function(tx) {
            tx.executeSql(sql, [], showRecords, handleErrors);
            console.debug('executeSql: ' + sql);
            });
            }


    function insertRecord() {
        var email = $("#email").val();
        var password = $("#password").val();
        var op1 = $("#op1").val();
        var op2 = $("#op2").val();
        var address = $("#address").val();
        var remember = $("#remember").val();
        db.transaction(function(tx) {
            tx.executeSql(insertStatement, [email, password, op1, op2, address, remember], loadAndReset, handleErrors);
        });
    }


            function deleteRecord(id) {
            console.debug('called deleteRecord()');

            db.transaction(function(tx) {
            tx.executeSql(deleteStatement, [id], showRecords, handleErrors);
            console.debug('executeSql: ' + deleteStatement);
            alert('Delete Sucessfully');
            });
            function updateRecord() {
            var email = $("#email").val();
            var password = $("#password").val();
            var op1 = $("#op1").val();
            var op2 = $("#op2").val();
            var address = $("#address").val();
            var remember = $("#remember").val();
            var useridupdate = $("#id").val();

            db.transaction(function(tx) {
            tx.executeSql(updateStatement, [email, password, op1, op2, address, remember, Number(useridupdate)], loadAndReset(), handleErrors());
            });
            }

            function dropTable() {
            console.debug('called dropTable()');
            db.transaction(function(tx) {
            tx.executeSql(dropStatement, [], showRecords, handleErrors);
            });

            resetForm();
            initDatabase();
            }

            function loadRecord(i) {
            var item = dataset.item(i);

            $("#email").val(item['email']);
            $("#password").val(item['password']);
            $("#op1").val(item['op1']);
            $("#op2").val(item['op2']);
            $("#address").val(item['address']);
            $("#remember").val(item['remember']);
            $("#id").val(item['id']);
            }

            function resetForm() {
            $("#email").val("");
            $("#password").val("");
            $("#op1").val("");
            $("#op2").val("");
            $("#address").val("");
            $("#remember").val("");
            $("#id").val("");
            }

            function loadAndReset() {
            resetForm();
            showRecords();
            }

            function handleErrors(transaction, error) {
            console.debug('called handleErrors()');
            console.error('error ' + error.message);
            alert(error.message);
            return true;
            }

            function showRecords() {
            $("#res").html('')

            db.transaction(function(tx) {

            tx.executeSql(selectAllStatement, [], function(tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

            item = dataset.item(i);
            var linkeditdelete = '<li>' + item['username'] + ' , ' + item['useremail'] + '    ' + '<a href="#" onclick="loadRecord(' + i + ');">edit</a>' + '    ' + '<a href="#" onclick="deleteRecord(' + item['id'] + ');">delete</a></li>';

            $("s#res").append(linkeditdelete);
            }
            });
            });
            }

            $(document).ready(function () {
            initDatabase();
            
            $("#submitBut").click(insertRecord);
                        $("#btnUp").click(updateRecord);
                        $("#btnRe").click(resetForm);
                        $("#btnDr").click(dropTable);
                        });
            <script src="js/model.js"></script>        
