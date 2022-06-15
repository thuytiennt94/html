// JavaScript Document
function kiemtra(){
	if($("#txtmoney").val()=='')
	{
		$("#errmoney").html("Chưa nhập số tiền");
		$("#errmoney").css("color", "red");
		$("#txtmoney").focus();
		return false;
	}
	$("#errmoney").html('');
	if(isNaN($("#txtmoney").val()))
	{
		$("#errmoney").html("Tổng tiền phải nhập bằng số");
		$("#errmoney").css("color", "green");
		$("#txtmoney").focus();
		return false;
	}
	$("#errmoney").html('');
	if($("#txtmoney").val()<=0)
	{
		$("#errmoney").html("tổng tiền phải nhập là số dương");
		$("#errmoney").css("color", "purple");
		$("#txtmoney").focus();
		return false;
	}
	$("#errmoney").html('');	
	if($("#title").val()=='')
	{
		$("#errtitle").html("số % cần chọn");
		$("#errtitle").css("color", "red");
		return false;
	}
	if($("#txtpeople").val()=='')
	{
		$("#errpeople").html("tổng số người");
		$("#errpeople").css("color", "red");
		$("#txtpeople").focus();
		return false;
	}
	$("#errpeople").html('');
	if($("#txtpeople").val()<=0)
	{
		$("#errpeople").html("tổng số người dương");
		$("#errpeople").css("color", "pink");
		$("#txtpeople").focus();
		return false;
	}
	$("#errpeople").html('');
}
function tinhtien(){
	tien = parseFloat($("#txtmoney").val());
	tip = parseFloat($("#title").val());
	ng = parseFloat($("#txtpeople").val());
	KQ = parseFloat($("#Tientip").val());
	KQ = tien*tip/ng;
	$("#Tientip").html("Kết quả là: " + KQ);
	alert("ok");
}
