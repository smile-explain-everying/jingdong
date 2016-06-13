$(function(){
	// banner 轮播
	var imgs=$('.bannerimg')[0];
	var as=getChild(imgs);
	var btns=$('.btn')[0];
	var lis=getChild(btns);
	var index=0;
	var t=setInterval(move,3000);
	function move(){
		index++;
		if(index==as.length){
			index=0;
		}
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			animate(as[i],{opacity:0},600);
		}
		lis[index].className="hot";
		animate(as[index],{opacity:1},600);
	}
	var boxs=$('.bannerbox')[0];
	boxs.onmouseover=function(){
		clearInterval(t);
	}
	boxs.onmouseout=function(){
		t=setInterval(move,3000);
	}
    
	for(var i=0;i<lis.length;i++){
		lis[i].aa=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
				animate(as[j],{opacity:0},600);
			}
			lis[this.aa].className="hot";
			animate(as[this.aa],{opacity:1},600);
			index=this.aa;
		}
	}
 	
	var left=$('.btnleft')[0];
	left.onclick=function(){
        index--;
		if(index==-1){
			index=lis.length-1;
		}
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			animate(as[i],{opacity:0},600);
		}
		lis[index].className="hot";
		animate(as[index],{opacity:1},600);
	}
	var right=$('.btnright')[0];
	right.onclick=function(){
		move();
	}

    // 左右按钮
    var Bbox=$('.b-right2')[0];
    var Bimg=$('.b-right',Bbox);
    //alert(Bimg.length)
    var Bw=parseInt(getStyle(Bimg[0],'width'));
    // alert(Bw)
    Bbox.style.width=Bimg.length*Bw+'px';
    var Bleft=$('.btn-left')[0];
    var Bright=$('.btn-right')[0];
    var pp=0;
    Bleft.onclick=function(){
    	pp--;
    	if(pp==-1){
    		pp=Bimg.length-1;
    	}
    	animate(Bbox,{marginLeft:-pp*Bw})
    }
    Bright.onclick=function(){
    	pp++;
    	if(pp>Bimg.length-1){
    		pp=0;
    	}
    	animate(Bbox,{marginLeft:-pp*Bw})
    }


	// 选项卡
	var right=getClass('fzxb-right');
	var box=getClass('fzxb-box');
	var aas,ds,a;
	for(var i=0;i<right.length;i++){
		ass=right[i].getElementsByTagName('li');
		a=right[i].getElementsByTagName('a');
		ds=getClass('right-box',box[i])
		tab(ass,ds,a);
	}
	function tab(links,lists,as){
		// console.log(links);
		console.log(lists);
		for(var i=0;i<links.length;i++){
		links[i].bb=i;
		links[i].onmouseover=function(){
			for(var j=0;j<lists.length;j++){
				lists[j].style.display="none";
				links[j].className="";
				as[j].id="";
			}
			lists[this.bb].style.display="block";
			links[this.bb].className="btn-btn";
			as[this.bb].id="idname"
		}
	}
	}
	

	//  轮播图
