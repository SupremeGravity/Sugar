function yb(a,b,c,d,e,g){var f=a.toFixed(20),i=f.search(/\./);f=f.search(/[1-9]/);i=i-f;if(i>0)i-=1;e=w.max(w.min((i/3).floor(),e===m?c.length:e),-d);d=c.charAt(e+d-1);if(i<-9){e=-3;b=i.abs()-9;d=c.slice(0,1)}return(a/(g?(2).pow(10*e):(10).pow(e*3))).round(b||0).format()+d.trim()}
x(v,m,m,{random:function(a,b){var c,d;if(arguments.length==1){b=a;a=0}c=w.min(a||0,G(b)?1:b);d=w.max(a||0,G(b)?1:b);return O(w.random()*(d-c)+c)}});
x(v,j,m,{log:function(a){return w.log(this)/(a?w.log(a):1)},abbr:function(a){return yb(this,a,"kmbt",0,4)},metric:function(a,b){return yb(this,a,"n\u03bcm kMGTPE",4,G(b)?1:b)},bytes:function(a,b){return yb(this,a,"kMGTPE",0,G(b)?4:b,j)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return this%a===0},format:function(a,b,c){var d,e,g=/(\d+)(\d{3})/;if(u(b).match(/\d/))throw new TypeError("Thousands separator cannot contain numbers.");
d=L(a)?O(this,a||0).toFixed(w.max(a,0)):this.toString();b=b||",";c=c||".";e=d.split(".");d=e[0];for(e=e[1]||"";d.match(g);)d=d.replace(g,"$1"+b+"$2");if(e.length>0)d+=c+pa((a||0)-e.length,"0")+e;return d},hex:function(a){return this.pad(a||1,m,16)},upto:function(a,b,c){return N(this,a,b,c||1)},downto:function(a,b,c){return N(this,a,b,-(c||1))},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return u.fromCharCode(this)},pad:function(a,b,c){return Q(this,
a,b,c)},ordinalize:function(){var a=this.abs();a=parseInt(a.toString().slice(-2));return this+ra(a)},toNumber:function(){return parseFloat(this,10)}});D(v,j,m,"round,floor,ceil",function(a,b){a[b]=function(c){return O(this,c,b)}});D(v,j,m,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,b){a[b]=function(c,d){return w[b](this,c,d)}});
