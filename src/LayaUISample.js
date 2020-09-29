var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
var Tween = Laya.Tween;
var Ease = Laya.Ease;

document.addEventListener("WeixinJSBridgeReady", function () {
	WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		document.getElementById('audio').play();
		// document.getElementById('audio').pause();
	});
}, false);
var audio = document.getElementById("audio");
audio.addEventListener('ended', function () {
	audio.play()
	setTimeout(function () {audio.play(); }, 10);
}, false);

document.addEventListener('click', audioPlay)
function audioPlay(){
	document.removeEventListener('click', audioPlay)
	audio.play()
}

var os  = function(){
	var u = navigator.userAgent;
	var u2 = navigator.userAgent.toLowerCase();
	return { //移动终端版本信息
		mobile: !!u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为移动终端
		pc: !u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为pc终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //是否为ios终端
		android: u.indexOf('Android') > -1, //是否为android终端
		weixin: u2.match(/MicroMessenger/i) == "micromessenger", //是否为微信客户端
		newsapp: u.indexOf('NewsApp') > -1,//是否为网易新闻客户端
		yixin: u.indexOf('YiXin') > -1,//易信客户端
		weibo: u.indexOf('weibo') > -1,//微博客户端
		yunyuedu:u.indexOf('PRIS') > -1 //云阅读客户端
	};
};

document.body.addEventListener('touchmove', function (e) {
	e.preventDefault(); 
}, {passive: false}); 

window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

function getRequestParams(strname) {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest[strname];
}

function getStageHeight(){
	var s = document.body.clientWidth / 750
	var stageW = document.body.clientWidth / s
	var stageH = document.body.clientHeight / s
	return stageH
}

function sf(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.scaleX =num;
		json.scaleY =num;
	}else{
		type = 1;
		json.scaleX =1;
		json.scaleY =1;
	}
	Tween.to(obj,json,time,Ease.linearIn,Handler.create(self, function(){sf(type,obj,num,time);}));
}

function butterfly(obj,sx,sy,y,alpha){
	var _y=obj.y
	Tween.to(obj,{scaleX:sx,scaleY:sy,y:_y+y,alpha:alpha},450,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{scaleX:1,scaleY:1,y:_y,alpha:1},750,Ease.linearIn, Handler.create(self, function(){
			butterfly(obj,sx,sy,y,alpha)
		}));		
	}));
};

function rotation(obj,rotate,time){
	Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
			Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
				rotation(obj,rotate,time)
			}));
		}));
	}));
}
//x缩放比例=舞台宽度/设计宽度
var scaleRateW
//y缩放比例=舞台高度/设计高度
var scaleRateH
// 当前层级
var zindex = 0
//token
var token = getRequestParams('token')||Math.random();
//当前选择的模板ID
var now = 0;

function p1() {
	p1UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	now=1;
	self['p1_btn1'].skin='p1/p1_btn1s.png'
	self.p1_btn1.on(Event.CLICK,this,function () {
		select(1)
	})
	self.p1_btn2.on(Event.CLICK,this,function () {
		select(2)
	})
	self.p1_btn3.on(Event.CLICK,this,function () {
		select(3)
	})

	function select(id){
		self['p1_btn1'].skin='p1/p1_btn1.png'
		self['p1_btn2'].skin='p1/p1_btn2.png'
		self['p1_btn3'].skin='p1/p1_btn3.png'
		self.scene.skin='p1/scene'+id+'.png'
		self['p1_btn'+id].skin='p1/p1_btn'+id+'s.png'
		now=id
	}
	self.p1_btn.on(Event.CLICK,this,function () {
		console.log('now',now)
		if(now===0){
			alert('请选择')
		}else{
			_czc.push(['_trackEvent', '首页', 'btn', '点击投递'+now])
			Laya.stage.removeChild(self);
			Laya.stage.addChildAt(new p2(),zindex);
		}
	})
}