function lbXb(xb){
	var lbimgs=$('.lb-img')[xb];
	var lbas=getChild(lbimgs);
	var lbbtns=$('.b-btn')[xb];
	var lblis=getChild(lbbtns);
	var lbaw=parseInt(getStyle(lbas[0],'width'));
	lbas[0].style.left=0;
	var now=0;
	var next=0;
	var flag=true;
	var ts=setInterval(lunbo,3000);
	function lunbo(){
		if(!flag){return};
		flag=false;
		next++;
		if(next==lbas.length){
			next=0
		}
		lbas[next].style.left=lbaw+'px'; 
		animate(lbas[now],{left:-lbaw},500);
		animate(lbas[next],{left:0},500,function(){
			flag=true;
		});
		lblis[now].className="";
		lblis[next].className="lunbo";
		now=next; 
	}
	var lbboxs=$('.fz-btn')[xb];
	lbboxs.onmouseover=function(){
		clearInterval(ts);
	}
	lbboxs.onmouseout=function(){
		ts=setInterval(lunbo,3000);
	}

	var lbl=$('.l-btn')[xb];    
	lbl.onclick=function(){
		if(!flag){return};
		flag=false;
		next--;
		if(next==-1){
			next=lbas.length-1;
		}
		lbas[next].style.left=-lbaw+'px';
		animate(lbas[now],{left:lbaw},500)
		animate(lbas[next],{left:0},500,function(){
			flag=true;
		});
		lblis[now].className="";
		lblis[next].className="lunbo";
		now=next;
	}
	var lbr=$('.r-btn')[xb];
	lbr.onclick=function(){
		lunbo();
	}
	for(var i=0;i<lblis.length;i++){
		lblis[i].cc=i;
		lblis[i].onclick=function(){
			if(now==this.cc||!flag){return;}
			flag=false;
			if(this.cc>now){
				lbas[this.cc].style.left=lbaw+'px';
				animate(lbas[now],{left:-lbaw},400)
			}
			if(this.cc<now){
				lbas[this.cc].style.left=-lbaw+'px';
				animate(lbas[now],{left:lbaw},400)
			}
			animate(lbas[this.cc],{left:0},400,function(){
				flag=true;
			})
			lblis[now].className="";
			lblis[this.cc].className="lunbo";
			now=next=this.cc;
		}
	}
}
var lbbox=$('.fz-btn');
for(var i=0;i<lbbox.length;i++){
	lbXb(i);
}


  // 图片动画效果
    function dhxg(l){
  	    var dh=getClass('dh')[l];
	    var dhimg=dh.getElementsByTagName('img')[0];
	    dh.onmouseover=function(){
	  	    animate(dhimg,{marginLeft:-8},300)
	    }
	    dh.onmouseout=function(){
	  	    animate(dhimg,{marginLeft:0},300)
	    }
    }
    var dh=getClass('dh');
    for(var i=0;i<dh.length;i++){
    	dhxg(i)
    }


  //  右侧栏
var over=getClass('over');
	for(var i=0;i<over.length;i++){
		var carD=getClass('car-down',over[i])[0];
		Lmove(over[i],carD);		
	}
	function Lmove(car,carD){
		car.onmouseover=function(){
		animate(carD,{left:-75},200,Tween.Quad.easeIn)
		}
		car.onmouseout=function(){
			animate(carD,{left:0},200,Tween. Bounce.easeInOut)
		}
	}

	// 天天轮播
    var Tbox=$('.tt-bottom2')[0];
    var Timg=Tbox.getElementsByTagName('li');
    var Th=parseInt(getStyle(Timg[0],'height'));
    Tbox.style.height=Timg.length*Th+'px';
    //alert(Th)
    var tt=0;
    var Rt=setInterval(Rtt,2000)
    function Rtt(){
    	tt++;
    	insertBefore(getList(Tbox),getFirst(Tbox));
    	Tbox.style.marginTop=-Th+'px';
    	animate(Tbox,{marginTop:0})
    }
    Tbox.onmouseover=function(){
    	clearInterval(Rt);
    }
    Tbox.onmouseout=function(){
    	Rt=setInterval(Rtt,2000);
    }


    var Hb=$('.h-btn')[0];
    var Head=$('.head2')[0]
    Hb.onclick=function(){
    	Head.style.display="none";
    }



    var lcfls=$('.fzxb');
	var lclis=$('li',$('.louceng')[0]);
	var fonts=$('.font',$('.louceng')[0]);
	var nums=$('.num',$('.louceng')[0]);
	//alert(nums.length)
	var arr=[];
	for(var i=0;i<lcfls.length;i++){
		arr.push(lcfls[i].offsetTop);
		lclis[i].index=i;
		lclis[i].onclick=function(){
			animate(document.body,{scrollTop:arr[this.index]})
			animate(document.documentElement,{scrollTop:arr[this.index]})
		}
	}
	window.onscroll=function(){
		var doc=document.body.scrollTop?document.body:document.documentElement;
		for(var i=0;i<arr.length;i++){
			if((doc.scrollTop+100)>=arr[i]){
				for(var j=0;j<fonts.length;j++){
					fonts[j].style.display='none';
					nums[j].style.display='block';
				}
				fonts[i].style.display='block';
				nums[i].style.display='none';
			}
			var louceng=$('.louceng')[0]
			if(doc.scrollTop>arr[0]){
				louceng.style.display='block';
			}
			if(doc.scrollTop<arr[0]){
				louceng.style.display='none';
			}
			if(doc.scrollTop>arr[arr.length-1]){
				louceng.style.display='none';
			}
		}
	}

})