function formCheck()
{
	var f=document.forms[0], errorStr = "<ul>������� ���������:", errorCounter=0, er=document.getElementById('error_msg');
	var m=new Array(); 
	// 
	
	/**************************************************/
	

	// ��������� ���
	m =f.elements[0].value.match(/[a-z�-�_\-.,]{2,59}/i);
	if(!m) {
		errorStr += "<li>�.�.�.";
		f.elements[0].className="text2 e3";
		errorCounter++;
	}
	else f.elements[0].className="text2";
	
	
	// ��������� �����
	m =f.elements[4].value.match(/[a-z�-�_\-]{2,59}/i);
	if(!m) {
		errorStr += "<li>�����";
		f.elements[4].className="text2 e3";
		errorCounter++;
	}
	else f.elements[4].className="text2";
	
	
	// ��������� ���
	m =f.elements[5].value.match(/[0-9\(\)\s\-]{1,9}/i);
	if(!m) {
		errorStr += "<li>���������� ���";
		f.elements[5].className="text e3";
		errorCounter++;
	}
	else f.elements[5].className="text";
	
	// ��������� ���. �����
	m =f.elements[6].value.match(/[0-9\(\)\s\-]{3,9}/i);
	if(!m) {
		errorStr += "<li>����� ��������";
		f.elements[6].className="text e3";
		errorCounter++;
	}
	else f.elements[6].className="text";

	// ����� ����
	m=f.elements[8].value.match(/^[0-9]{1,3}$/);
	if(!m) {
		errorStr += "<li>���������� ����";
		f.elements[8].className="text e3";
		errorCounter++;
	}
	else f.elements[8].className="text";
	
	// ����� ���
	m=f.elements[13].value.match(/^[0-9]{1,3}$/);
	if(!m) {
		errorStr += "<li>���������� �������";
		f.elements[13].className="text2 e3";
		errorCounter++;
	}
	else f.elements[13].className="text2";

	

	// ��������� email
	/*
	m =f.elements[7].value.match(/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,5}$/i);
	if(f.elements[7].value!="" && m==false) 
	{
		errorStr += "<li>���������� ������� <strong>e-mail</strong> � ������� email@example.com";
		f.elements[7].className="text2 e3";
		errorCounter++;
	}
	else f.elements[7].className="text2";
	*/

	
	// ��������� ����������� ���
	m=f.elements[16].value.match(/^[0-9]{4}$/);
	if(!m) {
		errorStr += "<li><strong>����������� �����</strong>";
		f.elements[16].className="text e3";
		errorCounter++;
	}
	else f.elements[16].className="text";
	/**************************************************/
	
	if(errorCounter)
	{
		er.innerHTML = errorStr;
		er.innerHTML += "</ul>";
		er.style.display="block";
		
		top.location.href = "/armoring/#errorAnchor";
		//f.elements[errorCounter].focus();
		return false;
	}
	else {
		er.style.display="none";
		return true;
	}
}