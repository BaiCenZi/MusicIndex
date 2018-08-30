function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];

	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
window.onload=function(){
	var icon_left=document.getElementById('left');
	var icon_right=document.getElementById('right');
	var oPic=document.getElementById('picture');
	var aPic=oPic.getElementsByTagName('a');
	var oDot=document.getElementById('dot_list');
	var aDot=oDot.getElementsByTagName('a');
	var oBan=document.getElementById('banner');

	var ulM_nav=document.getElementById('m_nav');
	var liM_nav=ulM_nav.getElementsByTagName('li');
	var aM_nav=ulM_nav.getElementsByTagName('a');

	var oLogin=document.getElementById('login');
	var aLogin_btn=document.getElementById('login_btn');
	var oM_hidden=document.getElementById('m_hidden');
	var liM_hidden=oM_hidden.getElementsByTagName('li');
	var aM_hidden=oM_hidden.getElementsByTagName('a');

	var ollist1=document.getElementById('ollist1');
	var ollist2=document.getElementById('ollist2');
	var ollist3=document.getElementById('ollist3');
	var liol_list1=ollist1.getElementsByTagName('li');
	var liol_list2=ollist2.getElementsByTagName('li');
	var liol_list3=ollist3.getElementsByTagName('li');
	var op_list1=ollist1.getElementsByTagName('div');
	var op_list2=ollist2.getElementsByTagName('div');
	var op_list3=ollist3.getElementsByTagName('div');
	var aollist1=getByClass(ollist1,'song');
	var aollist2=getByClass(ollist2,'song');
	var aollist3=getByClass(ollist3,'song');

	var singer_btn=document.getElementById('singer_btn');
	var singer_a=singer_btn.getElementsByTagName('a');
	var singer_i=singer_btn.getElementsByTagName('i');

	var new_con=document.getElementById('new_con');
	var new_list=getByClass(new_con,'new_list');
	var disc=getByClass(new_con,'disc');
	var play_icon=getByClass(new_con,'play_icon');
	new_list[0].style.left="-645px";
	new_list[1].style.left="0";
	new_list[2].style.left="645px";
	new_list[3].style.left="645px";
	var turn_left=getByClass(new_con,'turn_left turn_btn')[0];
	var turn_right=getByClass(new_con,'turn_right turn_btn')[0];
	var nowIndex=1;
	var timer1=null;
	var timer2=null;

	var id=0;
	var zindex=2;
	var banner_bgc=new Array();
	banner_bgc=['#ff5710','#eceeeb','#767e8d','#c73305','#774222','#010101','#ededed','#1d171b'];
	oBan.style.background=banner_bgc[id];
	aDot[id].style['background-position']="-15px -343px";

	function move(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var speed=(iTarget-obj.alpha)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(obj.alpha==iTarget){
				clearInterval(obj.timer);
			}
			else{
				obj.alpha+=speed;
				obj.style.filter='alpha(opacity:'+obj.alpha+')';
				obj.style.opacity=obj.alpha/100;
			}
		},30);
	}
	function tag(){
		aPic[id].style.zIndex=zindex++;
		/*清除小点标记*/
		for(var i=0;i<aDot.length;i++){
			aDot[i].style['background-position']="3px -343px";
		}
		aDot[id].style['background-position']="-15px -343px";
		oBan.style.background=banner_bgc[id];
	}
	icon_left.onclick=function(){
		id--;
		if(id==-1){
			id=7;
		}
		tag();
	}
	icon_right.onclick=function(){
		id++;
		if(id==8){
			id=0;
		}
		tag();
	}
	/*轮播图自动播放*/
	timer1=setInterval(function(){
		id++;
		if(id==8){
			id=0;
		}
		tag();
	},2000);
	oBan.onmouseover=function(){
		clearInterval(timer1);
	}
	oBan.onmouseout=function(){
		timer1=setInterval(function(){
			id++;
			if(id==8){
				id=0;
			}
			tag();
		},3000);
	}

	for(var i=0;i<liM_nav.length;i++){
		liM_nav[i].index=i;
		liM_nav[i].onmouseover=function(){
			this.style.background="#000";
			aM_nav[this.index].style.color="#fff";
		}
		liM_nav[i].onmouseout=function(){
			if(this.className!='first_li'){
				this.style.background="#242424";
				aM_nav[this.index].style.color="#ccc";
			}
		}
	}

	oLogin.onmouseover=function(){
		aLogin_btn.style.color="#ccc";
		oM_hidden.style.display="block";
	}
	oLogin.onmouseout=function(){
		aLogin_btn.style.color="#787878";
		oM_hidden.style.display="none";
	}
	for(var i=0;i<liM_hidden.length;i++){
		liM_hidden[i].index=i;
		liM_hidden[i].onmouseover=function(){
			this.style.background="#3b3b3b";
			aM_hidden[this.index].style.color="#fff";
		}
		liM_hidden[i].onmouseout=function(){
			this.style.background="#2b2b2b";
			aM_hidden[this.index].style.color="#ccc";
		}
	}

	for(var i=0;i<liol_list1.length;i++){
		liol_list1[i].index=i;
		liol_list2[i].index=i;
		liol_list3[i].index=i;
		liol_list1[i].onmouseover=function(){
			op_list1[this.index].style.display="block";
			aollist1[this.index].style.width="91px";
		}
		liol_list2[i].onmouseover=function(){
			op_list2[this.index].style.display="block";
			aollist2[this.index].style.width="91px";
		}
		liol_list3[i].onmouseover=function(){
			op_list3[this.index].style.display="block";
			aollist3[this.index].style.width="91px";
		}
		liol_list1[i].onmouseout=function(){
			op_list1[this.index].style.display="none";
			aollist1[this.index].style.width="auto";
		}
		liol_list2[i].onmouseout=function(){
			op_list2[this.index].style.display="none";
			aollist2[this.index].style.width="auto";
		}
		liol_list3[i].onmouseout=function(){
			op_list3[this.index].style.display="none";
			aollist3[this.index].style.width="auto";
		}
	}

	singer_btn.onmouseover=function(){
		singer_a[0].style['background-position']="0 -141px";
		singer_i[0].style['background-position']="right -182px";
	}
	singer_btn.onmouseout=function(){
		singer_a[0].style['background-position']="0 -59px";
		singer_i[0].style['background-position']="right -100px";
	}

	for(var i=0;i<disc.length;i++){
		disc[i].index=i;
		disc[i].onmouseover=function(){
			play_icon[this.index].style.display="block";
		}
		disc[i].onmouseout=function(){
			play_icon[this.index].style.display="none";
		}
	}
	for(var i=0;i<play_icon.length;i++){
		play_icon[i].onmouseover=function(){
			this.style.display="block";
			this.style['background-position']="0 -110px";
		}
		play_icon[i].onmouseout=function(){
			this.style.display="block";
			this.style['background-position']="0 -85px";
		}
	}
	/*新碟上架轮播图*/
	var flag=true;
	turn_right.onclick=function(){
		if(flag==true){
			flag=false;
			clearInterval(timer2);
			nowIndex++;
			if(nowIndex==4){
				nowIndex=0;
			}
			var pre1=(nowIndex-1)<0?nowIndex+4-1:nowIndex-1;
			var pre2=(nowIndex-2)<0?nowIndex+4-2:nowIndex-2;

			timer2=setInterval(function(){
				if(new_list[nowIndex].style.left=='0px'){
					clearInterval(timer2);
					flag=true;
				}
				else{
					new_list[pre1].style.left=new_list[pre1].offsetLeft-15+'px';
					new_list[nowIndex].style.left=new_list[nowIndex].offsetLeft-15+'px';
				}
			},30);
			new_list[pre2].style.left="645px";
		}
	}
	turn_left.onclick=function(){
		if(flag==true){
			flag=false;
			clearInterval(timer2);
			nowIndex--;
			if(nowIndex==-1){
				nowIndex=3;
			}
			var aft1=(nowIndex+1)>3?nowIndex-4+1:nowIndex+1;
			var aft2=(nowIndex+3)>3?nowIndex-4+3:nowIndex+3;

			timer2=setInterval(function(){
				if(new_list[nowIndex].style.left=='0px'){
					clearInterval(timer2);
					flag=true;
				}
				else{
					new_list[aft1].style.left=new_list[aft1].offsetLeft+15+'px';
					new_list[nowIndex].style.left=new_list[nowIndex].offsetLeft+15+'px';
				}
			},30);
			new_list[aft2].style.left="-645px";
		}
	}
}