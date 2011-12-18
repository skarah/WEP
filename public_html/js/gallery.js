function Carousel(params) {
	

	///////////////////////////////////////////
		// variables
		/*************************************/
		/* ����� */
		
		  /* ���������� ��������� �������� */
		  this.cnt = params.cnt;
		  
		  if(  typeof(params.current) != 'undefined' ) 
		  	this.current = params.current;
		  
		  /* ����� ������� ��������. ������������ ������ � ��� ������, ���� � ��� ����������� ��������� ���-��������, 
		    � ��� ������ ��� ����� ����� ����� */
		  
		  //this.current = 2; // ������ � ������� ������� ��������
		  //this.current_block = 1;
		  
		
		/*************************************/
		
		this.pics = [];
		this.image = {};
		this.path = '/content/gallery/';
		
		
		
		this.current       = (typeof(this.current)       == 'undefined') ? 0 : this.current;
		this.current_block = (typeof(this.current_block) == 'undefined') ? 0 : this.current_block;
		
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
					str += "������� ���� - "+key+"   \n\n";
				}
				
				// ��������� ����� ���������� ��������
				if(this.pics[key][key2] == this.current) {
					this.image['block'] = key;  // ���� ���������� ��������, ����� �� ��������� � �������
					this.image['image'] = key2;
					//str += "���� ������� - "+key+", �������� - "+key2+" - ������#("+  this.images[this.pics[this.image['block']][this.image['image']]]  +")\n";
					str += "������� ";
				}
				str += "["+ key  +"]["+ key2  +"] = images["+  this.pics[key][key2] +"]="+this.images[this.pics[key][key2]]+"\n";
			}
			str+="\n";
		}
		//alert(str);
		this.redraw();
		//this.current_block = this.image['block'];
	},
	
	
	
	
	
	redraw: function() {
		var str1 = '', str3 = '';

		
		if(typeof(   this.pics[parseInt(this.current_block)-1]   ) !== 'undefined')
			str1 += '<a  id="prev" class="prev_in" href="javascript:car.proceed('+ parseInt(this.current_block-1)  +')"><img src="/img/pic_back.gif" alt=""/></a>';
			
		if(typeof(   this.pics[parseInt(this.current_block)+1]   ) !== 'undefined')
			str3 += '<a id="next" class="next_in" href="javascript:car.proceed('+ parseInt(this.current_block+1)  +')"><img src="/img/pic_next.gif" alt="" /></a>';

			//////////////////////////////////////////////////////////////////////////////////////
			var str2 = '<ul id="pic" class="pic_in">';
			for(key in this.pics[this.current_block]) {

				
				if(parseInt(this.image['block']) == parseInt(this.current_block)) 
				{
					if(key == parseInt(this.image['image'])) {
						// ����������
						str2 += '<li><img src="'+ this.path+ this.images[this.pics[this.current_block][key]][0] +'" class="active pic"></li>';
					}
					else 
					{
						//@@ str2 += '<a href="'+this.images[this.pics[this.current_block][key]][1]+'"><img src="'+ this.path + this.images[this.pics[this.current_block][key]][0] +'" class="pic"></a>';
						str2 += '<li><a href="javascript:car.bigpic('+(this.pics[this.current_block][key])+',0)"><img src="'+ this.path + this.images[this.pics[this.current_block][key]][0] +'" class="pic"></a></li>';
					}
						
				}
				else {
					//@@ str2 += '<a href="'+this.images[this.pics[this.current_block][key]][1]+'"><img src="'+ this.path + this.images[this.pics[this.current_block][key]][0] +'" class="pic"></a>';
					str2 += '<li><a href="javascript:car.bigpic('+(this.pics[this.current_block][key])+',0)"><img src="'+ this.path+ this.images[this.pics[this.current_block][key]][0] +'" class="pic"></a></li>';
				}
			}	
			str2 += '</ul>';
			document.getElementById('blblbl').innerHTML = str1 + '' + str2 + '' + str3;
			
			//var tmp = document.getElementById('pic');
			//tmp.innerHTML = str2 + "<br>" + str1;
	},
	
	
	bigpic: function(o,load) {
		this.current = o;
		this.proceed(this.current_block);
		if(load == 1) this.current_block = this.image['block'];
		else this.current_block = this.current_block;
		
		this.redraw();
		var tmp = '<img src="'+ this.path + this.images[this.current][2] +'" class="bigpic">';
		document.getElementById('bigpic').innerHTML = tmp;
		
		tmp = "<strong>"+this.images[this.current][3] + "</strong><br />" + this.images[this.current][4];
		document.getElementById('img_meta').innerHTML = tmp;
	}

}