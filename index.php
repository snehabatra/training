<!DOCTYPE html>
<html>
<head>
<tithle>test</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link href="./bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" media="screen">
</head> 
<body data-spy="scroll" data-target=".navbar">...</body> 

  <div class="row-fluid span12">
		<div class="span3">
			Level 1 column 
			<div class="input-prepend">
  <span class="add-on">@</span>
  <input class="span2" id="prependedInput" type="text" placeholder="Username">
</div>
<div class="input-append">
  <input class="span2" id="appendedInput" type="text">
  <span class="add-on">.00</span>
</div>
<form class="form-search">
  <div class="input-append">
    <input type="text" class="span2 search-query">
    <button type="submit" class="btn">Search</button>
  </div>
  <div class="input-prepend">
    <button type="submit" class="btn">Search</button>
    <input type="text" class="span2 search-query">
  </div>
</form>
</div>
<div class="span3">
Level 2 column
<h2> hi how are you</h2>
<input class="span1" type="text" placeholder=".span1">
<input class="span2" type="text" placeholder=".span2">
<input class="span3" type="text" placeholder=".span3">
<span class="input-xlarge uneditable-input">Some value here</span>
<input class="input-xlarge" id="focusedInput" type="text" value="This is focused...">
<select class="span1">
  ...
</select>
<select class="span2">
  ...
</select>
<select class="span3">
  ...
</select><ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
  <li><a tabindex="-1" href="#">Regular link</a></li>
  <li class="disabled"><a tabindex="-1" href="#">Disabled link</a></li>
  <li><a tabindex="-1" href="#">Another link</a></li>
</ul>
		</div>
		<div class="span3">
			Level 3 column
			<table class = "table table-hover ">
				
				<tr><td>1</td>	
				<td>2</td>
				<td>3</td></tr>
				<tr><td>Data1</td>
					<td>data2</td>
					<td> data3</td>
				</tr>
			</table>
<blink>SEARCH</blink>
<i class="icon-search icon-blue"></i>
<div class="dropdown">
  <!-- Link or button to toggle dropdown -->
  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
    <li><a tabindex="-1" href="#">Action</a></li>
    <li><a tabindex="-1" href="#">Another action</a></li>
    <li><a tabindex="-1" href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a tabindex="-1" href="#">Separated link</a></li>
  </ul>
  
  <div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Middle</button>
  <button class="btn">Right</button>
</div>

</div>


<div class="btn-group">
  <a class="btn btn-primary" href="#"><i class="icon-user icon-white"></i> User</a>
  <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#"><i class="icon-pencil"></i> Edit</a></li>
    <li><a href="#"><i class="icon-trash"></i> Delete</a></li>
    <li><a href="#"><i class="icon-ban-circle"></i> Ban</a></li>
    <li class="divider"></li>
    <li><a href="#"><i class="i"></i> Make admin</a></li>
  </ul>
</div>

													
		</div>
		<div class="span3">
			Level 4 column
			<button class="btn btn-large btn-block btn-primary" type="button">Block level button</button>
<button class="btn btn-large btn-block" type="button">Block level button</button>
					</div>
<a class="btn" href="">Link</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">
<div class="btn-group dropup">
  <button class="btn">Dropup</button>
  <button class="btn dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <!-- dropdown menu links -->
  </ul>
</div>

</div>
<ul class="nav nav-tabs">
  <li class="dropdown">
    <a class="dropdown-toggle"
       data-toggle="dropdown"
       href="#">
        Dropdown
        <b class="caret"></b>
      </a>
      <li class="dropdown">
    <a class="dropdown-toggle"
       data-toggle="dropdown"
       href="#">
        menu
        <b class="caret"></b>
      </a>
      <li class="dropdown">
    <a class="dropdown-toggle"
       data-toggle="dropdown"
       href="#">
        settings
        <b class="caret"></b>
      </a>
    <ul class="dropdown-menu">
      <li> <a href="#">click</a></li>
      <li>do</li>
    </ul>
  </li>
  </li>
</ul>
<div class="tabbable"> <!-- Only required for left/right tabs -->
  <ul class="nav nav-tabs">
    <li class="active"><a href="#tab1" data-toggle="tab">Section 1</a></li>
    <li><a href="#tab2" data-toggle="tab">Section 2</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tab1">
      <p>I'm in Section 1.</p>
    </div>
    <div class="tab-pane" id="tab2">
      <p>Howdy, I'm in Section 2.</p>
    </div>
  </div>
</div>

<div class="navbar">
  <div class="navbar-inverse">
    <div class="container">
 
      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
 
      <!-- Be sure to leave the brand out there if you want it shown -->
      <a class="brand" href="#">Project name</a>
 
      <!-- Everything you want hidden at 940px or less, place within here -->
      <div class="nav-collapse collapse">
        <!-- .nav, .navbar-search, .navbar-form, etc -->
      </div>
 
    </div>
  </div>
</div>
<ul class="breadcrumb">
  <li><a href="#">Home</a> <span class="divider">/</span></li>
  <li><a href="#">Library</a> <span class="divider">/</span></li>
  <li class="active">Data</li>
</ul>
<div class="pagination">
  <ul>
    <li><a href="#"><i class = icon-backward></i></a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#"><i class = icon-forward></i></a></li>
  </ul>
</div>
<button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo">
  simple collapsible
</button>
 
<div id="demo" class="collapse in"> … </div>
<button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo">
  simple collapsible
</button>
 
<div id="demo" class="collapse in"> … </div>
<script src="http://code.jquery.com/jquery.js"></script>
<script src="./bootstrap/js/bootstrap.min.js"></script>
</body>
</html>