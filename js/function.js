

function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
                arr.push(alls[i])
			}
		}
		return arr;
	}
}

function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	flag=false;
	for(i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
		    flag=true;
		}
	}
	return flag;
}




 //兼容获取文本

function getText(obj,val){
	if(val==undefined){
		if(typeof obj.innerText=="string"){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(typeof obj.innerText=="string"){
			obj.textContent=val;
		}else{
			obj.innerText=val;
		}
	}
}



function getStyle(obj,attr){
	if(!obj.currentStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
/*function getStyle(obj,arrt){
  if(obj.currentStyle){
    return obj.currentStyle[arrt];
  }else{
    return getComputedStyle(obj,null)[arrt];
  }
}*/


//  函数简化

function $(selector,obj){    //第一个参数是选择器，第二个参数是范围
    var obj=obj||document;
    if(typeof selector==="string"){    //当选择器是字符串类型时，执行if语句
          //".aa"   "#bb"  "div"
        if(selector.charAt(0)==(".")){    //当截取类型字符串中的下标为0的值是“.”时，可以判断是通过类名获取
          	return getClass(selector.substring(1),obj);   //获取类名元素时，通过调用函数getClass，截取下标为1以后的所有的字符串
        }else if(selector.charAt(0)=="#"){   //截取下标为0的第一个字符串为“#”时，判断通过id来获取元素
          	return obj.getElementById(selector.substring(1));  //id是在document对象中获取，截取下标为1以后的所有的字符串进行判断
        }
        else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){   //获取的值是标签时
            return obj.getElementsByTagName(selector);     //标签是通过document对象中获取
        }
        else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
          	return document.createElement(selector.slice(1,-1))
        }
    }
    else if(typeof selector=="function"){
        window.onload=function(){
           	selector();
        }
     }
}



 //  获取所有子节点

function getChild(parent,t){
	var t=t||false;
    var childs=parent.childNodes;    
    var arr=[];
    if(t==true){
    	for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
             arr.push(childs[i]);
	    	}    	
	    }
    }else if(t==false){
    	for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1){
             arr.push(childs[i]);
	    	}    	
	    };	   
    }
    return arr;
}


 //获取第一个子节点
 function getFirst(obj){
     return getChild(obj)[0];
 }

  //获取最后一个子节点
 function getList(obj){
     var allChild=getChild(obj);
     return allChild[allChild.length-1];
 }
function getNum(obj,num){

}
 // 获取下一个兄弟节点
function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
      return
 // 获取任意一个 false;
    }
    while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
    	next=next.nextSibling;
    }
    if(next==null){
    	return false;
    }
    return next;
}
 // 获取上一个兄弟节点
function getUp(objs){
    var up=obj.previousSibling;
    if(up==null){
    	return false;
    }
    while(up.nodeType==8||(up.nodeType==3&&up.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
    	up=up.previousSibling;
    }
    if(up==null){
    	return false;
    }
    return up;
}



//插入到之前
function insertBefore(obj1,obj2){
	var parentNodes=obj2.parentNode;
	parentNodes.insertBefore(obj1,obj2);
}
//插入到之后
function insertAfter(obj1,obj2){
	var next=getNext(obj2);
	insertBefore(obj1,next);
}