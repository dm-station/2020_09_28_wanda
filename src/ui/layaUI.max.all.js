var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loadUI=(function(_super){
		function loadUI(){
			
		    this.loadBox=null;
		    this.load_pen=null;
		    this.num1=null;
		    this.num2=null;
		    this.num3=null;
		    this.start=null;
		    this.load_t0=null;
		    this.load_t1=null;
		    this.load_t2=null;
		    this.load_t3=null;
		    this.load_t4=null;
		    this.load_btn=null;

			loadUI.__super.call(this);
		}

		CLASS$(loadUI,'ui.test.loadUI',_super);
		var __proto__=loadUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadUI.uiView);

		}

		loadUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"load/load_bg.png"}},{"type":"Box","props":{"y":913,"x":197,"var":"loadBox"},"child":[{"type":"Image","props":{"skin":"load/load_pen.png"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"load_pen","skin":"load/load_pen.png","renderType":"mask"}}]},{"type":"Image","props":{"y":66,"x":89,"skin":"load/load_t0.png"}},{"type":"Image","props":{"y":5,"x":372,"var":"num1","skin":"load/num1.png"}},{"type":"Image","props":{"y":4,"x":381,"var":"num2","skin":"load/num0.png"}},{"type":"Image","props":{"y":4,"x":399,"var":"num3","skin":"load/num0.png"}},{"type":"Image","props":{"y":3,"x":417,"skin":"load/num_per.png"}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"start","height":1500},"child":[{"type":"Image","props":{"y":857,"x":176,"var":"load_t0","skin":"load/load_t1.png"}},{"type":"Image","props":{"y":913,"x":176,"var":"load_t1","skin":"load/load_t2.png"}},{"type":"Image","props":{"y":961,"x":176,"var":"load_t2","skin":"load/load_t3.png"}},{"type":"Image","props":{"y":1007,"x":176,"var":"load_t3","skin":"load/load_t4.png"}},{"type":"Image","props":{"y":1052,"x":176,"var":"load_t4","skin":"load/load_t5.png"}},{"type":"Image","props":{"y":1308,"x":375,"width":265,"var":"load_btn","skin":"load/load_btn.png","pivotY":42,"pivotX":132,"height":80}}]}]};
		return loadUI;
	})(View);
var p1UI=(function(_super){
		function p1UI(){
			
		    this.scene=null;
		    this.p1_btn1=null;
		    this.p1_btn2=null;
		    this.p1_btn3=null;
		    this.p1_btn=null;

			p1UI.__super.call(this);
		}

		CLASS$(p1UI,'ui.test.p1UI',_super);
		var __proto__=p1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p1UI.uiView);

		}

		p1UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":950,"x":206,"skin":"p1/p1_t1.png"}},{"type":"Image","props":{"y":368,"x":105,"var":"scene","skin":"p1/scene1.png"}},{"type":"Image","props":{"y":992,"x":98,"var":"p1_btn1","skin":"p1/p1_btn1.png"}},{"type":"Image","props":{"y":992,"x":295,"var":"p1_btn2","skin":"p1/p1_btn2.png"}},{"type":"Image","props":{"y":992,"x":491,"var":"p1_btn3","skin":"p1/p1_btn3.png"}},{"type":"Image","props":{"y":1286,"x":377,"width":265,"var":"p1_btn","skin":"p1/p1_btn.png","pivotY":40,"pivotX":132,"height":80}}]};
		return p1UI;
	})(View);
var p2UI=(function(_super){
		function p2UI(){
			
		    this.p2_s=null;
		    this.hand=null;
		    this.p2_btn1=null;
		    this.p2_btn2=null;

			p2UI.__super.call(this);
		}

		CLASS$(p2UI,'ui.test.p2UI',_super);
		var __proto__=p2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p2UI.uiView);

		}

		p2UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p2_bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"p2_s","skin":"p2/p2_s1.png"}},{"type":"Image","props":{"y":1154,"x":291,"width":192,"var":"hand","skin":"p2/p2_t1.png","pivotY":16,"pivotX":12,"height":35}},{"type":"Image","props":{"y":1235,"x":96,"var":"p2_btn1","skin":"p2/p2_btn1.png"}},{"type":"Image","props":{"y":1234,"x":390,"var":"p2_btn2","skin":"p2/p2_btn2.png"}}]};
		return p2UI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);