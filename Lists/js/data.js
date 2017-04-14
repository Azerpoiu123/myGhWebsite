function School(id,name,ShortDescription,Description,WebAdress,Adress,phoneNumber,Type,City,points){
	this.id = id;
	this.name = name;
	this.ShortDescription = ShortDescription;
	this.Description = Description;
	this.WebAdress = WebAdress;
	this.Adress = Adress;
	this.phoneNumber = phoneNumber;
	this.Type = Type;//1.true public 0.false private
	this.City = City;
	this.points = points;
	this.FirstImg = function(){
		for (var i = 0; i < ListImageSchool.length; i++) {
			if(ListImageSchool[i].idSchool == this.id)
				return ListImageSchool[i].img
		}
		return "none";
	}
	this.ImgList = function(){
		var LstImg  = [];
		for (var i = 0; i < ListImageSchool.length; i++) {
			if(ListImageSchool[i].idSchool == 1)LstImg.push(ListImageSchool[i].img);
		}
		return LstImg;
	}
	this.ImgText = function(){
		var ch = "";
		for (var i = 0; i < ListImageSchool.length; i++) {
			if(ListImageSchool[i].idSchool == 1)ch += ListImageSchool[i].img;
		}
		return ch;
	}
	this.Show = function(){
		return this.name + " " + this.ShortDescription + " " + this.Description + " " + this.WebAdress + " " + this.Adress + " " + this.phoneNumber + " " + this.Type + " " + this.City + " " + this.points + "\n";
	}
}
function Images(Name,img,idSchool){
	this.Name = Name;
	this.img = img;
	this.idSchool = idSchool;
	this.SetImage = function(){
		this.idSchool = 0;
	}
	this.Show = function(){
		return this.Name + " " + this.img + " " + this.idSchool + "\n";
	}
}
var ListSchool = [new School(1,'azer1111','1sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some1.thing@good.cool','1something','021216459731',1,'Tanger',16)
				,new School(2,'Mordor22','2sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some2.thing@good.cool','2something','021216459732',0,'Casa',4)
				,new School(3,'shadow33','3sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some3.thing@good.cool','3something','021216459733',1,'Tanger',0)
				,new School(4,'narnia44','4sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some4.thing@good.cool','4something','021216459734',1,'Fes',9)
				,new School(5,'jamesin5','5sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','5Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some5.thing@good.cool','5something','021216459735',0,'Tanger',13)
				,new School(6,'tihr6666','6sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','6Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some6.thing@good.cool','6something','021216459736',1,'Fes',1)
				,new School(7,'Duqial77','7sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','7Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some7.thing@good.cool','7something','021216459737',0,'Asila',11)
				,new School(8,'niKOL888','8sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, consectetur adipisicing elit.','8Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','some8.thing@good.cool','8something','021216459738',0,'Asila',8)
				];
var ListImageSchool = [new Images('DreamsReality','img1',1)
					,new Images('AvatarBoy','avatar-2',1)
					,new Images('the Lonly','img2',2)
					,new Images('how to choose the right career','img3',3)
					,new Images('whispers','img4',1)
					,new Images('i am a wolf','img5',2)
					,new Images('go back to sleep','img7',2)
					,new Images('if the government is wrong','img6',3)
					,new Images('cropped motivation wallpaper12','cropped-motivation-wallpaper12',7)
					];


