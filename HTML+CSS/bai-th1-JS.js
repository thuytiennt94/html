// JavaScript Document
function Kiemtra(idtext, idloi)
{
	text = document.getElementById(idtext);
	baoloi = document.getElementById(idloi);
	if(text.value=="")
	{
		baoloi.innerHTML = "Bạn chưa nhập hệ số " + idtext;
		baoloi.style.color = "red";
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
function giaipt()
{
	//alert("Giải phương trình bậc 1");
	//lấy tham chiếu đến các thẻ qua id
	ta = document.getElementById("tA");
	tb = document.getElementById("tB");
	tkq = document.getElementById("tKQ")
	//kiểm tra lỗi nhập thông tin
	if(Kiemtra("tA", "baoloiA")==false)//nếu có lỗi thì kết thúc
		return false;
	if(Kiemtra("tB", "baoloiB")==false)//nếu có lỗi thì kết thúc
		return false;
	//giải phương trình
	a = parseFloat(ta.value);
	b = parseFloat(tb.value);
	if(a==0 && b==0)
		tkq.value = "Phương trình vô số nghiệm";
	else if(a==0 && b!=0)
		tkq.value = "Phương trình vô nghiệm";
	else
		tkq.value = -b/a;
	return true;	
}