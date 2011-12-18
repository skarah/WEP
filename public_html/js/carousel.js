function Carousel(cnt) {
	

	///////////////////////////////////////////
		// variables
		/*************************************/
		/* ����� */
		
		  /* ���������� ��������� �������� */
		  this.cnt = cnt;

		  /* ����� ������� ��������. ������������ ������ � ��� ������, ���� � ��� ����������� ��������� ���-��������, 
		    � ��� ������ ��� ����� ����� ����� */
		  
		  //this.current = 2; // ������ � ������� ������� ��������
		  //this.current_block = 1;
		  
		
		/*************************************/
		
		this.path = '/content/perfect/';
		this.pics = [];
		this.image = {};
		
		this.current       = (typeof(this.current)       === 'undefined') ? 0 : this.current;
		this.current_block = (typeof(this.current_block) === 'undefined') ? 0 : this.current_block;

		/*
		if(typeof(this.current_block) === 'undefined')
			this.current_block = 0; // ����� ����� �� ���������
		if(typeof(this.current) === 'undefined') {
			this.current = 0;
		}
		*/
}



Carousel.prototype = {
	
	getData: function() {
		
		// �������� �� ������� ������ ����� �������
		var quantity = Math.ceil(this.images.length / this.cnt);		
		
			// ���� �� ����� 
			// ����������� ���� ���, ��� ��������
			var c=0;
			for(i=0; i<quantity; i++) 
			{
				this.pics[i] = [];
				for(j=0; j<this.cnt; j++) 
				{
					if(typeof(this.images[c]) != 'undefined') {
						this.pics[i][j] = c;
					}
					c++;
				}
			}
	},
	
	
	
	proceed: function(o) {

		this.current_block = o;
		// ����������� ������ ��� ����� ������� �� ������
		// ��� ������ ��������
		var str = "";
		for(key in this.pics) {
			for(key2 in this.pics[key]) {
				
				// ��������� ����� �������� �����
				if(parseInt(key) === parseInt(this.current_block)) {
					//str += "������� ���� - "+key+"   ";
				}
				
				// ��������� ����� ���������� ��������
				if(this.pics[key][key2] == this.current) {
					this.image['block'] = key;  // ���� ���������� ��������, ����� �� ��������� � �������
					this.image['image'] = key2;
					
					//str += "���� ������� - "+key+", �������� - "+key2+" - ������#("+  this.images[this.pics[this.image['block']][this.image['image']]]  +")\n";
				}
				//str += "["+ key  +"]["+ key2  +"] = images["+  this.pics[key][key2] +"]="+this.images[this.pics[key][key2]]+"\n";
			}
			//str+="\n";
		}
		//alert(this.current+"\n\n"+str);
		this.redraw();
	},
	
	
	
	
	
	redraw: function() {
		var str1 = "";

		if(typeof(   this.pics[this.current_block+1]   ) !== 'undefined')
			str1 += '<a href="javascript:car.proceed('+ parseInt(this.current_block+1)  +')"><img src="/img/pic_next.gif" alt="" id="next" /></a>';

		if(typeof(   this.pics[this.current_block-1]   ) !== 'undefined')
			str1 += '<a href="javascript:car.proceed('+ parseInt(this.current_block-1)  +')"><img src="/img/pic_back.gif" alt="" id="prev" /></a>';
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		var str2 = '<ul id="pic">';
		for(key in this.pics[this.current_block]) {
			str2 += '<li><a href="'+(this.images[this.pics[this.current_block][key]][1])+'"><img src="'+ this.path + this.images[this.pics[this.current_block][key]][0] +'" class="picZ"></a></li>';
		}
		str2 += '</ul>';
		
		document.getElementById('blblbl').innerHTML = str1+''+str2;		
		
		//var tmp = document.getElementById('pic');
		//tmp.innerHTML = str2 + "<br>" + str1;
	},
	
	
	bigpic: function(o) {
		this.current = o;
		this.proceed(this.current_block);
		var tmp = '<img src="'+ this.images[this.current][1] +'" class="bigpic">';
		document.getElementById('bigpic').innerHTML = tmp;
	}

}