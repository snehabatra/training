	<!DOCTYPE html>
	<html>
		<head>
	<title>test</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Bootstrap -->
	<link href= "./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">
	
	<script src="http://code.jquery.com/jquery.js"></script>
	<script src="./bootstrap/js/bootstrap.min.js"></script>
	</head>
	<body>
	<form>
  <fieldset>
    <h1>CRUD</h1>
    <label>name</label>
    <input type="text" placeholder="name" id="name" value ="" class = "stored">
        <label Age</label>
    <input type="text" placeholder = " age please" id = "age" value ="">
    <input type = "button" class="btn" id = "add" value = " add to storage">
    <input type = "button" class= "btn" id ="get" value = " get from storage">
   <input type = "button" class= "btn" id ="del" value = " remove from storage">
    <input type = "button" class= "btn" id ="clear" value = " clear local storage">
    <!--
    <input type = "button" class= "btn" id ="saveC" value = " save complex data">  
         <input type = "button" class= "btn" id ="restoreC" value = " restore complex data">-->
    
      <input type = "button" class= "btn" id ="sArray" value = " save array data">
    <p> show:
    	</p>
         
      </fieldset>
</form>
<script>
			
	
		function save() {
          
    console.log("saving")
   
          localStorage.setItem("name", $("#name").val());
        localStorage.setItem("age", $("#age").val());
            
       }
        
 
function get() 
{
	console.log(" get data");
	document.write("your name is: " + localStorage.getItem("name") + "<br>");    
    document.write("your age is:  " +  localStorage.getItem("age"))
      
   }

function remove() {
    console.log("Removing data from local storage.");
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    
}
 
function clearStorage() {
    console.log("Clearing local storage."); 
    localStorage.clear();
    
}
 

 
function saveArrayData() {
    console.log("Saving array data to local storage.");
    var myArrayObject = [];
    
    var personObject1 = new Object();
    personObject1.name = "Array1";
    personObject1.age = 23;
    myArrayObject.push(personObject1);
    
    var personObject2 = new Object();
    personObject2.name = "Array2";
    personObject2.age = 24;
    myArrayObject.push(personObject2);
    
    var personObject3 = new Object();
    personObject3.name = "Array3";
    personObject3.age = 25;
    myArrayObject.push(personObject3);
    
    localStorage.setItem("persons", JSON.stringify(myArrayObject));
    
}
 
 $(document).ready(function ()
  {
        $("#add").click(function()
            {
   	          save(); });
        $("#get").click(function(){
            	get();	});
    $("#del").click(function(){
        		remove();});
   $("#clear").click(function(){
   	          clearStorage();});
   	      $("#saveC").click(function(){
   	          	saveComplexData();});
   	          $("#restoreC").click(function(){
   	          		restoreComplexData();
   	          });
   	          		 $("#sArray").click(function(){
   	          			saveArrayData();
   	          		});
   	          			$("#rArray").click(function(){
   	          				restoreArrayData();
   	          			});
   	        				     		
        });
    
      $("p").click(function()
      {get();});
</script>

</body>

</html>
 