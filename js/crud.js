var App = {

    dataset : 0,
    createStatement : 'CREATE TABLE IF NOT EXISTS sneha(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, gender TEXT, address TEXT, remember TEXT )',
    insertStatement : 'INSERT INTO sneha(email, password,gender,address,remember) VALUES (?,?,?,?,?)',
    updateStatement : 'UPDATE sneha SET email = ?, password = ?,gender=?, address = ?, remember = ? WHERE id=?',
    deleteStatement : 'DELETE FROM sneha WHERE id=?',
    dropStatement : 'DROP TABLE sneha',
    selectAllStatement : 'SELECT * FROM sneha',
    shortName : 'MyDatabase',
    version : '1.0',
    displayName : 'My Test Database Example',
    maxSizeInBytes : 65536,
    'init' : function() {
        App.db = openDatabase(App.shortName, App.version, App.displayName, App.maxSizeInBytes);
        App.createTable();
    },
    'createTable' : function() {
        console.debug('called createTable()');
        App.db.transaction(function(tx) {
            tx.executeSql(App.createStatement, [], App.showRecords, App.handleErrors);
            console.debug('executeSql: ' + App.createStatement);
        });
    },
    'insertRecord' : function() {
        var email = $('#email').val();
        var password = $('#password').val();
        var gender = $('input:radio[name=gender]:checked').val();
        console.log(gender);
        var address = $('#address').val();
        var remember = $('#remember').is(':checked');
        App.db.transaction(function(tx) {
            tx.executeSql(App.insertStatement, [email, password, gender, address, remember], App.loadAndReset, App.handleErrors);
        });
    },

    'loadRecord' : function(i) {
        console.debug('called loadRecord()');
        var item = App.dataset.item(i);
        $('#email').val(item.email);
        $('#password').val(item['password']);
        var gender = $('input:radio[name=gender]').val();
        $('#address').val(item['address']);
        $('#remember').val(item['remember']);
        $('#row_id').data('id', item['id']);

    },

    'deleteRecord' : function(id) {
        console.debug('called deleteRecord()');
        App.db.transaction(function(tx) {
            tx.executeSql(App.deleteStatement, [id], App.showRecords, App.handleErrors);
            console.debug('executeSql: ' + App.deleteStatement);
            alert('Delete Sucessfully');
        });
        App.resetForm();

    },
    'dropTable' : function() {
        console.debug('called dropTable()');
        App.db.transaction(function(tx) {
            tx.executeSql(App.dropStatement, [], App.showRecords, App.handleErrors);
        });

        App.resetForm();
        App.createTable();

    },
    'resetForm' : function() {
        $('#email').val('');
        $('#password').val('');
        $('input:radio[name=gender]').val('');
        $('#address').val('');
        $('#remember').val('');
        $('#id').val('');

    },

    'loadAndReset' : function() {
        App.resetForm();
        App.showRecords();
    },

    'handleErrors' : function() {
        console.debug('called handleErrors()');
        console.error('error ' + error.message);
        alert(error.message);
        return true;
    },

    'showRecords' : function() {
        console.debug('called showRecords()');
        App.db.transaction(function(transaction) {
            transaction.executeSql(App.selectAllStatement, [], App.renderRecords, App.handleErrors);
        });
    },
    'updateRecord' : function() {
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
        App.db.transaction(function(tx) {
            tx.executeSql(App.updateStatement, [email, password, gender, address, remember, id], App.loadAndReset, App.handleErrors);
            console.debug('executeSql: ' + App.updateStatement);
        });
    },

    'renderRecords' : function(transaction, results) {
        console.debug('called renderRecords()');
        html = '';
        $('#results').html('');
        App.dataset = results.rows;
        var html;
        var html;
        if (App.dataset.length > 0) {
            html = html + '<br/><br/>';

            html = html + '<table class="table table-bordered">';
            html = html + '  <caption>Records added</caption>';
            html = html + '  <thead>';
            html = html + '    <tr>';
            html = html + '      <th class="span1">Id</td>';
            html = html + '      <th>email</td>';
            html = html + '      <th>Password</td>';
            html = html + '      <th>gender</td>';
            html = html + '      <th>address</td>';
            html = html + '      <th>remember me</td>';
            html = html + '      <th class="span1">Actions</td>';
            html = html + '    </tr>';
            html = html + '  </thead>';
            html = html + '  <tbody>';

            for (var i = 0, item = null; i < App.dataset.length; i++) {
                item = App.dataset.item(i);

                html = html + '<tr>';
                html = html + ' <td>' + item['id'] + '</td>';
                html = html + ' <td>' + item['email'] + '</td>';
                html = html + ' <td>' + item['password'] + '</td>';
                html = html + ' <td>' + item['gender'] + '</td>';

                html = html + ' <td>' + item['address'] + '</td>';
                html = html + ' <td>' + item['remember'] + '</td>';
                html = html + ' <td>';
                html = html + '<button type="button" class="btn btn-primary btn-mini" onClick="App.loadRecord(' + i + ');">edit</button>';
                html = html + '<button type"button" class="btn btn-danger btn-mini" onClick="App.deleteRecord(' + item['id'] + ');">delete</button>';
                html = html + ' </td>';
                html = html + '</tr>';
            }

            html = html + '</tbody>';
            html = html + '</table>';

            $('#results').append(html);
        }
    }
};
App.init();
