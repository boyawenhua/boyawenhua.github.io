;(function($){lay=function(list){var options={title:'',content:' ',icon:'',type:'msg',delayTime:2000,autoClose:true,closeOther:false,swiper:true,pagination:true,loop:true,onMouse:true,before:function(){console.log('before')},close:function(obj,layType){if(obj.parents(".lay-wrap").hasClass("lay-image-main")){obj.parents(".lay-wrap").remove();}else{$(".lay-msg-main").remove();$(".lay-load-main").remove();}
return false;}}
for(var i in options){if(list[i]==undefined){list[i]=options[i]}}
list.before&&list.before()
var layHtml='';if(list.type=='image'){layHtml='';layHtml+="<div class=\"lay-wrap lay-image-main\">";layHtml+="<div class=\"lay-load-shadow\"></div>";layHtml+="<div class=\"lay-load-body\">";layHtml+="<a class=\"lay-close\"><i class=\"fa fa-remove\"></i></a>";layHtml+="<div class='box_text'>"+list.title+"</div>";layHtml+="<img src=\""+list.content+"\">";if(list.swiper===true){layHtml+="<div class='lay-image-btn-item'>";layHtml+="<div class='lay-image-btn-info'>";layHtml+="<a class='lay-prev'><i class='fa fa-angle-left'></i></a>";layHtml+="<a class='lay-next'><i class='fa fa-angle-right'></i></a>";layHtml+="</div>";layHtml+="</div>";if(list.pagination===true){layHtml+="<div class='lay-image-pagination'>";for(var pagelist=0;pagelist<=imglist.length-1;pagelist++){if(imgIndex==pagelist){layHtml+="<li class='active'></li>";}else{layHtml+="<li></li>";}}
layHtml+="</div>";}}
layHtml+="</div>";layHtml+="</div>";}else if(list.type=='msg'){layHtml='';layHtml+="<div class=\"lay-wrap lay-msg-main\">";layHtml+="<div class=\"lay-load-body\">";layHtml+="<p><i class=\"fa fa-"+list.icon+"\"></i>"+list.content+"</p>";layHtml+="</div>";layHtml+="</div>";}else{list.icon=list.icon==''?'spinner':list.icon;layHtml='';layHtml+="<div class=\"lay-wrap lay-load-main\">";layHtml+="<div class=\"lay-load-body\">";layHtml+="<a class=\"lay-load\"><i class=\"fa fa-"+list.icon+"\"></i></a>";layHtml+="</div>";layHtml+="</div>";}
if(list.closeOther===true)$(".lay-msg-main,.lay-load-main").remove();if(layHtml.length>=0)$('body').append(layHtml);$(".lay-prev,.lay-next").on("click",function(){if($(this).hasClass("lay-prev")){if(imgIndex>0){var imgsrc=$(imglist[parseInt(imgIndex)-1]).attr('src');$(this).parents(".lay-load-body").find('img').attr('src',imgsrc);imgIndex=parseInt(imgIndex)-1;}else{looper(1);}}else{if(imgIndex<imglist.length-1){var imgsrc=$(imglist[parseInt(imgIndex)+1]).attr('src');$(this).parents(".lay-load-body").find('img').attr('src',imgsrc);imgIndex=parseInt(imgIndex)+1;}else{looper(0);}}
run_pagination();})
function run_pagination(){if(list.pagination===true){$(".lay-image-pagination li").siblings('li').removeClass("active");$('.lay-image-pagination li').eq(imgIndex).addClass('active');}}
function looper(loopType){if(list.loop===true){imgIndex=loopType==1?imglist.length-1:0;$(".lay-load-body").find('img').attr('src',$(imglist[imgIndex]).attr('src'));}}
$('.lay-image-pagination li').on('click',function(){$(this).addClass('active').siblings('li').removeClass('active');$(this).parents(".lay-load-body").find('img').attr('src',$(imglist[$(this).index()]).attr('src'));imgIndex=$(this).index();})
var close=$(".lay-close");close.on("click",function(){list.close&&list.close($(this))})
if(list.type!='image'){if(list.autoClose===true){var removeLay=setTimeout(function(){list.close&&list.close($(this),list.type);clearTimeout(removeLay);},list.delayTime)}}
if(list.onMouse===true){$('.lay-image-main .lay-load-body').on("mousewheel DOMMouseScroll",function(e){var delta=(e.originalEvent.wheelDelta&&(e.originalEvent.wheelDelta>0?1:-1))||(e.originalEvent.detail&&(e.originalEvent.detail>0?-1:1));if(delta>0){if(imgIndex>0){var imgsrc=$(imglist[parseInt(imgIndex)-1]).attr('src');$(".lay-load-body").find('img').attr('src',imgsrc);imgIndex=parseInt(imgIndex)-1;}else{looper(1)}}else if(delta<0){if(imgIndex<imglist.length-1){var imgsrc=$(imglist[parseInt(imgIndex)+1]).attr('src');$(".lay-load-body").find('img').attr('src',imgsrc);imgIndex=parseInt(imgIndex)+1;}else{looper(0);}}
run_pagination();});}
if($('.lay-image-main').length>1){console.log('只允许存在一个图片弹层');$('.lay-image-main').remove();return false;}}
var imglist=document.getElementsByClassName('layimg'),imgIndex=null;$('.layimg').on('click',function(){for(var i in imglist){if(imglist[i]==this){imgIndex=i;break;}}})})(jQuery)