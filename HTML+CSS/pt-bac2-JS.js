// JavaScript Document
function Kiemtra(idtext, idloi)
{
	text = document.getElementById(idtext);
	baoloi = document.getElementById(idloi);
	if(text.value=="")
	{
		baoloi.innerHTML = "Bạn chưa nhập hệ số " + idtext;
		baoloi.style.color = "pink";
		text.focus();//đặt con trỏ vào input
		return false; //kết thúc
	}
	if(isNaN(text.value)==true)
	{
		baoloi.innerHTML = "Bạn phải nhập số";
		baoloi.style.color = "red";
		text.select();//đặt con trỏ vào bôi đen nội dung text
		return false; //kết thúc
	}
	baoloi.innerHTML="";//xóa thông báo lỗi
	return true;
}
function giaiptbac2(){
	tA = document.getElementById("txtA");
	tB = document.getElementById("txtB");
	tC = document.getElementById("txtC");
	tKQ = document.getElementById("txtKQ");
	if(Kiemtra("txtA", "baoloiA") == false){
		return false;
	}
	if(Kiemtra("txtB", "baoloiB") == false){
		return false;
	}
	if(Kiemtra("txtC", "baoloiC") == false){
		return false;
	}
	var x1,x2;
	var delta;
	a = parseFloat(tA.value);
	b = parseFloat(tB.value);
	c = parseFloat(tC.value);
	delta = b*b-4*a*c;
	if(delta==0){
		x1=-b/(2*a);
		x2=-b/(2*a);
		document.getElementById(txtKQ).value = "x1= "+x1, "x2= "+x2;
		
}else if(delta<0){
		tKQ.value = "phương trình vô nghiệm";
}else{
		x1=(-b-Math.sqrt(delta))/(2*a);
		x2=(-b+Math.sqrt(delta))/(2*a);
		txtKQ1.value = "x1= "+x1;
		txtKQ2.value = "x2= "+x2;
	}
}


