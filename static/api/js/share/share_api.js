window._bd_share_main.F.module("share/share_api",function(n,t,a){n("base/tangram").T;var e=n("base/class").Class,i=n("component/comm_tools"),o=n("share/api_base");t.Api=e.create(function(n){var t=this,a={count:0,clicked:!1};t._init=function(){var e=t.getView();e.render(),e.on("getsharecount",function(){!function(t){window._bd_share_main.F.use("trans/data",function(a){a.get({type:"share_count",url:n.bdUrl||i.getPageUrl(),callback:function(n,a){t&&t({count:n,display:a})}})})}(function(n){a.count=n.count,e.setNumber(n.count,n.display)})}),e.init()},t._processAction=function(n){return{data:{type:"share"}}}},o.ApiBase)});