// JavaScript Document
function kiemtra() {
		if($("#txtname").val()==""){
				$("#eName").html("This field is required");
				$("#eName").css("color","red");
				$("#txtname").focus();
				return false;
			}
		$("#eName").html("");
		if($("#txtaddress").val()==""){
			$("#eAddress").html("This field is required");
			$("#eAddress").css("color", "red");
			$("#txtaddress").focus();
			return false;
		}
		$("#eAddress").html("");
		if($("#txtcity").val()==""){
			$("#eCity").html("This field is required");
			$("#eCity").css("color", "red");
			$("#txtcity").focus();
			return false;
		}
		$("#eCity").html("");
		gioitinh = $("input[name=rGender]:checked").val();
		if(gioitinh== undefined)
		{
			$("#ErorrGender").html("Chưa chọn giới tính");
			$("#ErorrGender").css("color","purple");
			return false;
		}
		
		//xử lí mail
		re = /^\w+@\w+(\.\w+)+$/;
		if(re.test($("#txtmail").val())==false){
			$("#eMail").html("This field is required");
			$("#eMail").css("color", "red");
			$("#txtmail").focus();
		return false;
		}
		$("#eMail").html("");
		if($("#txtpassword").val().length<=6){
			$("#ePass").html("This field is > 6");
			$("#ePass").css("color", "red");
			$("#txtpassword").focus();
			return false;
		}
		$("#ePass").html("");
		if($("#txtagain").val()!=($("#txtpassword").val())){
			$("#eAgain").html("pass sai");
			$("#eAgain").css("color", "red");
			$("#txtagain").focus();
			return false;
		}
		$("#eAgain").html("");
		if($("#txtcheck").is(':checked')){
			alert("Đã check");
		}else{
			alert("Chưa check");
		}
		


}