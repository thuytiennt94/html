function Kiemtra(){
	if($("#txtName").val()==''){
		$("#erorrName").html("This field is required");
		$("#erorrName").css("color","red");
		$("#txtName").focus();
		return false;
	}
	$("#erorrName").html('');
	//kiemtra mail
	mail = /^\w+@\w+(\.\w+)+$/;
	if(mail.test($("#txtMail").val())==false){
		$("#erorrMail").html("Bạn chưa nhập mail");
		$("#erorrMail").css("color", "red");
		$("#txtMail").focus();
		return false;
	}
	$("#erorrMail").html('');
	
	if($("#txtTitle").val().length<=10){
		$("#erorrTitle").html("Bạn chưa nhập dữ liệu");
		$("#erorrTitle").css("color", "red");
		$("#txtTitle").focus();
		return false;
	}
	$("#erorrTitle").html('');
	
	if($("#txtComment").val().length<=10){
		$("#erorrComment").html("Bạn chưa nhập dữ liệu");
		$("#erorrComment").css("color", "red");
		$("#txtComment").focus();
		return false;
	}
	$("#erorrComment").html('');
}