function ShowOne(i,j){
var ch = "";
	ch += '<div class="panel panel-default">';//Item Main div start
		ch +='<div class="panel-heading">';//Items Header start
			ch +='<a data-toggle="collapse" data-parent="#accordion" href=".collapse'+(i+j)+'" onclick="fix('+(i+j)+')">';// Items image and short description start
				ch += '<img src="img/'+ListSchool[i].FirstImg()+'.jpg" width="90%" height="40%" alt="">';//Items image start and end
				ch += '<div class="collapse'+(i+j)+' panel-collapse collapse in">';//Items short description start
					ch += '<div class="panel-body">'+ListSchool[i].ShortDescription+'</div>';
				ch +='</div>';//Items short description end
			ch +='</a>';//Items image and short description end
		ch +='</div>';//Items Header end
		ch +='<div class="collapse'+(i+j)+' panel-collapse collapse">';//Items Description start
			ch += '<div class="panel-body">'+ListSchool[i].Description;
			ch +='</div>';
		ch +='</div>';//Items Description end
	ch +='</div>';//Item Main div end
return ch;
}
function ShowOneFixed(i,j){
var ch = "";
	ch += '<div class="panel panel-default" id="panel'+(i+j)+'">';//Item Main div start
		ch +='<div class="panel-heading">';//Items Header start
			ch +='<a data-toggle="collapse" data-parent="#accordion" href=".collapse'+(i+j)+'">';//Items image and short description start
				ch += '<img src="img/'+ListSchool[i].FirstImg()+'.jpg" width="90%" height="40%" alt="">';//Items image start and end
				ch += '<div class="collapse'+(i+j)+' panel-collapse collapse in">';//Items short description start
					ch += '<div class="panel-body">'+ListSchool[i].ShortDescription+'</div>';
				ch +='</div>';//Items short description end
			ch +='</a>';//Items image and short description end
		ch +='</div>';//Items Header end
		ch +='<div class="collapse'+(i+j)+' panel-collapse collapse" data-toggle="collapse" data-parent="#panel'+(i+j)+'">';//Items Description start
			ch += '<div class="panel-body">'+ListSchool[i].Description;
			ch +='</div>';
		ch +='</div>';//Items Description end
	ch +='</div>';//Item Main div end
return ch;
}

function ShowAll(){
	var ch = "";alert(ListSchool.length);
	for (var i = 0; i < ListSchool.length; i++) {
		ch += ShowOne(i,4);
	}
	return ch;
}

function ShowAllIn(){
	var ch = "";alert(ListSchool.length);
	ch += '<div class="panel-group" id="accordion">';
	for (var i = 0; i < ListSchool.length; i++) {
		ch += ShowOne(i,1);
	}
	ch += '</div>';
	return ch;
}
function ShowAllInFixed(){
	var ch = "";alert(ListSchool.length);
	ch += '<div class="panel-group" id="accordion">';
	for (var i = 0; i < ListSchool.length; i++) {
		ch += ShowOneFixed(i,1);
	}
	ch += '</div>';
	return ch;
}
function test0(){
	var ch = "";alert(ListImageSchool.length);
	for (var i = 0; i < ListImageSchool.length; i++) {
		ch += " ";
	}
	return ch;
}
function test1(index){
	var ch = "";alert(LstImg.length);
	for (var i = 0; i < LstImg.length; i++) {
		ch += LstImg[i].ImgText();
	}
	return ch;
}

function fix(i){i-=1;
	var ch = " "+i+" "+$('.panel-heading a:eq('+i+')').hasClass('in')+" :\n";
	if(!$('.panel-heading a:eq('+i+')').hasClass('in')){//alert('in '+i);
		for (var j = 0; j < ListSchool.length; j++) {
			if(i!=j){

					$('.panel-heading a:eq('+j+')').removeClass('in');
					$('.panel-heading a:eq('+j+')').addClass('in');
					ch += $('panel-heading a:eq('+j+')').hasClass('in')+' fixed '+j+' with '+i+' \n';
			}
		}
	}
alert(ch);
}


function fixtest(){
	var ch = "";alert('start');
	for (var i = 0; i < ListSchool.length; i++) {
	ch += $('.panel-heading a:eq('+i+') div').hasClass('in')+' \n';
	}
	alert(ch);
}
  ///////////////////////////////////////////////////////////////////////////////////
/////////////////           this is the segend version            ////////////////////
  /////////////////////////////////////////////////////////////////////////////////


function ShowOne_v002(i){
		var ch = "";
			ch += '<div style="background-color:gray;color:white;height:250px;margin:0px;padding:0px;margin-bottom:10px;" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
			ch += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="background-color:silver;height:100%;margin:0px;padding:0px;">';
			ch += '<img src="img/'+ListSchool[i].FirstImg()+'.jpg" height="100%" width="100%" alt=""/>';
			ch += '</div>';
			ch += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="background-color:green;height: 100%;padding-top:50px;">';
			ch += ListSchool[i].Description;
			ch += '</div>';
			ch += '</div>';
		return ch;
}
function ShowAll_v002(){
	var ch = "";alert(ListSchool.length);
	for (var i = 0; i < ListSchool.length; i++) {
		ch += ShowOne_v002(i)+"\n";
	}
	return ch;
}

 /////////////////////////////////////////////////////////////////////////
////////////////////////        finding querys         ////////////////////
 ////////////////////////////////////////////////////////////////////////

    /////////     Schools By cityName and Type(public or private)     /////////
//////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

