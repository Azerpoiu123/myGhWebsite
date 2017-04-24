function Domainee(name,shortDescription,description){
				this.name = name;
				this.shortDescription = shortDescription;
				this.description = description;
				this.changeName = function(name){this.name=name;}
				this.Show = function(){return this.name+" "+this.shortDescription+" "+description;}
			}

function Add(){
	var d1 = new Domainee(prompt("name"),prompt("short description"),prompt('description'));
	list.Add(d1);
	alert('name: '+d1.Show());
}

var ls = [new Domainee('yas','cool','none'),new Domainee('poup','shit','man'),new Domainee('linda','die','pain')];
var list = [new Domainee('zzz','cool','none'),new Domainee('zzz','shit','man'),new Domainee('zzzz','die','pain')];
ls = list.concat(ls);
list = ls;
function ShowAllDomaines(){
	alert("begin");
	var ch ="ok";
	for(var i=0;i<list.length;i++){
		ch+=list[i].Show()+"\n";
	}
	alert(ch);
}

