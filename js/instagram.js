var Instagram=function(){var t=[],i=function(t){for(var i in t){for(var a="",e=0,r=t[i].srclist.length;e<r;e++)a+='<li>\t\t\t\t\t\t\t\t<div class="img-box">\t\t\t\t\t\t\t\t\t<a class="img-bg" rel="example_group" href="'+t[i].bigSrclist[e]+'" title="'+t[i].text[e]+'"></a>\t\t\t\t\t\t\t\t\t<img lazy-src="'+t[i].srclist[e]+'" alt="">\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</li>';$('<section class="archives album"><h1 class="year">'+t[i].year+"<em>"+t[i].month+'月</em></h1>\t\t\t\t<ul class="img-box-ul">'+a+"</ul>\t\t\t\t</section>").appendTo($(".instagram"))}$(".instagram").lazyload(),n(),setTimeout(function(){!function(t){for(var i in t)for(var a=0,e=t[i].srclist.length;a<e;a++){var n=t[i].bigSrclist[a];(new Image).src=n}}(t)},3e3),$("a[rel=example_group]").fancybox()},a=function(t){if(t.indexOf("outbound-distilleryimage")>=0){return"http://distilleryimage"+t.match(/outbound-distilleryimage([\s\S]*?)\//)[1]+".ak.instagram.com/"+(i=t.split("/"))[i.length-1]}var i;return"http://photos-g.ak.instagram.com/hphotos-ak-xpf1/"+(i=t.split("/"))[i.length-1]},e=function(n){$(".open-ins").html("图片来自instagram，正在加载中…"),$.ajax({url:n,type:"GET",dataType:"jsonp",success:function(n){if(200==n.meta.code){t=t.concat(n.data);var r=n.pagination.next_url;r?e(r):($(".open-ins").html("图片来自instagram，点此访问"),function(t){for(var e={},n=0,r=t.length;n<r;n++){var s=new Date(1e3*t[n].created_time),o=s.getFullYear(),l=s.getMonth()+1,c=a(t[n].images.low_resolution.url),u=a(t[n].images.standard_resolution.url),m=t[n].caption?t[n].caption.text:"",g=o+"-"+l;e[g]?(e[g].srclist.push(c),e[g].bigSrclist.push(u),e[g].text.push(m)):e[g]={year:o,month:l,srclist:[u],bigSrclist:[u],text:[m]}}i(e)}(t))}else alert("access_token timeout!")}})},n=function(){if($(document).width()<=600)$(".img-box").css({width:"auto",height:"auto"});else{var t=$(".img-box-ul").width(),i=Math.max(.26*t,157);$(".img-box").width(i).height(i)}};return{init:function(){var t=$(".instagram").attr("data-client-id"),i=$(".instagram").attr("data-user-id");if(!t)return alert("Didn't set your instagram client_id.\nPlease see the info on the console of your brower."),void console.log("Please open 'http://instagram.com/developer/clients/manage/' to get your client-id.");e("https://api.instagram.com/v1/users/"+i+"/media/recent/?client_id="+t+"&count=100"),$(window).resize(function(){n()})}}}();$(function(){Instagram.init()});