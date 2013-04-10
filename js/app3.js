console.log("reached");
var dataset;
var DataType;
var createStatement = 'CREATE TABLE IF NOT EXISTS sneha(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, gender TEXT, address TEXT, remember TEXT )';
var insertStatement = 'INSERT INTO sneha(email, password,gender,address,remember) VALUES (?,?,?,?,?)';
var updateStatement = 'UPDATE sneha SET email = ?, password = ?,gender=?, address = ?, remember = ? WHERE id=?';
var deleteStatement = 'DELETE FROM sneha WHERE id=?';
var dropStatement = 'DROP TABLE sneha';
var selectAllStatement = 'SELECT * FROM sneha';

var sortpass = 'SELECT * FROM sneha ORDER by  password ASC';
var sortpass1 = 'SELECT * FROM sneha ORDER by  password DESC';
var sortid = 'SELECT * FROM sneha ORDER by  id ASC';
var sortid1 = 'SELECT * FROM sneha ORDER by  password DESC';
var sortemail1 = 'SELECT * FROM sneha ORDER by  email ASC';
var sortemail2 = 'SELECT * FROM sneha ORDER by  email DESC';
var sortgender = 'SELECT * FROM sneha ORDER by  gender ASC';
var sortgender1 = 'SELECT * FROM sneha ORDER by  gender DESC';
var sortadd = 'SELECT * FROM sneha ORDER by  address ASC';
var sortadd1 = 'SELECT * FROM sneha ORDER by  address DESC';

var db;
var shortName = 'MyDatabase';
var version = '1.0';
var displayName = 'My Test Database Example';
var maxSizeInBytes = 65536;
db = openDatabase(shortName, version, displayName, maxSizeInBytes);

function createTable() {
    console.debug('called createTable()');
    db.transaction(function(tx) {
        tx.executeSql(createStatement, [], showRecords, handleErrors);
        console.debug('executeSql: ' + createStatement);
    });
}

function insertRecord() {
    var email = $('#email').val();
    var password = $('#password').val();
    var gender = $('input:radio[name=gender]:checked').val();
    console.log(gender);
    var address = $('#address').val();
    var remember = $('#remember').is(':checked');
    db.transaction(function(tx) {
        tx.executeSql(insertStatement, [email, password, gender, address, remember], loadAndReset, handleErrors);
    });
}

function deleteRecord(id) {
    console.debug('called deleteRecord()');
    db.transaction(function(tx) {
        tx.executeSql(deleteStatement, [id], showRecords, handleErrors);
        console.debug('executeSql: ' + deleteStatement);
        alert('Delete Sucessfully');
    });
    resetForm();
}
function save() {
    var email = $('#email').val();
    var password = $('#password').val();
    var gender = $('input:radio[name=gender]:checked').val();
    console.log(gender);
    var address = $('#address').val();
    var remember = $('#remember').is(':checked');
    db.transaction(function(tx) {
        tx.executeSql(insertStatement, [email, password, gender, address, remember], loadAndReset, handleErrors);
    });
}

function updateRecord() {
    console.debug('called updateRecord()');
    var email = $('#email').val();
    var password = $('#password').val();
    var gender = $('input:radio[name=gender]').val();
    console.log(gender);
    var address = $('#address').val();
    var remember = $('#remember').is(':checked');
    /*    var remember = $('#remember').val();*/
    var id = $('#row_id').data('id');
    console.log(id);
    db.transaction(function(tx) {
        tx.executeSql(updateStatement, [email, password, gender, address, remember, id], loadAndReset, handleErrors);
        console.debug('executeSql: ' + updateStatement);
    });
}

function dropTable() {
    console.debug('called dropTable()');
    db.transaction(function(tx) {
        tx.executeSql(dropStatement, [], showRecords, handleErrors);
    });

    resetForm();
    createTable();

}

function loadRecord(i) {
    console.debug('called loadRecord()');
    var item = dataset.item(i);
    $('#email').val(item.email);
    $('#password').val(item['password']);
    var gender = $('input:radio[name=gender]').val();
    $('#address').val(item['address']);
    $('#remember').val(item['remember']);
    $('#row_id').data('id', item['id']);
}

function resetForm() {
    $('#email').val('');
    $('#password').val('');
    $('input:radio[name=gender]').val('');
    $('#address').val('');
    $('#remember').val('');
    $('#id').val('');
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
    console.debug('called showRecords()');

    db.transaction(function(transaction) {
        transaction.executeSql(selectAllStatement, [], renderRecords, handleErrors);
    });
}

function mySorte(flag) {
    console.debug('called mySorte()');

    var stmt = flag ? sortemail1 : sortemail2;
    console.log(stmt);
    db.transaction(function(transaction) {
        transaction.executeSql(stmt, [], renderRecords, handleErrors);

    });
}

