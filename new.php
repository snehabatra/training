<!DOCTYPE html>
<html>
<body>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">
  </head>
  
  <body>
    <div class="container">
      <h1>HTML5 Local Storage Example</h1>
      
      <form method="get" id= "full"class="form-horizontal">
        <fieldset>
          <legend>Enquiry Form</legend>  
 
          <div class="control-group">
            <label class="control-label" for="type">Type of enquiry</label>
            <div class="controls">
              <select name="type" id="type">
                <option value="">Please select</option>
                <option value="general">General</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>
      
          <div class="control-group">
            <label class="control-label" for="name">Name</label>
            <div class="controls">
              <input  type="text" name="name" id="name" value="" maxlength="50" required>
            </div>
          </div>
  
          <div class="control-group">
            <label class="control-label" for="email">Email Address</label>
            <div class="controls">
              <input type="email" name="email" id="email" value="" maxlength="150">
            </div>
          </div>
        
          <div class="control-group">
            <label class="control-label" for="message">Message</label>
            <div class="controls">
              <textarea type= "text" name="message" id="message"></textarea>
            </div>
          </div>
          
          <div class="control-group">
            <div class="controls">
              <label class="checkbox">
                <input name="subscribe" id="subscribe" type="checkbox">
                Subscribe to our newsletter
              </label>
            </div>
          </div>          
        </fieldset>                        
        
        <div class="form-actions">
          <input type="submit" name="submit" id="submit" value="Send" class="btn btn-primary">
        </div>
      </form>  
    </div>
    <table class = table-bordered>
<tr>
<th>type</th>
<th>name</th>
<th>email</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>
<button id="btn1">display the data entered</button>

<script>       

	$(document).ready(function () {
      if (localStorage) {
        if (localStorage.type) {
          $("#type").find("option[value=" + localStorage.type + "]").attr("selected", true);
        }
        if (localStorage.name) {
          $("#name").val(localStorage.name);
        }
        if (localStorage.email) {
          $("#email").val(localStorage.email);
        }
        if (localStorage.message) {
          $("#message").val(localStorage.message);
        }
        if (localStorage.subscribe === "checked") {
          $("#subscribe").attr("checked", "checked");
        }
        
        /*
         * when a form field changes store it's value in local storage
         */
        $("input[type=text],select,textarea").change(function(){
          $this = $(this);
          localStorage[$this.attr("name")] = $this.val();
        });
        $("input[type=checkbox]").change(function(){
          $this = $(this);
          localStorage[$this.attr("name")] = $this.attr("checked");
        });
        (function() 
        {
	$("#full").submit(function() {
		var type = $(this).val();
		var name   =$(this).val();
		var email =$(this).val();
	});
$(document).ready(function(){
  $("#btn1").click(function(){
    $("td").append(" <b>Appended text</b>.");
  });     
      }
    });
  
 
</script>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="./bootstrap/js/bootstrap.min.js"></script>
</body>
</html>