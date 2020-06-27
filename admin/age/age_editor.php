<?php
 include("../template/header.php");
?>
<script language="javascript" src="age.js"></script>
<script type="text/javascript" src="../../js/jquery.js"></script>
<script	src="../../js/main.js" type="text/javascript"></script>
<link rel="stylesheet" href="../../css/datepicker.css">

<a href="index.php?cmd=list" class="btn green">List</a> <br><br>
  <div class="portlet box blue">
      <div class="portlet-title">
          <div class="caption"><i class="fa fa-globe"></i><b><?=ucwords(str_replace("_"," ","age"))?></b>
          </div>
          <div class="tools">
              <a href="javascript:;" class="reload"></a>
              <a href="javascript:;" class="remove"></a>
          </div>
      </div>
	   <div class="portlet-body">
		         <div class="table-responsive">	
	                <table class="table">
							 <tr>
							  <td>  

								 <form name="frm_age" method="post"  enctype="multipart/form-data" onSubmit="return checkRequired();">			
								  <div class="portlet-body">
						         <div class="table-responsive">	
					                <table class="table">
										 <tr>
							 <td>Type</td>
							 <td><?php
	$info['table']    = "type";
	$info['fields']   = array("*");   	   
	$info['where']    =  "1=1 ORDER BY id DESC";
	$restype  =  $db->select($info);
?>
<select  name="type_id" id="type_id"   class="textbox">
	<option value="">--Select--</option>
	<?php
	   foreach($restype as $key=>$each)
	   { 
	?>
	  <option value="<?=$restype[$key]['id']?>" <?php if($restype[$key]['id']==$type_id){ echo "selected"; }?>><?=$restype[$key]['type_name']?></option>
	<?php
	 }
	?> 
</select></td>
					  </tr><tr>
							 <td>Breed</td>
							 <td><?php
	$info['table']    = "breed";
	$info['fields']   = array("*");   	   
	$info['where']    =  "1=1 ORDER BY id DESC";
	$resbreed  =  $db->select($info);
?>
<select  name="breed_id" id="breed_id"   class="textbox">
	<option value="">--Select--</option>
	<?php
	   foreach($resbreed as $key=>$each)
	   { 
	?>
	  <option value="<?=$resbreed[$key]['id']?>" <?php if($resbreed[$key]['id']==$breed_id){ echo "selected"; }?>><?=$resbreed[$key]['breed_name']?></option>
	<?php
	 }
	?> 
</select></td>
					  </tr><tr>
							 <td>Gender</td>
							 <td><?php
	$info['table']    = "gender";
	$info['fields']   = array("*");   	   
	$info['where']    =  "1=1 ORDER BY id DESC";
	$resgender  =  $db->select($info);
?>
<select  name="gender_id" id="gender_id"   class="textbox">
	<option value="">--Select--</option>
	<?php
	   foreach($resgender as $key=>$each)
	   { 
	?>
	  <option value="<?=$resgender[$key]['id']?>" <?php if($resgender[$key]['id']==$gender_id){ echo "selected"; }?>><?=$resgender[$key]['gender_name']?></option>
	<?php
	 }
	?> 
</select></td>
					  </tr><tr>
						 <td>Age Name</td>
						 <td>
						    <input type="text" name="age_name" id="age_name"  value="<?=$age_name?>" class="textbox">
						 </td>
				     </tr><tr>
		           		 <td>Status</td>
				   		 <td><?php
	$enumage = getEnumFieldValues('age','status');
?>
<select  name="status" id="status"   class="textbox">
<?php
   foreach($enumage as $key=>$value)
   { 
?>
  <option value="<?=$value?>" <?php if($value==$status){ echo "selected"; }?>><?=$value?></option>
 <?php
  }
?> 
</select></td>
				  </tr>
										 <tr> 
											 <td align="right"></td>
											 <td>
												<input type="hidden" name="cmd" value="add">
												<input type="hidden" name="id" value="<?=$Id?>">			
												<input type="submit" name="btn_submit" id="btn_submit" value="submit" class="button_blue">
											 </td>     
										 </tr>
										</table>
										</div>
										</div>
								</form>
							  </td>
							 </tr>
							</table>
			      </div>
			</div>
  </div>			
<?php
 include("../template/footer.php");
?>