function p2() {
	p2UI.super(this);
	var self = this;
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	sf(1,self.hand,0.96,600)

	self.p2_s.skin='p2/p2_s'+now+'.png'
	$('.poster').attr('src','./img/p3_s'+now+'.jpg').css('display','block')

	$('.btn1').css('top',parseInt((self.p2_btn1.y+self.y)/Laya.stage.height*100)+'%').css('left',parseInt(self.p2_btn1.x/750*100)+'%').css('display','block')
	$('.btn2').css('top',parseInt((self.p2_btn2.y+self.y)/Laya.stage.height*100)+'%').css('left',parseInt(self.p2_btn2.x/750*100)+'%').css('display','block')
	
	$('.btn1').one('click', function(){
		_czc.push(['_trackEvent', '生成海报页', 'btn', '再写一封'])
		$('.poster,.btn1,.btn2').css('display','none')
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p1(),zindex);
    });
	$('.btn2').on('click', function(){
		_czc.push(['_trackEvent', '生成海报页', 'btn', '呼朋唤友'])
		$('.mask').css('display','block')
    });
	$('.mask').on('click', function(){
		$('.mask').css('display','none')
    });

}

var loadView = null;
function load() {
	var self = this;
	loadUI.super(this);
	loadView = this;
	var Event = laya.events.Event;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth)
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight)
	// if(Laya.stage.height<1289)self.y=-211
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2

	console.log('load：'+Laya.stage.width+','+Laya.stage.height,scaleRateW,scaleRateH,'y:'+self.y)
	self.num1.visible=false
	self.num2.visible=false
	self.load_pen.x=-363

	self.start.visible=false

	self.load_btn.on(Event.CLICK,this,function () {
		_czc.push(['_trackEvent', '介绍首页', 'btn', '提笔写信'])
		Laya.stage.removeChild(loadView);
		Laya.stage.addChildAt(new p1(),zindex);
	})
	
}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);
Laya.class(p2, "p2", p2UI);

//程序入口
Laya.init(750,1500,Laya.WebGL)
//缩放模式
os().pc?Laya.stage.scaleMode='showall':Laya.stage.scaleMode='fixedwidth'
//对齐方式
Laya.stage.alignH='center';
Laya.stage.alignV='top';
// 显示fps
// Laya.Stat.show(0,0);
// 背景颜色
Laya.stage.bgColor='#fff';
//背景透明
// Config.isAlpha = true;//设置画布是否透明，只对2D(WebGL)、3D有效。
// Laya.Render.isWebGL ? Laya.stage.bgColor = "none" : Laya.stage.bgColor = null;

var assets = [
	{url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p2_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_s1.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_s2.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_s3.jpg',type:Laya.Loader.IMAGE},
	{url:'res/atlas/p1.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p2.atlas',type:Laya.Loader.ATLAS},
];

var imgs=[
	// {url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
]

assets.push.apply(assets,imgs)

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);

function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/load.atlas'], Handler.create(this, loading), null, Laya.Loader.ATLAS);
}

function loading() {
	Laya.stage.addChildAt(new load(),zindex);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	setTimeout(function() {
		startFun()
		// Laya.stage.removeChild(loadView);
		// Laya.stage.addChildAt(new p2(),zindex);
	}, 1000);
}

function startFun(){
	loadView.loadBox.visible=false
	loadView.start.visible=true
	loadView.load_btn.scale(0,0)
	var t = 0
	for (var i = 0; i < 5; i++) {
		loadView['load_t'+i].alpha = 0
		Tween.to(loadView['load_t'+i],{alpha:1},800,Ease.linearIn,Handler.create(loadView, function(){
			t++
			console.log('i',i,t)
			if(t===5){
				sf(1,loadView.load_btn,1.05,600)
			}
		}),1500*i);
	}
}

// 加载进度侦听器
function onLoading(progress) {
	var count = parseInt(progress*100).toString()
	var nums = count.split('')
	// console.log("加载进度: " , progress,count,nums,count.length);
	if(count.length===1){
		loadView.num3.visible=true
		loadView.num3.skin='load/num'+count+'.png'
	}else if(count.length===2){
		loadView.num2.visible=true
		loadView.num2.skin='load/num'+nums[0]+'.png'
		loadView.num3.skin='load/num'+nums[1]+'.png'
	}else if(count.length===3){
		loadView.num1.visible=true
		loadView.num2.visible=true
		loadView.num1.skin='load/num'+nums[0]+'.png'
		loadView.num2.skin='load/num'+nums[1]+'.png'
		loadView.num3.skin='load/num'+nums[2]+'.png'
	}
	loadView.load_pen.x=-363+parseInt(363*progress)
	// loadView.percent.text=parseInt(progress*100)+"%";//文字百分比
}