function mySorti(flag) {
    console.debug('called mySorti()');

    var stmt = flag ? sortid : sortid1;
    console.log(stmt);
    db.transaction(function(transaction) {
        transaction.executeSql(stmt, [], renderRecords, handleErrors);

    });
}

function mySortp(flag) {
    console.debug('called mySortp()');

    var stmt = flag ? sortpass : sortpass1;
    console.log(stmt);
    db.transaction(function(transaction) {
        transaction.executeSql(stmt, [], renderRecords, handleErrors);

    });
}

function mySorta(flag) {
    console.debug('called mySorta()');

    var stmt = flag ? sortadd : sortadd1;
    console.log(stmt);
    db.transaction(function(transaction) {
        transaction.executeSql(stmt, [], renderRecords, handleErrors);

    });
}

function mySortg(flag) {
    console.debug('called mySort()');

    var stmt = flag ? sortgender : sortgender1;
    console.log(stmt);
    db.transaction(function(transaction) {
        transaction.executeSql(stmt, [], renderRecords, handleErrors);

    });
}

function renderRecords(transaction, results) {
    console.debug('called renderRecords()');
    html = '';
    $('#results').html('');
    dataset = results.rows;
    var html;
    if (dataset.length > 0) {
        html = html + '<br/><br/>';

        html = html + '<table  id = "tblData" class = "table table-bordered table-striped">';
        html = html + '  <caption>Records added</caption>';
        html = html + '  <thead>';
        html = html + '    <tr>';
        html = html + '      <th class="span1"  id ="myid">ID<i class ="icon-chevron-up icon-blue"  onclick="mySorti(true)"></i><i class ="icon-chevron-down icon-blue"  onclick="mySorti(false)"></i></td>';

        html = html + '<th class ="span1" id ="myeamil">email<i class= "icon-chevron-up icon-black" onclick="mySorte(true)"></i><i class= "icon-chevron-down icon-black" onclick="mySorte(false)"></i></td>';
        html = html + '           <th class ="span1" scope ="col" id ="mypass">Password<i class= "icon-chevron-up icon-black" onclick="mySortp(true)" ></i><i class= "icon-chevron-down icon-black"  onclick="mySortp(false)"></i></td>';
        html = html + '          <th class ="span1" scope="col" id ="mygender">gender<i class= "icon-chevron-up icon-black"  onclick="mySortg(true)"></i><i class= "icon-chevron-down icon-black"  onclick="mySortg(false)"></i></td>';
        html = html + '          <th class ="span1" scope ="col" id ="myadd">address<i class= "icon-chevron-up icon-black"  onclick="mySorta(true)"></i><i class= "icon-chevron-down icon-black" onclick="mySorta(false)"></i></td>';
        html = html + '          <th class ="span1" scope ="col" id="myrem">remember</td>';
        html = html + '          <th class="span1" scope ="col" >Actions</td>';
        html = html + '        </tr>';
        html = html + '  </thead>';

        html = html + '  <tbody>';

        for (var i = 0, item = null; i < dataset.length; i++) {
            item = dataset.item(i);

            html = html + '    <tr>';
            html = html + '      <td>' + item['id'] + '</td>';
            html = html + '      <td>' + item['email'] + '</td>';
            html = html + '      <td>' + item['password'] + '</td>';
            html = html + '      <td>' + item['gender'] + '</td>';

            html = html + '      <td>' + item['address'] + '</td>';
            html = html + '      <td>' + item['remember'] + '</td>';
            html = html + '      <td>';
            html = html + '        <button type="button" class="btn btn-primary btn-mini" onClick="loadRecord(' + i + ');">edit</button>';
            html = html + '        <button type"button" class="btn btn-danger btn-mini" onClick="deleteRecord(' + item['id'] + ');">delete</button>';
            html = html + '      </td>';
            html = html + '    </tr>';
        }

        html = html + '  </tbody>';
        html = html + '</table>';

        $('#results').append(html);
    }
}

function searchitem() {
    $('#search').keyup(function(e) {
        /*
        if (e.target.value.length == 0) {
                    showRecords();
                }*/
        
        var searchText = $(this).val();
        var searchText = $.trim(searchText);
        var table = $('#tblData');
        table.find('tr').each(function(index, row) {
            var allCells = $(this).find('td');
            if (allCells.length > 0) {
                var found = false;
                var that = this;
                allCells.each(function(index, td) {
                    var regExp = new RegExp(searchText, 'i');
                    if (regExp.test($(td).text())) {
                        found = true;
                        return false;
                    }
                });
                if (found == true) {
                   
                    // $(this).css('background-color', 'red').show();
                    $(that).find('td').css('background-color', 'yellow');
                         } else {
                    $(row).hide();
                    alert("no match");
                    return false;
                }
            }

        });
    });
}


$(document).ready(function() {
    createTable();
    searchitem();
});

