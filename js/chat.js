var ps_1212521432_sid = "CFCPOss4btID";
// safe-standard@gecko.js

var ps_1212521432_iso;
try {
	ps_1212521432_iso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.ps_1212521432_wid != null);
} catch(e) {
	ps_1212521432_iso = false;
}
if (ps_1212521432_iso) {
	window.ps_1212521432_wid = opener.ps_1212521432_wid + 1;
	ps_1212521432_sid = ps_1212521432_sid + "_" + window.ps_1212521432_wid;
} else {
	window.ps_1212521432_wid = 1;
}
function ps_1212521432_n() {
	return (new Date()).getTime();
}
var ps_1212521432_s = ps_1212521432_n();
function ps_1212521432_st(f, t) {
	if ((ps_1212521432_n() - ps_1212521432_s) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var ps_1212521432_ol = false;
function ps_1212521432_ow() {
	if (ps_1212521432_ol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + ps_1212521432_n();
		var url = "http://messenger.providesupport.com/messenger/1ltliyb838olu14ytw1zmpegip.html?ps_s=" + ps_1212521432_sid;
		if (false && !false) {
			window.open(url, pswn, pswo); 
		} else {
			var w = window.open("", pswn, pswo); 
			try {
				w.document.body.innerHTML += '<form id="pscf" action="http://messenger.providesupport.com/messenger/1ltliyb838olu14ytw1zmpegip.html" method="post" target="' + pswn + '" style="display:none"><input type="hidden" name="ps_s" value="'+ps_1212521432_sid+'"></form>';
				w.document.getElementById("pscf").submit();
			} catch (e) {
				w.location.href = url;
			}
		}
	} else if (1 == 2) {
		document.location = "http\u003a\u002f\u002f";
	}
}
var ps_1212521432_il;
var ps_1212521432_it;
function ps_1212521432_pi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != ps_1212521432_il) || (it != ps_1212521432_it)) {
		ps_1212521432_il = il;
		ps_1212521432_it = it;
		var d = document.getElementById('ps_islandvisuals_chat_invitation');
		if (d != null) {
			d.style.left  = Math.round(ps_1212521432_il) + "px";
			d.style.top  = Math.round(ps_1212521432_it) + "px";
		}
	}
	setTimeout("ps_1212521432_pi()", 100);
}
var ps_1212521432_lc = 0;
function ps_1212521432_si(t) {
	window.onscroll = ps_1212521432_pi;
	window.onresize = ps_1212521432_pi;
	ps_1212521432_pi();
	ps_1212521432_lc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1ltliyb838olu14ytw1zmpegip.html?ps_s=" + ps_1212521432_sid + "&ps_t=" + ps_1212521432_n() + "";
	var d = document.getElementById('ps_islandvisuals_chat_invitation');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="ps_1212521432_ld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function ps_1212521432_ld() {
	if (ps_1212521432_lc == 1) {
		var d = document.getElementById('ps_islandvisuals_chat_invitation');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	ps_1212521432_lc++;
}
if (false) {
	ps_1212521432_si(1);
}
var ps_1212521432_d = document.getElementById('ps_islandvisuals_chat_button');
if (ps_1212521432_d != null) {
	if (ps_1212521432_ol || (1 == 1) || (1 == 2)) {
		if (false) {
			ps_1212521432_d.innerHTML = '<table style="display:inline" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><a href="#" onclick="ps_1212521432_ow(); return false;"><img name="ps_1212521432_image" src="http://image.providesupport.com/image/1ltliyb838olu14ytw1zmpegip/offline-1972703166.jpg" width="180" height="100" border="0"></a></td></tr><tr><td align="center"><a href="http://www.providesupport.com/pb/1ltliyb838olu14ytw1zmpegip" target="_self"><img src="http://image.providesupport.com/lcbps.gif" width="140" height="17" border="0"></a></td></tr></table>';
		} else {
			ps_1212521432_d.innerHTML = '<a href="#" onclick="ps_1212521432_ow(); return false;"><img name="ps_1212521432_image" src="http://image.providesupport.com/image/1ltliyb838olu14ytw1zmpegip/offline-1972703166.jpg" width="180" height="100" border="0"></a>';
		}
	} else {
		ps_1212521432_d.innerHTML = '';
	}
}
var ps_1212521432_op = false;
function ps_1212521432_co() {
	var w1 = ps_1212521432_ci.width - 1;
	ps_1212521432_ol = (w1 & 1) != 0;
	ps_1212521432_sb(ps_1212521432_ol ? "http://image.providesupport.com/image/1ltliyb838olu14ytw1zmpegip/online-472241702.jpg" : "http://image.providesupport.com/image/1ltliyb838olu14ytw1zmpegip/offline-1972703166.jpg");
	ps_1212521432_scf((w1 & 2) != 0);
	var h = ps_1212521432_ci.height;

	if (h == 1) {
		ps_1212521432_op = false;

	// manual invitation
	} else if ((h == 2) && (!ps_1212521432_op)) {
		ps_1212521432_op = true;
		ps_1212521432_si(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!ps_1212521432_op)) {
		ps_1212521432_op = true;
		ps_1212521432_si(2);
		//alert("Auto invitation in standard code");
	}
}
var ps_1212521432_ci = new Image();
ps_1212521432_ci.onload = ps_1212521432_co;
var ps_1212521432_pm = false;
var ps_1212521432_cp = ps_1212521432_pm ? 30 : 60;
var ps_1212521432_ct = null;
function ps_1212521432_scf(p) {
	if (ps_1212521432_pm != p) {
		ps_1212521432_pm = p;
		ps_1212521432_cp = ps_1212521432_pm ? 30 : 60;
		if (ps_1212521432_ct != null) {
			clearTimeout(ps_1212521432_ct);
			ps_1212521432_ct = null;
		}
		ps_1212521432_ct = ps_1212521432_st("ps_1212521432_rc()", ps_1212521432_cp);
	}
}
function ps_1212521432_rc() {
	ps_1212521432_ct = ps_1212521432_st("ps_1212521432_rc()", ps_1212521432_cp);
	try {
		ps_1212521432_ci.src = "http://image.providesupport.com/cmd/1ltliyb838olu14ytw1zmpegip?" + "ps_t=" + ps_1212521432_n() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + ps_1212521432_sid + "" + "";
	} catch(e) {
	}
}
ps_1212521432_rc();
var ps_1212521432_cb = "http://image.providesupport.com/image/1ltliyb838olu14ytw1zmpegip/offline-1972703166.jpg";
function ps_1212521432_sb(b) {
	if (ps_1212521432_cb != b) {
		var i = document.images['ps_1212521432_image'];
		if (i != null) {
			i.src = b;
		}
		ps_1212521432_cb = b;
	}
}
