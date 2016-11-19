/**
 * 将人民币数字转换成汉字大写，并为ID为upperInputId的Input设置
 * 
 * @param lowerInputId
 *            小写人民币Input Id号
 * @param upperInputId
 *            大写人民币Input Id号
 */  
function toUpper(num){  

    if(isNull(num)){  
        return ;  
    }  
    if(num.lastIndexOf(".") == num.length - 1 ){  
        return ;  
    }  
    for ( var int = 0; int < num.length; int++) {  
        if(checkNum(num)){  
            break;  
        }else{  
            num = removeLastChar(num);  
            int --;  
        }  
        if(isNull(num)) return;  
    }  

    return ToTrans(num);
      
    function isNull(num){  
        if(num == null || num == ""){  
           
            return true;  
        }  
        return false;  
    }  
}  
// 校验是否为正浮点数或正整数
function checkNum(str){  
  var patrn=/^([+]?)\d*\.?\d+$/;  
  return patrn.test(str);  
};  
  
// 移除最后一个字符
function removeLastChar(str){  
    if(str == null || str == ""){  
        return str;  
    }  
    return str.substring(0,str.length-1);  
}  
  
function ToTrans(a) {  
    var b = 9.999999999999E10,  
    f = "\u96f6",  
    h = "\u58f9",  
    g = "\u8d30",  
    e = "\u53c1",  
    k = "\u8086",  
    p = "\u4f0d",  
    q = "\u9646",  
    r = "\u67d2",  
    s = "\u634c",  
    t = "\u7396",  
    l = "\u62fe",  
    d = "\u4f70",  
    i = "\u4edf",  
    m = "\u4e07",  
    j = "\u4ebf",  
    u = "人民币",  
    o = "\u5143",  
    c = "\u89d2",  
    n = "\u5206",  
    v = "\u6574";  
    a = a.toString();  
    if (a == "") {  
        alert("转换内容不能为空!");  
        return "";  
    }  
    if (a.match(/[^,.\d]/) != null) {  
        alert("输入有误,请输入小数点和纯数字!");  
        return "";  
    }  
    if (a.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {  
        alert("输入有误,请输入小数点和纯数字!");  
        return "";  
    }  
    a = a.replace(/,/g, "");  
    a = a.replace(/^0+/, "");  
    if (Number(a) > b) {  
        alert("\u5bf9\u4e0d\u8d77,\u4f60\u8f93\u5165\u7684\u6570\u5b57\u592a\u5927\u4e86!\u6700\u5927\u6570\u5b57\u4e3a99999999999.99\uff01");  
        return "";  
    }  
    b = a.split(".");  
    if (b.length > 1) {  
        a = b[0];  
        b = b[1];  
        b = b.substr(0, 2);  
    } else {  
        a = b[0];  
        b = "";  
    }  
    h = new Array(f, h, g, e, k, p, q, r, s, t);  
    l = new Array("", l, d, i);  
    m = new Array("", m, j);  
    n = new Array(c, n);  
    c = "";  
    if (Number(a) > 0) {  
        for (d = j = 0; d < a.length; d++) {  
            e = a.length - d - 1;  
            i = a.substr(d, 1);  
            g = e / 4;  
            e = e % 4;  
            if (i == "0") j++;  
            else {  
                if (j > 0) c += h[0];  
                j = 0;  
                c += h[Number(i)] + l[e];  
            }  
            if (e == 0 && j < 4) c += m[g];  
        }  
        c += o;  
    }  
    if (b != "") for (d = 0; d < b.length; d++) {  
        i = b.substr(d, 1);  
        if (i != "0") c += h[Number(i)] + n[d];  
    }  
    if (c == "") c = f + o;  
    if (b.length < 2) c += v;  
    return c;  
}  

Array.prototype.del=function(dx){
	if(isNaN(dx)||dx>this.length){
		return false;
	}
    for(var i=0,n=0;i<this.length;i++){
       if(this[i]!=this[dx]){
         this[n++]=this[i]
       }
     }
     this.length-=1
};

function getProductID() {
	   var tm=new Date();
	   var str=tm.getMilliseconds()+tm.getSeconds()*60+tm.getMinutes()*3600+tm.getHours()*60*3600+tm.getDay()*3600*24+tm.getMonth()*3600*24*31+tm.getYear()*3600*24*31*12;
	   return str;
};

var product;
var order_num = 0;
var order_detail_array =new Array();

function COrder(classify, catena, name, colour, price, quantity,
		totalprices, discount, endprices, remark1,flag,pruductName,id) {
	this.classify = classify;
	this.catena = catena;
	this.name = name;
	this.colour = colour;
	this.price = price;
	this.quantity = quantity;
	this.totalprices = totalprices;
	this.discount = discount;
	this.endprices = endprices;
	this.remark1 = remark1;
	this.flag = flag;
	this.pruductName = pruductName;
	this.id = id;
}

function SOrder1(sSelectPin1, sSelectProduct1, sSelectProduct2, sSelectProduct3, s_product1_open, sdoorSelected1,
		scolorSelected1, s_product1_width, s_product1_thick, s_product1_height,s_product1_price,s_product_sum1,s_product_discount1,
		s_product_remark1,totalprices1,endprices1,flag,pruductName,id) {
	this.sSelectPin1 =  sSelectPin1;
	this.sSelectProduct1 = sSelectProduct1;
	this.sSelectProduct2 = sSelectProduct2;
	this.sSelectProduct3 = sSelectProduct3;
	this.s_product1_open = s_product1_open;
	this.sdoorSelected1 = sdoorSelected1;
	this.scolorSelected1 = scolorSelected1;
	this.s_product1_width = s_product1_width;
	this.s_product1_thick = s_product1_thick;
	this.s_product1_height = s_product1_height;
	this.s_product1_price = s_product1_price;
	this.s_product_sum1 = s_product_sum1;
	this.s_product_discount1 = s_product_discount1;
	this.s_product_remark1 = s_product_remark1;
	this.totalprices1 = totalprices1;
	this.endprices1 = endprices1;
	this.flag = flag;
	this.pruductName = pruductName;
	this.id = id;
}

function SOrder3(sSelectPin3, sSelectProduct7,  s_product3_open, sdoorSelected3,
		scolorSelected3, s_product3_width, s_product3_thick, s_product3_height,s_product3_price,s_product_sum3,s_product_discount3,
		s_product_remark3,totalprices3,endprices3,method,flag,pruductName,id) {
	this.sSelectPin3 =  sSelectPin3;
	this.sSelectProduct7 = sSelectProduct7;
	this.s_product3_open = s_product3_open;
	this.sdoorSelected3 = sdoorSelected3;
	this.scolorSelected3 = scolorSelected3;
	this.s_product3_width = s_product3_width;
	this.s_product3_thick = s_product3_thick;
	this.s_product3_height = s_product3_height;
	this.s_product3_price = s_product3_price;
	this.s_product_sum3 = s_product_sum3;
	this.s_product_discount3 = s_product_discount3;
	this.s_product_remark3 = s_product_remark3;
	this.totalprices3 = totalprices3;
	this.endprices3 = endprices3;
	this.method = method;
	this.flag = flag;
	this.pruductName = pruductName;
	this.id = id;
}
function SOrder7(s_product_material,s_product7_size,s_product_discount7,
		s_product_remark7,s_product7_price,endprices7,flag,pruductName,id) {
	this.s_product_material =  s_product_material;
	this.s_product7_size = s_product7_size;
	this.s_product7_price = s_product7_price;
	this.s_product_discount7 = s_product_discount7;
	this.s_product_remark7 = s_product_remark7;
	this.endprices7 = endprices7;
	this.flag = flag;
	this.pruductName = pruductName;
	this.id = id;
}

function addCOrder() {
	var discount = $("#product_discount").val();
	var classify = $("#classify").children('option:selected').text();
	var catena = $("#catena").children('option:selected').text();
	var name = $("#productname").children('option:selected').text();
	var colour = $("#colorSelected").children('option:selected').text();
	var price = $("#selectedPrice").html();

	var quantity = $("#product_sum").val();
	var totalprices = parseInt(price) * parseInt(quantity);
	var endprices = Math.ceil(parseInt(price) * parseInt(quantity)* parseFloat(discount)*disUnit);
	var remark1 = $("#product_remark").val();
	var pruductName = $("#pruductName0").val();
	var pID = $("#cpid0").val();
	if(pID==0){
		var pID = getProductID();
	}else{
		var delIndex;
		var delNum=0;
		for(var i = 0; i < order_detail_array.length; i++){
			var order = order_detail_array[i];
			if(order.flag==0){	
				if(order.id==pID){
					delIndex=i;
					delNum=order.endprices;
				}
			}
		}
		order_num = order_num - delNum;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
		order_detail_array.del(delIndex);
		$("tr[id="+pID+"]").remove();
	}
	var cOrder = new COrder(classify, catena, name, colour, price,
			quantity, totalprices, discount, endprices, remark1,0,pruductName,pID);
	order_detail_array.push(cOrder);
	var newRow = "<tr id="+pID+"><td>" + pruductName + "</td><td>" + classify + "</td><td>" + catena
	+ "</td><td>" + name + "</td><td>" + colour + "</td><td>" + quantity + "</td><td><a href=# title='当前折扣：" + discount + "'>**</a></td><td>"
	+ endprices + "</td><td>" + remark1 + "</td></tr>";
	$("#c_order tr:last").after(newRow);
	order_num = order_num + endprices;
	$("#order_num").html(order_num + "元");
	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	$("#c_order tr:last td:last").dblclick(
			function() {
				if(confirm("是否确认删除？")){
					var trSeq = $(this).parent().parent().find("tr").index(
							$(this).parent());
					if (trSeq > 1) {
						if (order_num > 0) {
							var os = $(this).parent().find('td').eq(7).text();
							order_num = order_num - parseInt(os);
							$("#order_num").html(order_num + "元");
							$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
						}
						var delIndex;
						for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
							if(order.flag==0){	
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
							}
						}
						order_detail_array.del(delIndex);
						$(this).parent().remove();
					}
				 }
			});
	
	$("#c_order tr:last td:first").dblclick(
			function() {
				if(confirm("是否确认编辑？")){
                    var epid = $(this).parent().attr("id");
                    for(var i = 0; i < order_detail_array.length; i++){
						var order = order_detail_array[i];	
							if(order.id==epid){
								rowEditControl(0);
								$("#product_discount").val(order.discount);
								$("#classify option:contains('"+order.classify+"')").attr("selected",true);
								selectClassify();
								$("#catena option:contains('"+order.catena+"')").attr("selected",true);
								selectCatena();
								$("#productname option:contains('"+order.name+"')").attr("selected",true);
								selectProduct("#productname");
								$("#colorSelected option:contains('"+order.colour+"')").attr("selected",true);
								$("#selectedPrice").html(order.price);
								$("#product_sum").val(order.quantity);
								$("#product_remark").val(order.remark1);
								$("#pruductName0").val(order.pruductName);
								$("#cpid0").val(order.id);
							}
					}
				 }
			});
	$("#cpid0").val(0)
	$('#myModal').modal('hide');
}

function addSOrder(id) {
	var spID = $("#spid"+id).val();
	if(spID==0){
		spID = getProductID();
	}else{
		var delIndex;
		var delNum=0;
		for(var i = 0; i < order_detail_array.length; i++){
			var order = order_detail_array[i];
				if(order.id==spID){
					delIndex=i;
					if(id==1||id==2){
						delNum=order.endprices1;
					}else if(id==7){
						delNum=order.endprices7;
					}else{
						delNum=order.endprices3;
					}
				}
		}
		order_num = order_num - delNum;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
		order_detail_array.del(delIndex);
		$("tr[id="+spID+"]").remove();
	}
	var sproduct_name = $("#pruductName"+id).val();
    if(id==1){
    	var sSelectPin1 =  $("#sSelectPin1").children('option:selected').text();
    	var sSelectProduct1 = $("#sSelectProduct1").children('option:selected').text();
    	var sSelectProduct2 = $("#sSelectProduct2").children('option:selected').text();
    	var sSelectProduct3 = $("#sSelectProduct3").children('option:selected').text();
    	var s_product1_open = $("#s_product1_open").children('option:selected').text();
    	var sdoorSelected1 = $("#sdoorSelected1").children('option:selected').text();
    	var scolorSelected1 = $("#scolorSelected1").children('option:selected').text();
    	var s_product1_width = $("#s_product1_width").val();
    	var s_product1_thick = $("#s_product1_thick").val();
    	var s_product1_height = $("#s_product1_height").val();
    	var s_product1_price = $("#s_product1_price").html();
    	
    	var s_product_sum1 = $("#s_product_sum1").val();
    	var s_product_discount1 = $("#s_product_discount1").val();
    	var s_product_remark1 = $("#s_product_remark1").val();

    	var totalprices1 = parseInt(s_product1_price) * parseInt(s_product_sum1);
    	var endprices1 = Math.ceil(parseInt(s_product1_price) * parseInt(s_product_sum1)* parseFloat(s_product_discount1)*disUnit);
    	
		var sOrder1 = new SOrder1(sSelectPin1, sSelectProduct1, sSelectProduct2, sSelectProduct3, s_product1_open, sdoorSelected1,
					scolorSelected1, s_product1_width, s_product1_thick, s_product1_height,s_product1_price,s_product_sum1,s_product_discount1,
					s_product_remark1,totalprices1,endprices1,1,sproduct_name,spID);
		 order_detail_array.push(sOrder1);
		 var newRow1 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin1 + "</td><td>" + sSelectProduct1
			+ "</td><td>" + sSelectProduct2 + "</td><td>" + sSelectProduct3 + "</td><td>"
			+ s_product1_open + "</td>" + "<td>" + s_product1_width + "</td><td>"
			+ s_product1_thick + "</td><td>" + s_product1_height + "</td><td>" + sdoorSelected1 + "</td><td>" + scolorSelected1 + "</td><td>" + s_product_sum1 + "</td><td><a href=# title='当前折扣：" + s_product_discount1 + "'>**</a></td><td>" + endprices1 + "</td><td>" + s_product_remark1 + "</td></tr>";
		 $("#s_order_1 tr:last").after(newRow1);
    	order_num = order_num + endprices1;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_1 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index($(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(13).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
						for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				   }
    			});
    	$("#s_order_1 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(1);
    						    	$("#sSelectPin1 option:contains('"+order.sSelectPin1+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin1');
    						    	$("#sSelectProduct1 option:contains('"+order.sSelectProduct1+"')").attr("selected",true);
    						    	
    						    	$("#sSelectProduct2 option:contains('"+order.sSelectProduct2+"')").attr("selected",true);
    						    	
    						    	$("#sSelectProduct3 option:contains('"+order.sSelectProduct3+"')").attr("selected",true);
    						    	
    						    	$("#s_product1_open option:contains('"+order.s_product1_open+"')").attr("selected",true);
    						    	$("#sdoorSelected1 option:contains('"+order.sdoorSelected1+"')").attr("selected",true);
    						    	$("#scolorSelected1 option:contains('"+order.scolorSelected1+"')").attr("selected",true);
    						    	$("#s_product1_width").val(order.s_product1_width);
    						    	$("#s_product1_thick").val(order.s_product1_thick);
    						    	$("#s_product1_height").val(order.s_product1_height);
    						    	$("#s_product1_price").html(order.s_product1_price);
    						    	
    						    	$("#s_product_sum1").val(order.s_product_sum1);
    						    	$("#s_product_discount1").val(order.s_product_discount1);
    						    	$("#s_product_remark1").val(order.s_product_remark1);
    								
    								$("#pruductName1").val(order.pruductName);
    								$("#spid1").val(order.id);
    							}
    					}
    				 }
    			});
    }else if(id==2){
    	var sSelectPin2 =  $("#sSelectPin2").children('option:selected').text();
    	var sSelectProduct4 = $("#sSelectProduct4").children('option:selected').text();
    	var sSelectProduct5 = $("#sSelectProduct5").children('option:selected').text();
    	var sSelectProduct6 = $("#sSelectProduct6").children('option:selected').text();
    	var s_product2_open = $("#s_product2_open").children('option:selected').text();
    	var sdoorSelected2 = $("#sdoorSelected2").children('option:selected').text();
    	var scolorSelected2 = $("#scolorSelected2").children('option:selected').text();
    	var s_product2_width = $("#s_product2_width").val();
    	var s_product2_thick = $("#s_product2_thick").val();
    	var s_product2_height = $("#s_product2_height").val();
    	var s_product2_price = $("#s_product2_price").html();
    	
    	var s_product_sum2 = $("#s_product_sum2").val();
    	var s_product_discount2 = $("#s_product_discount2").val();
    	var s_product_remark2 = $("#s_product_remark2").val();
    	
    	var totalprices2 = parseInt(s_product2_price) * parseInt(s_product_sum2);
    	var endprices2 = Math.ceil(parseInt(s_product2_price) * parseInt(s_product_sum2)
    			* parseFloat(s_product_discount2)*disUnit);
    	var sOrder2 = new SOrder1(sSelectPin2, sSelectProduct4, sSelectProduct5, sSelectProduct6, s_product2_open, sdoorSelected2,
				scolorSelected2, s_product2_width, s_product2_thick, s_product2_height,s_product2_price,s_product_sum2,s_product_discount2,
				s_product_remark2,totalprices2,endprices2,2,sproduct_name,spID);
	     order_detail_array.push(sOrder2);
	     var newRow2 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin2 + "</td><td>" + sSelectProduct4
			+ "</td><td>" + sSelectProduct5 + "</td><td>" + sSelectProduct6 + "</td><td>"
			+ s_product2_open + "</td>" + "<td>" + s_product2_width + "</td><td>"
			+ s_product2_thick + "</td><td>" + s_product2_height + "</td><td>" + sdoorSelected2 + "</td><td>" + scolorSelected2 + "</td><td>" + s_product_sum2 + "</td><td><a href=# title='当前折扣：" + s_product_discount2 + "'>**</a></td><td>" + endprices2 + "</td><td>" + s_product_remark2 + "</td></tr>";
    	$("#s_order_2 tr:last").after(newRow2);
    	order_num = order_num + endprices2;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_2 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(13).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				 }
    			});
    	$("#s_order_2 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(2);
    						    	$("#sSelectPin2 option:contains('"+order.sSelectPin1+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin2');
    						    	$("#sSelectProduct4 option:contains('"+order.sSelectProduct1+"')").attr("selected",true);
    						    	
    						    	$("#sSelectProduct5 option:contains('"+order.sSelectProduct2+"')").attr("selected",true);
    						    	
    						    	$("#sSelectProduct6 option:contains('"+order.sSelectProduct3+"')").attr("selected",true);
    						    	
    						    	$("#s_product2_open option:contains('"+order.s_product1_open+"')").attr("selected",true);
    						    	$("#sdoorSelected2 option:contains('"+order.sdoorSelected1+"')").attr("selected",true);
    						    	$("#scolorSelected2 option:contains('"+order.scolorSelected1+"')").attr("selected",true);
    						    	$("#s_product2_width").val(order.s_product1_width);
    						    	$("#s_product2_thick").val(order.s_product1_thick);
    						    	$("#s_product2_height").val(order.s_product1_height);
    						    	$("#s_product2_price").html(order.s_product1_price);
    						    	
    						    	$("#s_product_sum2").val(order.s_product_sum1);
    						    	$("#s_product_discount2").val(order.s_product_discount1);
    						    	$("#s_product_remark2").val(order.s_product_remark1);
    								
    								$("#pruductName2").val(order.pruductName);
    								$("#spid2").val(order.id);
    							}
    					}
    				 }
    			});
    }else if(id==3){
    	var sSelectPin3 =  $("#sSelectPin3").children('option:selected').text();
    	var sSelectProduct7 = $("#sSelectProduct7").children('option:selected').text();
    	
    	var sdoorSelected3 = $("#sdoorSelected3").children('option:selected').text();
    	var scolorSelected3 = $("#scolorSelected3").children('option:selected').text();
    	var s_product3_width = $("#s_product3_width").val();
    	var s_product3_thick = $("#s_product3_thick").val();
    	var s_product3_height = $("#s_product3_height").val();
    	var s_product3_price = $("#s_product3_price").html();
    	
    	var s_product_sum3 = $("#s_product_sum3").val();
    	var s_product_discount3 = $("#s_product_discount3").val();
    	var s_product_remark3 = $("#s_product_remark3").val();
    	
    	var totalprices3 = parseInt(s_product3_price) * parseInt(s_product_sum3);
    	var endprices3 = Math.ceil(parseInt(s_product3_price) * parseInt(s_product_sum3)
    			* parseFloat(s_product_discount3)*disUnit);
    	var sOrder3 = new SOrder3(sSelectPin3, sSelectProduct7,  "", sdoorSelected3,
    			scolorSelected3, s_product3_width, s_product3_thick, s_product3_height,s_product3_price,s_product_sum3,s_product_discount3,
    			s_product_remark3,totalprices3,endprices3,"",3,sproduct_name,spID);
	    order_detail_array.push(sOrder3);
    	
	    var newRow3 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin3 + "</td><td>" + sSelectProduct7
		+ "</td><td>" + s_product3_width + "</td><td>" + s_product3_thick + "</td><td>"
		+ s_product3_height + "</td><td>" + sdoorSelected3 + "</td><td>" + scolorSelected3 + "</td><td>" + s_product_sum3 + "</td><td><a href=# title='当前折扣：" + s_product_discount3 + "'>**</a></td><td>" + endprices3 + "</td><td>" + s_product_remark3 + "</td></tr>";
    	$("#s_order_3 tr:last").after(newRow3);
    	order_num = order_num + endprices3;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_3 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(10).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				 }
    			});
    	$("#s_order_3 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(3);
    						    	$("#sSelectPin3 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin3');
    						    	$("#sSelectProduct7 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
    						    	
    						    	
    						    
    						    	$("#sdoorSelected3 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
    						    	$("#scolorSelected3 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
    						    	$("#s_product3_width").val(order.s_product3_width);
    						    	$("#s_product3_thick").val(order.s_product3_thick);
    						    	$("#s_product3_height").val(order.s_product3_height);
    						    	$("#s_product3_price").html(order.s_product3_price);
    						    	
    						    	$("#s_product_sum3").val(order.s_product_sum3);
    						    	$("#s_product_discount3").val(order.s_product_discount3);
    						    	$("#s_product_remark3").val(order.s_product_remark3);
    								
    								$("#pruductName3").val(order.pruductName);
    								$("#spid3").val(order.id);
    							}
    					}
    				 }
    			});
    }else if(id==4){
    	var sSelectPin4 =  $("#sSelectPin4").children('option:selected').text();
    	var sSelectProduct8 = $("#sSelectProduct8").children('option:selected').text();
    	
    	var s_product4_open = $("#s_product4_open").children('option:selected').text();
    	var sdoorSelected4 = $("#sdoorSelected4").children('option:selected').text();
    	var scolorSelected4 = $("#scolorSelected4").children('option:selected').text();
    	var s_product4_width = $("#s_product4_width").val();
    	var s_product4_thick = $("#s_product4_thick").val();
    	var s_product4_height = $("#s_product4_height").val();
    	var s_product4_price = $("#s_product4_price").html();
    	
    	var s_product_sum4 = $("#s_product_sum4").val();
    	var s_product_discount4 = $("#s_product_discount4").val();
    	var s_product_remark4 = $("#s_product_remark4").val();
    	
    	var totalprices4 = parseInt(s_product4_price) * parseInt(s_product_sum4);
    	var endprices4 = Math.ceil(parseInt(s_product4_price) * parseInt(s_product_sum4)
    			* parseFloat(s_product_discount4)*disUnit);
    	var sOrder4 = new SOrder3(sSelectPin4, sSelectProduct8,  s_product4_open, sdoorSelected4,
    			scolorSelected4, s_product4_width, s_product4_thick, s_product4_height,s_product4_price,s_product_sum4,s_product_discount4,
    			s_product_remark4,totalprices4,endprices4,"",4,sproduct_name,spID);
	    order_detail_array.push(sOrder4);
    	
    	var newRow4 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin4 + "</td><td>" + sSelectProduct8
		+ "</td><td>" + s_product4_height + "</td><td>" + s_product4_width + "</td><td>"
		+ s_product4_thick + "</td><td>" + s_product4_open + "</td><td>" + sdoorSelected4 + "</td><td>" + scolorSelected4 + "</td><td>" + s_product_sum4 + "</td><td><a href=# title='当前折扣：" + s_product_discount4 + "'>**</a></td><td>" + endprices4 + "</td><td>" + s_product_remark4 + "</td></tr>";
    	$("#s_order_4 tr:last").after(newRow4);
    	order_num = order_num + endprices4;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_4 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(11).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				 }
    			});
    	$("#s_order_4 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(4);
    						    	$("#sSelectPin4 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin4');
    						    	$("#sSelectProduct8 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
    						    	
    						    	
    						    	$("#s_product4_open option:contains('"+order.s_product3_open+"')").attr("selected",true);
    						    	$("#sdoorSelected4 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
    						    	$("#scolorSelected4 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
    						    	$("#s_product4_width").val(order.s_product3_width);
    						    	$("#s_product4_thick").val(order.s_product3_thick);
    						    	$("#s_product4_height").val(order.s_product3_height);
    						    	$("#s_product4_price").html(order.s_product3_price);
    						    	
    						    	$("#s_product_sum4").val(order.s_product_sum3);
    						    	$("#s_product_discount4").val(order.s_product_discount3);
    						    	$("#s_product_remark4").val(order.s_product_remark3);
    								
    								$("#pruductName4").val(order.pruductName);
    								$("#spid4").val(order.id);
    							}
    					}
    				 }
    			});
    }else if(id==5){
    	var sSelectPin5 =  $("#sSelectPin5").children('option:selected').text();
    	var sSelectProduct9 = $("#sSelectProduct9").children('option:selected').text();
    	
    	var s_product5_open = $("#s_product5_open").children('option:selected').text();
    	var sdoorSelected5 = $("#sdoorSelected5").children('option:selected').text();
    	var scolorSelected5 = $("#scolorSelected5").children('option:selected').text();
    	var s_product5_width = $("#s_product5_width").val();
    	var s_product5_thick = $("#s_product5_thick").val();
    	var s_product5_height = $("#s_product5_height").val();
    	var s_product5_price = $("#s_product5_price").html();
    	var s_product5_method = $("#s_product5_method").html();
    	
    	var s_product_sum5 = $("#s_product_sum5").val();
    	var s_product_discount5 = $("#s_product_discount5").val();
    	var s_product_remark5 = $("#s_product_remark5").val();
    	
    	var totalprices5 = parseInt(s_product5_price) * parseInt(s_product_sum5);
    	var endprices5 = Math.ceil(parseInt(s_product5_price) * parseInt(s_product_sum5)
    			* parseFloat(s_product_discount5)*disUnit);
    	var sOrder5 = new SOrder3(sSelectPin5, sSelectProduct9,  s_product5_open, sdoorSelected5,
    			scolorSelected5, s_product5_width, s_product5_thick, s_product5_height,s_product5_price,s_product_sum5,s_product_discount5,
    			s_product_remark5,totalprices5,endprices5,s_product5_method,5,sproduct_name,spID);
	    order_detail_array.push(sOrder5);
    	
	    var newRow5 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin5 + "</td><td>" + sSelectProduct9
		+ "</td><td>" + s_product5_open + "</td><td>" + s_product5_height + "</td><td>" + s_product5_thick + "</td><td>"
		+ s_product5_width + "</td><td>" + s_product5_method + "</td><td>" + scolorSelected5 + "</td><td>" + s_product_sum5 + "</td><td><a href=# title='当前折扣：" + s_product_discount5 + "'>**</a></td><td>" + endprices5 + "</td><td>" + s_product_remark5 + "</td></tr>";
    	
    	$("#s_order_5 tr:last").after(newRow5);
    	order_num = order_num + endprices5;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_5 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(11).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				 }
    			});
    	$("#s_order_5 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(5);
    						    	$("#sSelectPin5 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin5');
    						    	$("#sSelectProduct9 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
    						    	
    						    	
    						    	
    						    	$("#s_product5_open option:contains('"+order.s_product3_open+"')").attr("selected",true);
    						    	$("#sdoorSelected5 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
    						    	$("#scolorSelected5 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
    						    	$("#s_product5_width").val(order.s_product3_width);
    						    	$("#s_product5_thick").val(order.s_product3_thick);
    						    	$("#s_product5_height").val(order.s_product3_height);
    						    	calculateProduct5();
    						    	$("#s_product5_price").html(order.s_product3_price);
    						    	
    						    	$("#s_product_sum5").val(order.s_product_sum3);
    						    	$("#s_product_discount5").val(order.s_product_discount3);
    						    	$("#s_product_remark5").val(order.s_product_remark3);
    								
    								$("#pruductName5").val(order.pruductName);
    								$("#spid5").val(order.id);
    							}
    					}
    				 }
    			});
    }else if(id==6){
    	var sSelectPin6 =  $("#sSelectPin6").children('option:selected').text();
    	var sSelectProduct10 = $("#sSelectProduct10").children('option:selected').text();
    	
    	
    	var sdoorSelected6 = $("#sdoorSelected6").children('option:selected').text();
    	var scolorSelected6 = $("#scolorSelected6").children('option:selected').text();
    	var s_product6_width = $("#s_product6_width").val();
    	var s_product6_thick = $("#s_product6_thick").val();
    	var s_product6_height = $("#s_product6_height").val();
    	var s_product6_price = $("#s_product6_price").html();
    	var s_product6_method = $("#s_product6_method").html();
    	
    	var s_product_sum6 = $("#s_product_sum6").val();
    	var s_product_discount6 = $("#s_product_discount6").val();
    	var s_product_remark6 = $("#s_product_remark6").val();
    	
    	var totalprices6 = parseInt(s_product6_price) * parseInt(s_product_sum6);
    	var endprices6 = Math.ceil(parseInt(s_product6_price) * parseInt(s_product_sum6)
    			* parseFloat(s_product_discount6)*disUnit);
    	var sOrder6 = new SOrder3(sSelectPin6, sSelectProduct10,s_product6_method, sdoorSelected6,
    			scolorSelected6, s_product6_width, s_product6_thick, s_product6_height,s_product6_price,s_product_sum6,s_product_discount6,
    			s_product_remark6,totalprices6,endprices6,"",6,sproduct_name,spID);
	    order_detail_array.push(sOrder6);
    	// console.log(cOrder);
    	/*var newRow6 = "<tr><td>" + sSelectPin6 + "</td><td>" + sSelectProduct10
    			+ "</td><td>" + s_product6_height + "</td><td>" + s_product6_width + "</td><td>"
    			+ s_product6_thick + "</td><td>" + s_product6_method + "</td><td>" + scolorSelected6 + "</td><td>"
    			+ s_product6_price + "</td><td>" + s_product_sum6 + "</td><td>" + totalprices6 + "</td><td>" + s_product_discount6 + "</td><td>" + endprices6 + "</td><td>店长签字</td><td>" + s_product_remark6 + "</td></tr>";*/
	    var newRow6 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + sSelectPin6 + "</td><td>" + sSelectProduct10
		+ "</td><td>" + s_product6_height + "</td><td>" + s_product6_width + "</td><td>"
		+ s_product6_thick + "</td><td>" + s_product6_method + "</td><td>" + scolorSelected6 + "</td><td>" + s_product_sum6 + "</td><td><a href=# title='当前折扣：" + s_product_discount6 + "'>**</a></td><td>" + endprices6 + "</td><td>" + s_product_remark6 + "</td></tr>";
    	$("#s_order_6 tr:last").after(newRow6);
    	order_num = order_num + endprices6;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_6 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(10).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				  }
    			});
    	$("#s_order_6 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								rowEditControl(6);
    						    	$("#sSelectPin6 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
    						    	sSelectProduct('sSelectPin6');
    						    	$("#sSelectProduct10 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
    						    	
    						    	
    						    	$("#sdoorSelected6 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
    						    	$("#scolorSelected6 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
    						    	$("#s_product6_width").val(order.s_product3_width);
    						    	$("#s_product6_thick").val(order.s_product3_thick);
    						    	$("#s_product6_height").val(order.s_product3_height);
    						    	$("#s_product6_price").html(order.s_product3_price);
    						    	
    						    	$("#s_product6_method").html(order.s_product3_open);
    						    	$("#s_product_sum6").val(order.s_product_sum3);
    						    	$("#s_product_discount6").val(order.s_product_discount3);
    						    	$("#s_product_remark6").val(order.s_product_remark3);
    								
    								$("#pruductName6").val(order.pruductName);
    								$("#spid6").val(order.id);
    							}
    					}
    				 }
    			});
    }else{
    	
    	var s_product_material = $("#s_product_material").val();
    	var s_product7_size = $("#s_product7_size").val();
    	var s_product_discount7 = $("#s_product_discount7").val();
    	var s_product7_price = $("#s_product7_price").val();
    	
    	var s_product_discount7 = $("#s_product_discount7").val();
    	var s_product_remark7 = $("#s_product_remark7").val();
    	
    	var endprices7 = Math.ceil(parseInt(s_product7_price)*parseFloat(s_product_discount7)*disUnit);
    	var sOrder7 = new SOrder7(s_product_material,s_product7_size,s_product_discount7,
    			s_product_remark7,s_product7_price,endprices7,7,sproduct_name,spID);
	    order_detail_array.push(sOrder7);
    	
	    var newRow7 = "<tr id="+spID+"><td>" + sproduct_name + "</td><td>" + s_product_material + "</td><td>" + s_product7_size
		+ "</td><td><a href=# title='当前折扣：" + s_product_discount7 + "'>**</a></td><td>" + endprices7 + "</td><td>"
		+ s_product_remark7 + "</td></tr>";
    	$("#s_order_7 tr:last").after(newRow7);
    	order_num = order_num + endprices7;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_7 tr:last td:last").dblclick(
    			function() {
    				if(confirm("是否确认删除？")){
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(4).text();
    						order_num = order_num - parseInt(os);
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					var delIndex;
    					for(var i = 0; i < order_detail_array.length; i++){
							var order = order_detail_array[i];
								if(order.id==$(this).parent().attr("id")){
									delIndex=i;
								}
						}
						order_detail_array.del(delIndex);
    					$(this).parent().remove();
    				}
   				  }
    			});
    	$("#s_order_7 tr:last td:first").dblclick(
    			function() {
    				if(confirm("是否确认编辑？")){
                        var epid = $(this).parent().attr("id");
                        for(var i = 0; i < order_detail_array.length; i++){
    						var order = order_detail_array[i];	
    							if(order.id==epid){
    								new SOrder7(s_product_material,s_product7_size,s_product_discount7,
    						    			s_product_remark7,s_product7_price,endprices7,7,sproduct_name,spID);
    								
    								
    						    	$("#s_product_material").val(order.s_product_material);
    						    	$("#s_product7_size").val(order.s_product7_size);
    						    	$("#s_product_discount7").val(order.s_product_discount7);
    						    	$("#s_product7_price").val(order.s_product7_price);
    						    	
    						
    						    	
    						    	$("#s_product_discount7").val(order.s_product_discount7);
    						    	$("#s_product_remark7").val(order.s_product_remark7);
    								
    								$("#pruductName7").val(order.pruductName);
    								$("#spid7").val(order.id);
    							}
    					}
    				 }
    			});
    }
	$("#spid"+id).val(0)
	$('#myModal3').modal('hide');
}

function editOrder(){
	order_num=0;
	for(var i = 0; i < order_detail_array.length; i++){
		var order = order_detail_array[i];
		var div;
		if(order.flag==0){
			var newRow = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.classify + "</td><td>" + order.catena
			+ "</td><td>" + order.name + "</td><td>" + order.colour + "</td><td>" + order.quantity + "</td><td><a href=# title='当前折扣：" + order.discount + "'>**</a></td><td>"
			+ order.endprices + "</td><td>" + order.remark1 + "</td></tr>";
		    $("#c_order tr:last").after(newRow);
		    order_num = order_num + order.endprices;
		    div="#c_order tr:last td:last";
		    $("#c_order tr:last td:last").dblclick(
					function() {
						if(confirm("是否确认删除？")){
							var trSeq = $(this).parent().parent().find("tr").index(
									$(this).parent());
							if (trSeq > 1) {
								if (order_num > 0) {
									var os = $(this).parent().find('td').eq(7).text();
									order_num = order_num - parseInt(os);
									$("#order_num").html(order_num + "元");
									$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
								}
								var delIndex;
								for(var i = 0; i < order_detail_array.length; i++){
									var order = order_detail_array[i];
									if(order.flag==0){	
										if(order.id==$(this).parent().attr("id")){
											delIndex=i;
										}
									}
								}
								order_detail_array.del(delIndex);
								$(this).parent().remove();
							}
						 }
					});
			$("#c_order tr:last td:first").dblclick(
					function() {
						if(confirm("是否确认编辑？")){
		                    var epid = $(this).parent().attr("id");
		                    for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];	
									if(order.id==epid){
										rowEditControl(0);
										$("#product_discount").val(order.discount);
										$("#classify option:contains('"+order.classify+"')").attr("selected",true);
										selectClassify();
										$("#catena option:contains('"+order.catena+"')").attr("selected",true);
										selectCatena();
										$("#productname option:contains('"+order.name+"')").attr("selected",true);
										selectProduct("#productname");
										$("#colorSelected option:contains('"+order.colour+"')").attr("selected",true);
										$("#selectedPrice").html(order.price);
										$("#product_sum").val(order.quantity);
										$("#product_remark").val(order.remark1);
										$("#pruductName0").val(order.pruductName);
										$("#cpid0").val(order.id);
									}
							}
						 }
					});
		}else if(order.flag==1){
	    	var newRow1 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin1 + "</td><td>" + order.sSelectProduct1
			+ "</td><td>" + order.sSelectProduct2 + "</td><td>" + order.sSelectProduct3 + "</td><td>"
			+ order.s_product1_open + "</td>" + "<td>" + order.s_product1_width + "</td><td>"
			+ order.s_product1_thick + "</td><td>" + order.s_product1_height + "</td><td>" + order.sdoorSelected1 + "</td><td>" + order.scolorSelected1 + "</td><td>" + order.s_product_sum1 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount1 + "'>**</a></td><td>" + order.endprices1 + "</td><td>" + order.s_product_remark1 + "</td></tr>";
			$("#s_order_1 tr:last").after(newRow1);
			order_num = order_num + order.endprices1;
			div="#s_order_1 tr:last td:last";
			$("#s_order_1 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index($(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(13).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
							for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				   }
	    			});
	    	$("#s_order_1 tr:last td:first").dblclick(
	    			function() {
	    				if(confirm("是否确认编辑？")){
	                        var epid = $(this).parent().attr("id");
	                        for(var i = 0; i < order_detail_array.length; i++){
	    						var order = order_detail_array[i];	
	    							if(order.id==epid){
	    								rowEditControl(1);
	    						    	$("#sSelectPin1 option:contains('"+order.sSelectPin1+"')").attr("selected",true);
	    						    	sSelectProduct('sSelectPin1');
	    						    	$("#sSelectProduct1 option:contains('"+order.sSelectProduct1+"')").attr("selected",true);
	    						    	
	    						    	$("#sSelectProduct2 option:contains('"+order.sSelectProduct2+"')").attr("selected",true);
	    						    	
	    						    	$("#sSelectProduct3 option:contains('"+order.sSelectProduct3+"')").attr("selected",true);
	    						    	
	    						    	$("#s_product1_open option:contains('"+order.s_product1_open+"')").attr("selected",true);
	    						    	$("#sdoorSelected1 option:contains('"+order.sdoorSelected1+"')").attr("selected",true);
	    						    	$("#scolorSelected1 option:contains('"+order.scolorSelected1+"')").attr("selected",true);
	    						    	$("#s_product1_width").val(order.s_product1_width);
	    						    	$("#s_product1_thick").val(order.s_product1_thick);
	    						    	$("#s_product1_height").val(order.s_product1_height);
	    						    	$("#s_product1_price").html(order.s_product1_price);
	    						    	
	    						    	$("#s_product_sum1").val(order.s_product_sum1);
	    						    	$("#s_product_discount1").val(order.s_product_discount1);
	    						    	$("#s_product_remark1").val(order.s_product_remark1);
	    								
	    								$("#pruductName1").val(order.pruductName);
	    								$("#spid1").val(order.id);
	    							}
	    					}
	    				 }
	    			});
		}else if(order.flag==2){
			var newRow2 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin1 + "</td><td>" + order.sSelectProduct1
			+ "</td><td>" + order.sSelectProduct2 + "</td><td>" + order.sSelectProduct3 + "</td><td>"
			+ order.s_product1_open + "</td>" + "<td>" + order.s_product1_width + "</td><td>"
			+ order.s_product1_thick + "</td><td>" + order.s_product1_height + "</td><td>" + order.sdoorSelected1 + "</td><td>" + order.scolorSelected1 + "</td><td>" + order.s_product_sum1 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount1 + "'>**</a></td><td>" + order.endprices1 + "</td><td>" + order.s_product_remark1 + "</td></tr>";
			$("#s_order_2 tr:last").after(newRow2);
			order_num = order_num + order.endprices1;
			div="#s_order_2 tr:last td:last";
			$("#s_order_2 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(13).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				 }
	    			});
			$("#s_order_2 tr:last td:first").dblclick(
	    			function() {
	    				if(confirm("是否确认编辑？")){
	                        var epid = $(this).parent().attr("id");
	                        for(var i = 0; i < order_detail_array.length; i++){
	    						var order = order_detail_array[i];	
	    							if(order.id==epid){
	    								rowEditControl(2);
	    						    	$("#sSelectPin2 option:contains('"+order.sSelectPin1+"')").attr("selected",true);
	    						    	sSelectProduct('sSelectPin2');
	    						    	$("#sSelectProduct4 option:contains('"+order.sSelectProduct1+"')").attr("selected",true);
	    						    	
	    						    	$("#sSelectProduct5 option:contains('"+order.sSelectProduct2+"')").attr("selected",true);
	    						    	
	    						    	$("#sSelectProduct6 option:contains('"+order.sSelectProduct3+"')").attr("selected",true);
	    						    	
	    						    	$("#s_product2_open option:contains('"+order.s_product1_open+"')").attr("selected",true);
	    						    	$("#sdoorSelected2 option:contains('"+order.sdoorSelected1+"')").attr("selected",true);
	    						    	$("#scolorSelected2 option:contains('"+order.scolorSelected1+"')").attr("selected",true);
	    						    	$("#s_product2_width").val(order.s_product1_width);
	    						    	$("#s_product2_thick").val(order.s_product1_thick);
	    						    	$("#s_product2_height").val(order.s_product1_height);
	    						    	$("#s_product2_price").html(order.s_product1_price);
	    						    	
	    						    	$("#s_product_sum2").val(order.s_product_sum1);
	    						    	$("#s_product_discount2").val(order.s_product_discount1);
	    						    	$("#s_product_remark2").val(order.s_product_remark1);
	    								
	    								$("#pruductName2").val(order.pruductName);
	    								$("#spid2").val(order.id);
	    							}
	    					}
	    				 }
	    			});
		}else if(order.flag==3){
	    	var newRow3 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin3 + "</td><td>" + order.sSelectProduct7
			+ "</td><td>" + order.s_product3_width + "</td><td>" + order.s_product3_thick + "</td><td>"
			+ order.s_product3_height + "</td><td>" + order.sdoorSelected3 + "</td><td>" + order.scolorSelected3 + "</td><td>" + order.s_product_sum3 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount3 + "'>**</a></td><td>" + order.endprices3 + "</td><td>" + order.s_product_remark3 + "</td></tr>";
			$("#s_order_3 tr:last").after(newRow3);
			order_num = order_num + order.endprices3;
			div="#s_order_3 tr:last td:last";
			$("#s_order_3 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(10).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				 }
	    			});
		    	$("#s_order_3 tr:last td:first").dblclick(
		    			function() {
		    				if(confirm("是否确认编辑？")){
		                        var epid = $(this).parent().attr("id");
		                        for(var i = 0; i < order_detail_array.length; i++){
		    						var order = order_detail_array[i];	
		    							if(order.id==epid){
		    								rowEditControl(3);
		    						    	$("#sSelectPin3 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
		    						    	sSelectProduct('sSelectPin3');
		    						    	$("#sSelectProduct7 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
		    						    	
		    						    	
		    						    
		    						    	$("#sdoorSelected3 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
		    						    	$("#scolorSelected3 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
		    						    	$("#s_product3_width").val(order.s_product3_width);
		    						    	$("#s_product3_thick").val(order.s_product3_thick);
		    						    	$("#s_product3_height").val(order.s_product3_height);
		    						    	$("#s_product3_price").html(order.s_product3_price);
		    						    	
		    						    	$("#s_product_sum3").val(order.s_product_sum3);
		    						    	$("#s_product_discount3").val(order.s_product_discount3);
		    						    	$("#s_product_remark3").val(order.s_product_remark3);
		    								
		    								$("#pruductName3").val(order.pruductName);
		    								$("#spid3").val(order.id);
		    							}
		    					}
		    				 }
		    			});	
		}else if(order.flag==4){
			var newRow4 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin3 + "</td><td>" + order.sSelectProduct7
			+ "</td><td>" + order.s_product3_height + "</td><td>" + order.s_product3_width + "</td><td>"
			+ order.s_product3_thick + "</td><td>" + order.s_product3_open + "</td><td>" + order.sdoorSelected3 + "</td><td>" + order.scolorSelected3 + "</td><td>" + order.s_product_sum3 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount3 + "'>**</a></td><td>" + order.endprices3 + "</td><td>" + order.s_product_remark3 + "</td></tr>";
			$("#s_order_4 tr:last").after(newRow4);
			order_num = order_num + order.endprices3;
			div="#s_order_4 tr:last td:last";
			$("#s_order_4 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(11).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				 }
	    			});
		    	$("#s_order_4 tr:last td:first").dblclick(
		    			function() {
		    				if(confirm("是否确认编辑？")){
		                        var epid = $(this).parent().attr("id");
		                        for(var i = 0; i < order_detail_array.length; i++){
		    						var order = order_detail_array[i];	
		    							if(order.id==epid){
		    								rowEditControl(4);
		    						    	$("#sSelectPin4 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
		    						    	sSelectProduct('sSelectPin4');
		    						    	$("#sSelectProduct8 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
		    						    	
		    						    	
		    						    	$("#s_product4_open option:contains('"+order.s_product3_open+"')").attr("selected",true);
		    						    	$("#sdoorSelected4 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
		    						    	$("#scolorSelected4 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
		    						    	$("#s_product4_width").val(order.s_product3_width);
		    						    	$("#s_product4_thick").val(order.s_product3_thick);
		    						    	$("#s_product4_height").val(order.s_product3_height);
		    						    	$("#s_product4_price").html(order.s_product3_price);
		    						    	
		    						    	$("#s_product_sum4").val(order.s_product_sum3);
		    						    	$("#s_product_discount4").val(order.s_product_discount3);
		    						    	$("#s_product_remark4").val(order.s_product_remark3);
		    								
		    								$("#pruductName4").val(order.pruductName);
		    								$("#spid4").val(order.id);
		    							}
		    					}
		    				 }
		    			});	
		}else if(order.flag==5){
	    	var newRow5 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin3 + "</td><td>" + order.sSelectProduct7
			+ "</td><td>" + order.s_product3_open + "</td><td>" + order.s_product3_height + "</td><td>" + order.s_product3_thick + "</td><td>"
			+ order.s_product3_width + "</td><td>" + order.method + "</td><td>" + order.scolorSelected3 + "</td><td>" + order.s_product_sum3 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount3 + "'>**</a></td><td>" + order.endprices3 + "</td><td>" + order.s_product_remark3 + "</td></tr>";
			$("#s_order_5 tr:last").after(newRow5);
			order_num = order_num + order.endprices3;
			div="#s_order_5 tr:last td:last";
			$("#s_order_5 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(11).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				 }
	    			});
		    	$("#s_order_5 tr:last td:first").dblclick(
		    			function() {
		    				if(confirm("是否确认编辑？")){
		                        var epid = $(this).parent().attr("id");
		                        for(var i = 0; i < order_detail_array.length; i++){
		    						var order = order_detail_array[i];	
		    							if(order.id==epid){
		    								rowEditControl(5);
		    						    	$("#sSelectPin5 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
		    						    	sSelectProduct('sSelectPin5');
		    						    	$("#sSelectProduct9 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
		    						    	
		    						    	
		    						    	
		    						    	$("#s_product5_open option:contains('"+order.s_product3_open+"')").attr("selected",true);
		    						    	$("#sdoorSelected5 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
		    						    	$("#scolorSelected5 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
		    						    	$("#s_product5_width").val(order.s_product3_width);
		    						    	$("#s_product5_thick").val(order.s_product3_thick);
		    						    	$("#s_product5_height").val(order.s_product3_height);
		    						    	$("#s_product5_method").html(order.method);
		    						    	$("#s_product5_price").html(order.s_product3_price);
		    						    	
		    						    	$("#s_product_sum5").val(order.s_product_sum3);
		    						    	$("#s_product_discount5").val(order.s_product_discount3);
		    						    	$("#s_product_remark5").val(order.s_product_remark3);
		    								
		    								$("#pruductName5").val(order.pruductName);
		    								$("#spid5").val(order.id);
		    							}
		    					}
		    				 }
		    			});	
		}else if(order.flag==6){
			var newRow6 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.sSelectPin3 + "</td><td>" + order.sSelectProduct7
			+ "</td><td>" + order.s_product3_height + "</td><td>" + order.s_product3_width + "</td><td>"
			+ order.s_product3_thick + "</td><td>" + order.s_product3_open + "</td><td>" + order.scolorSelected3 + "</td><td>" + order.s_product_sum3 + "</td><td><a href=# title='当前折扣：" + order.s_product_discount3 + "'>**</a></td><td>" + order.endprices3 + "</td><td>" + order.s_product_remark3 + "</td></tr>";
	        $("#s_order_6 tr:last").after(newRow6);
	        order_num = order_num + order.endprices3;
	        div="#s_order_6 tr:last td:last";
	        $("#s_order_6 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(10).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				  }
	    			});
	        $("#s_order_6 tr:last td:first").dblclick(
	        			function() {
	        				if(confirm("是否确认编辑？")){
	                            var epid = $(this).parent().attr("id");
	                            for(var i = 0; i < order_detail_array.length; i++){
	        						var order = order_detail_array[i];	
	        							if(order.id==epid){
	        								rowEditControl(6);
	        						    	$("#sSelectPin6 option:contains('"+order.sSelectPin3+"')").attr("selected",true);
	        						    	sSelectProduct('sSelectPin6');
	        						    	$("#sSelectProduct10 option:contains('"+order.sSelectProduct7+"')").attr("selected",true);
	        						    	
	        						    	
	        						    	$("#sdoorSelected6 option:contains('"+order.sdoorSelected3+"')").attr("selected",true);
	        						    	$("#scolorSelected6 option:contains('"+order.scolorSelected3+"')").attr("selected",true);
	        						    	$("#s_product6_width").val(order.s_product3_width);
	        						    	$("#s_product6_thick").val(order.s_product3_thick);
	        						    	$("#s_product6_height").val(order.s_product3_height);
	        						    	$("#s_product6_price").html(order.s_product3_price);
	        						    	
	        						    	$("#s_product6_method").html(order.s_product3_open);
	        						    	$("#s_product_sum6").val(order.s_product_sum3);
	        						    	$("#s_product_discount6").val(order.s_product_discount3);
	        						    	$("#s_product_remark6").val(order.s_product_remark3);
	        								
	        								$("#pruductName6").val(order.pruductName);
	        								$("#spid6").val(order.id);
	        							}
	        					}
	        				 }
	        			});	
		}else{
			
		    var newRow7 = "<tr id="+order.id+"><td>" + order.pruductName + "</td><td>" + order.s_product_material + "</td><td>" + order.s_product7_size
			+ "</td><td><a href=# title='当前折扣：" + order.s_product_discount7 + "'>**</a></td><td>" + order.endprices7 + "</td><td>"
			+ order.s_product_remark7 + "</td></tr>";
	    	$("#s_order_7 tr:last").after(newRow7);
	    	order_num = order_num + order.endprices7;
	    	$("#order_num").html(order_num + "元");
	    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	    	$("#s_order_7 tr:last td:last").dblclick(
	    			function() {
	    				if(confirm("是否确认删除？")){
	    				var trSeq = $(this).parent().parent().find("tr").index(
	    						$(this).parent());
	    				if (trSeq > 1) {
	    					if (order_num > 0) {
	    						var os = $(this).parent().find('td').eq(4).text();
	    						order_num = order_num - parseInt(os);
	    						$("#order_num").html(order_num + "元");
	    						$("#order_num_upper").html(
	    								"合计金额：" + toUpper(order_num + ""));
	    					}
	    					var delIndex;
	    					for(var i = 0; i < order_detail_array.length; i++){
								var order = order_detail_array[i];
									if(order.id==$(this).parent().attr("id")){
										delIndex=i;
									}
							}
							order_detail_array.del(delIndex);
	    					$(this).parent().remove();
	    				}
	   				  }
	    			});
	    	$("#s_order_7 tr:last td:first").dblclick(
	    			function() {
	    				if(confirm("是否确认编辑？")){
	                        var epid = $(this).parent().attr("id");
	                        for(var i = 0; i < order_detail_array.length; i++){
	    						var order = order_detail_array[i];	
	    							if(order.id==epid){
	    								new SOrder7(s_product_material,s_product7_size,s_product_discount7,
	    						    			s_product_remark7,s_product7_price,endprices7,7,sproduct_name,spID);
	    						    	$("#s_product_material").val(order.s_product_material);
	    						    	$("#s_product7_size").val(order.s_product7_size);
	    						    	$("#s_product_discount7").val(order.s_product_discount7);
	    						    	$("#s_product7_price").val(order.s_product7_price);
	    						    	$("#s_product_discount7").val(order.s_product_discount7);
	    						    	$("#s_product_remark7").val(order.s_product_remark7);
	    								$("#pruductName7").val(order.pruductName);
	    								$("#spid7").val(order.id);
	    							}
	    					}
	    				 }
	    			});
		}
	
	$("#order_num").html(order_num + "元");
	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	}
}

function loadData(id, div) {
	$.ajax({
		url : webRoot + '/fpDic/listDic',
		type : "POST",
		dataType : "JSON",
		async : false,
		data : {
			"pid" : id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			// console.log(data);

			if ("catena" == div) {
				$("#catena").empty();
			}
			if ("productname" == div) {
				product = data;
			}
			$("#productname").empty();
			$("#" + div).append("<option>请选择</option>");
			for (var i = 0; i < data.length; i++) {
				$("#" + div).append(
						"<option value='"+data[i].id+"'>" + data[i].name
								+ "</option>");
			}
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function sSelectProduct(id){
	var value = $("#"+id+"  option:selected").val();
	
	if("sSelectPin1"==id){
		if(value == null || value == "" || value == undefined){
			$("#sSelectProduct1").empty();
			$("#sSelectProduct2").empty();
			$("#sSelectProduct3").empty();
			return
		}
		loadSelfProductData("11"+value, "sSelectProduct1");
		loadSelfProductData("12"+value, "sSelectProduct2");
		loadSelfProductData("13"+value, "sSelectProduct3");
	}else if("sSelectPin2"==id){
		loadSelfProductData("21"+value, "sSelectProduct4");
		loadSelfProductData("22"+value, "sSelectProduct5");
		loadSelfProductData("23"+value, "sSelectProduct6");
	}else if("sSelectPin3"==id){
		$("#sSelectProduct7").empty();
		$("#sSelectProduct7").append("<option>请选择</option>");
		for (var i = 0; i < sSelectProductData.length; i++) {
			if(value==0&&sSelectProductData[i].level==1&&sSelectProductData[i].pid==310){
				$("#sSelectProduct7").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==1&&sSelectProductData[i].level==1&&sSelectProductData[i].pid==320){
				$("#sSelectProduct7").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			
		}
	}else if("sSelectPin4"==id){
		$("#sSelectProduct8").empty();
		$("#sSelectProduct8").append("<option>请选择</option>");
		for (var i = 0; i < sSelectProductData.length; i++) {
			if(value==0&&sSelectProductData[i].pid==410){
				$("#sSelectProduct8").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==1&&sSelectProductData[i].pid==420){
				$("#sSelectProduct8").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
	    }
	}else if("sSelectPin5"==id){
		$("#sSelectProduct9").empty();
		$("#sSelectProduct9").append("<option>请选择</option>");
		
		for (var i = 0; i < doorTaoData.length; i++) {
			if(value==0&&doorTaoData[i].pid==0){
				$("#sSelectProduct9").append(
						"<option value='"+doorTaoData[i].id+"'>" + doorTaoData[i].name+ "</option>");
			}
			if(value==1&&doorTaoData[i].pid==1){
				$("#sSelectProduct9").append(
						"<option value='"+doorTaoData[i].id+"'>" + doorTaoData[i].name+ "</option>");
			}
			if(value==2&&doorTaoData[i].pid==2){
				$("#sSelectProduct9").append(
						"<option value='"+doorTaoData[i].id+"'>" + doorTaoData[i].name+ "</option>");
			}
	    }
	}else if("sSelectPin6"==id){
		$("#sSelectProduct10").empty();
		$("#sSelectProduct10").append("<option>请选择</option>");
		for (var i = 0; i < sSelectProductData.length; i++) {
			if(value==0&&sSelectProductData[i].pid==610){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==1&&sSelectProductData[i].pid==620){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==2&&sSelectProductData[i].pid==630){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==3&&sSelectProductData[i].pid==640){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==4&&sSelectProductData[i].pid==650){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==5&&sSelectProductData[i].pid==660){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==6&&sSelectProductData[i].pid==670){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==7&&sSelectProductData[i].pid==680){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==8&&sSelectProductData[i].pid==690){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==9&&sSelectProductData[i].pid==611){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==10&&sSelectProductData[i].pid==612){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==11&&sSelectProductData[i].pid==613){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==12&&sSelectProductData[i].pid==614){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==13&&sSelectProductData[i].pid==615){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
			if(value==14&&sSelectProductData[i].pid==616){
				$("#sSelectProduct10").append(
						"<option value='"+sSelectProductData[i].id+"'>" + sSelectProductData[i].name+ "</option>");
			}
	    }
	}		
}

function loadSelfProductData(id, div) {
	$.ajax({
		url : webRoot + '/spDic/listDic',
		type : "POST",
		dataType : "JSON",
		async : false,
		data : {
			"pid" : id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			// console.log(data);
			$("#" + div).empty();
			$("#" + div).append("<option>请选择</option>");
			for (var i = 0; i < data.length; i++) {
				$("#" + div).append(
						"<option value='"+data[i].id+"'>" + data[i].name
								+ "</option>");
			}
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function loadSelfData() {
	$.ajax({
		url : webRoot + '/spDic/listDic',
		type : "POST",
		dataType : "JSON",
		async : false,
		data : {
			"pid" : 0
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		success : function(data) {
			sSelectProductData=data;
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function loadDoorTaoSelfData() {
	$.ajax({
		url : webRoot + '/fpDoorDic/listDic',
		type : "POST",
		dataType : "JSON",
		data : {
			"pid" : 0
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		success : function(data) {
			doorTaoData=data;
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function colorLoadData(id) {
	var color_array=new Array("colorSelected","scolorSelected1","scolorSelected2","scolorSelected3","scolorSelected4","scolorSelected5","scolorSelected6");
	$.ajax({
		url : webRoot + '/fpDic/listDic',
		type : "POST",
		dataType : "JSON",
		data : {
			"pid" : id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			for (var j = 0; j < color_array.length; j++) {
				$("#" + color_array[j]).append("<option>请选择</option>");
				for (var i = 0; i < data.length; i++) {
					$("#" + color_array[j]).append(
							"<option value='"+data[i].id+"'>" + data[i].name
									+ "</option>");
				}
			}	
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function doorLoadData(id) {
	var door_array=new Array("sdoorSelected1","sdoorSelected2","sdoorSelected3","sdoorSelected4");
	$.ajax({
		url : webRoot + '/fpDic/listDic',
		type : "POST",
		dataType : "JSON",
		data : {
			"pid" : id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			// console.log(data);
			for (var j = 0; j < door_array.length; j++) {
				$("#" + door_array[j]).append("<option>请选择</option>");
				for (var i = 0; i < data.length; i++) {
					$("#" + door_array[j]).append(
							"<option value='"+data[i].id+"'>" + data[i].name
									+ "</option>");
				}
			}	
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function change() {
	var value = $("#select1  option:selected").val();

	if (value == "1") {
		$("#product").show();
		$("#s_product1").hide();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();
		$("#select2").attr("disabled", "disabled");
	} else {
		$("#s_product1").show();
		$("#select2").val(1);
		$("#product").hide();
		$("#select2").removeAttr("disabled");
	}

}
function rowEditControl(id){
	if(id==0){
		$("#select1").val(1);
	}else{
		$("#select1").val(2);
	}
	change();
	if(id!=0){
		$("#select2").val(id);
		selfChange();
	}
}

function selfChange() {
	var value = $("#select2  option:selected").val();

	if (value == "1") {
		$("#s_product1").show();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();

	} else if (value == "2") {
		$("#s_product2").show();
		$("#s_product1").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();
	} else if (value == "3") {
		$("#s_product3").show();
		$("#s_product2").hide();
		$("#s_product1").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();
	} else if (value == "4") {
		$("#s_product4").show();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product1").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();
	} else if (value == "5") {
		$("#s_product5").show();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product1").hide();
		$("#s_product6").hide();
		$("#s_product7").hide();
	} else if (value == "6") {
		$("#s_product6").show();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product1").hide();
		$("#s_product7").hide();
	} else {
		$("#s_product7").show();
		$("#s_product2").hide();
		$("#s_product3").hide();
		$("#s_product4").hide();
		$("#s_product5").hide();
		$("#s_product6").hide();
		$("#s_product1").hide();
	}

}

function selectClassify() {
	var value = $("#classify  option:selected").val();
	loadData(value, "catena");
}

function selectCatena() {
	var value = $("#catena  option:selected").val();
	loadData(value, "productname");
}

function selectProduct(object) {
	var id = $(object).children('option:selected').val();
	for (var i = 0; i < product.length; i++) {
		if (product[i].id == id) {
			$("#selectedPrice").html(product[i].price);
			break;
		}

	}
}

function addProduct() {
	var sum = $("#product_sum").val();
	if (sum == null || sum == "" || sum == undefined) {
		alert("请输入数量");
		return;
	}
	var discount = $("#product_discount").val();
	if (discount == null || discount == "" || discount == undefined) {
		discount = 10;
	}
	if(parseInt(discount)<parseInt(sdiscount)){
		alert("折扣不能低于"+sdiscount+",如需更低，请联系管理员！");
		return;
	}
	var colour = $("#colorSelected").children('option:selected').text();
	if (colour == null || colour == "请选择" || colour == undefined) {
		alert("请选择颜色");
		return;
	}
	var price = $("#selectedPrice").html();
	var remark = $("#product_remark").val();
	var name = $("#productname").children('option:selected').text();
	if (name == null || name == "" || name == undefined) {
		alert("请选择产品");
		return;
	}
	// alert( parseInt(price)+":"+parseInt(sum)+":"+parseFloat(discount));
	var value = parseInt(price) * parseInt(sum) * parseFloat(discount)*disUnit;
	var productData = "<table><tr><td>成品：</td><td>" + name
			+ "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;数量：</td><td>" + sum
			+ "</td></tr>"
	productData = productData + "<tr><td>总价：</td><td>"
			+ (parseInt(price) * parseInt(sum))
			+ "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;折后价：</td><td>" + value
			+ "</td></tr>";
	$("#product_value").html(productData);
	$('#myModal').modal('show');
}

function addSelfProduct(id) {
	if(id==1){
		var s_product1_thick = $("#s_product1_thick").val();
		var s_selected = $("#sSelectPin1").children('option:selected').val();
		if(s_selected==0){
			if(s_product1_thick>600){
				alert("厚度范围应当保持在600mm以内！");
				return ;
			}
		}else{
			if(s_product1_thick>450){
				alert("厚度范围应当保持在450mm以内！");
				return ;
			}
		}
		
	}
	var productData = "<table>";
	var discount = $("#s_product_discount"+id).val();
	if (discount == null || discount == "" || discount == undefined) {
		discount = 10;
	}
	if(parseInt(discount)<parseInt(sdiscount)){
		alert("折扣不能低于"+sdiscount+",如需更低，请联系管理员！");
		return;
	}
	var remark = $("#s_product_remark"+id).val();
	if(id==7){
		var price = $("#s_product"+id+"_price").val();
		var value = Math.ceil(parseInt(price)* parseFloat(discount)*disUnit);

		productData = productData + "<tr><td>总价：</td><td>"
				+ parseInt(price)
				+ "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;折后价：</td><td>" + value
				+ "</td></tr>";
	}else{
		var sum = $("#s_product_sum"+id).val();
		if (sum == null || sum == "" || sum == undefined) {
			alert("请输入数量");
			return;
		}
		
		var colour = $("#scolorSelected"+id).children('option:selected').text();
		if (colour == null || colour == "请选择" || colour == undefined) {
			alert("请选择颜色");
			return;
		}
		var price = $("#s_product"+id+"_price").html();
		
		
		var value = Math.ceil(parseInt(price) * parseInt(sum) * parseFloat(discount)*disUnit);

		productData = productData + "<tr><td>总价：</td><td>"
				+ (parseInt(price) * parseInt(sum))
				+ "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;折后价：</td><td>" + value
				+ "</td></tr>";
	}

	$("#s_product_value").html(productData);

	$("#addSOrder").attr("onclick","addSOrder("+id+")"); 
	$('#myModal3').modal('show');
}
function preprint() {
	$("div").remove(".print");
	$("table").remove(".order_head");
	print()
}
function print() {
	
	
	var flagArray=[0,0,0,0,0,0,0,0]
	for(var i = 0; i < order_detail_array.length; i++){
		var order = order_detail_array[i];
		if(order.flag==0){
			flagArray[0]=1;
			continue;
		}else if(order.flag==1){
			flagArray[1]=1;
			continue;
		}else if(order.flag==2){
			flagArray[2]=1;
			continue;
		}else if(order.flag==3){
			flagArray[3]=1;
			continue;
		}else if(order.flag==4){
			flagArray[4]=1;
			continue;
		}else if(order.flag==5){
			flagArray[5]=1;
			continue;
		}else if(order.flag==6){
			flagArray[6]=1;
			continue;
		}else{
			flagArray[7]=1;
			continue;
		}
	}
	for(var j = 0; j < flagArray.length; j++){
		if(j==0&&flagArray[j]==0){
			$("#c_order").remove();
		}else{
			if(flagArray[j]==0){
				var div ="#s_order_"+j;
				$(div).remove();
			}
		}
	}
	var order_head_length = $("#order_head").height();
	var c_length = $("#c_order").height();
	var s1 = $("#s_order_1").height();
	var s2 = $("#s_order_2").height();
	var s3 = $("#s_order_3").height();
	var s4 = $("#s_order_4").height();
	var s5 = $("#s_order_5").height();
	var s6 = $("#s_order_6").height();
	var s7 = $("#s_order_7").height();
	var has=400;
	for(var i=0;i<8;i++){
		if(i==0&&c_length!==null){
			has=has-c_length;
		}
		if(i==1&&s1!==null){
			if(has>=s1){
				has=has-c_length;
			}else{
				$("#c_order").after('<div style="page-break-after: always;" class="print"></div>');
				$("#s_order_1").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s1;
			}
		}
		if(i==2&&s2!==null){
			if(has>=s2){
				has=has-s2;
			}else{
				$("#s_order_1").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_2").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s2;
			}
		}
		if(i==3&&s3!==null){
			if(has>=s3){
				has=has-s3;
			}else{
				$("#s_order_2").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_3").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s3;
			}
		}
		if(i==4&&s4!==null){
			if(has>=s4){
				has=has-s4;
			}else{
				$("#s_order_3").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_4").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s4;
			}
		}
		if(i==5&&s5!==null){
			if(has>=s5){
				has=has-s5;
			}else{
				$("#s_order_4").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_5").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s5;
			}
		}
		if(i==6&&s6!==null){
			if(has>=s6){
				has=has-s6;
			}else{
				$("#s_order_5").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_6").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s6;
			}
		}
		if(i==7&&s7!==null){
			if(has>=s7){
				has=has-s7;
			}else{
				$("#s_order_6").after('<div style="page-break-after: always;"  class="print"></div>');
				$("#s_order_7").before('<table width="90%"  class="order_head">'+$("#order_head").html()+'</table>');
				has=400;
				has=has-s7;
			}
		}
	}
	console.log(order_head_length+"|"+c_length+"|"+s1+"|"+s2+"|"+s3+"|"+s4+"|"+s5+"|"+s6+"|"+s7);
	$("#visaReport").jqprint({
		debug : false, // 如果是true则可以显示iframe查看效果（iframe默认高和宽都很小，可以再源码中调大），默认是false
		importCSS : true, // true表示引进原来的页面的css，默认是true。（如果是true，先会找$("link[media=print]")，若没有会去找$("link")中的css文件）
		printContainer : true, // 表示如果原来选择的对象必须被纳入打印（注意：设置为false可能会打破你的CSS规则）。
		operaSupport : true
	// 表示如果插件也必须支持歌opera浏览器，在这种情况下，它提供了建立一个临时的打印选项卡。默认是true
	});
}

function saveConfirm(flag){
	$("#save_flag").val(flag);
	if(flag==0||order_detail_id==""||order_detail_id==null){
		$("#oreder_name").removeAttr("disabled");//要变成Enable，JQuery只能这么写  
	
	}else{
		$("#oreder_name").attr("disabled","disabled");//再改成disabled  
	}
	$('#myModal2').modal('show');
}

function saveOrder(){
	var flag = $("#save_flag").val()
	if($('#orderForm').valid()){
		var name = $("#oreder_name").val();
		$('#myModal2').modal('hide');
		
		if(flag==0||order_detail_id==""||order_detail_id==null){
			$.ajax({
				url : webRoot + '/historyOrder/validate',
				type : "POST",
				dataType : "JSON",
				data : {
					"ordername":name
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				xhrFields : {
					// 设置XMLHttpRequest的其它属性
					// 如果这里将'withCredentials'设置为true
					// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
					withCredentials : true
				},
				success : function(data) {
					if(data.result=="true"){
						alert("订单名称已存在，请重新输入！");
						return ;
					}else{
						saveOrderDetail();   
					}
				},
				error : function(data) {
					console.log(data);
				}
			});
        }else{
       	 updateOrderDetail();
        }
	}
	
}
function saveOrderDetail(){
	var name = $("#oreder_name").val();
	$.ajax({
		url : webRoot + '/historyOrder/save',
		type : "POST",
		dataType : "JSON",
		data : {
			"remark" : JSON.stringify(order_detail_array),"ordername":name
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			// console.log(data);
            alert("保存成功！");
            menu($('.page-sidebar-menu a:eq(1)'),'/historyOrder/init');
		},
		error : function(data) {
			console.log(data);
		}
	});
}
function updateOrderDetail(){
	var name = $("#oreder_name").val();
	$.ajax({
		url : webRoot + '/historyOrder/save',
		type : "POST",
		dataType : "JSON",
		data : {
			"remark" : JSON.stringify(order_detail_array),"ordername":name,"id":order_detail_id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		xhrFields : {
			// 设置XMLHttpRequest的其它属性
			// 如果这里将'withCredentials'设置为true
			// 则服务器也要相应设置'Access-Control-Allow-Credentials: true'.
			withCredentials : true
		},
		success : function(data) {
			// console.log(data);
            alert("保存成功！");
            menu($('.page-sidebar-menu a:eq(1)'),'/historyOrder/init');
		},
		error : function(data) {
			console.log(data);
		}
	});
}
/**
 * 计算（衣柜\书柜\酒柜\鞋柜）
 */
function calculateProduct1(){
	var id = $("#sSelectProduct1").children('option:selected').val();
	var id2 = $("#sSelectProduct2").children('option:selected').val();
	var id3 = $("#sSelectProduct3").children('option:selected').val();
	var open = $("#s_product1_open").children('option:selected').val();
	var sSelectPin1 = $("#sSelectPin1").children('option:selected').val();
	var width = $("#s_product1_width").val();
	var height = $("#s_product1_height").val();
	var thick = $("#s_product1_thick").val();
	var men=0;
	var ce=0;
	var ge=0;
	var s=0;
	// console.log(sSelectProductData);
	for (var i = 0; i < sSelectProductData.length; i++) {
		if (sSelectProductData[i].id == id) {
			men=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id2) {
			ce=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id3) {
			ge=sSelectProductData[i].price;
			continue;
		}
	}
	if(height<1601){
		s = men*thick*width*2.8/1000000;
	}
	if(sSelectPin1==0){
		men=men*(Math.ceil((width-100)/500)*0.001*height);
		ce=ce*(2*0.001*height);
		ge=ge*(Math.ceil((width-100)/500)*0.001*height);
	}else{
		men=men*(Math.ceil((width-100)/450)*0.001*height);
		ce=ce*(2*0.001*height);
		ge=ge*(Math.ceil((width-100)/450)*0.001*height);
	}
	
	var price = Math.ceil(men+ce+ge+s);
	if(open==2){
		price = price+Math.ceil((width-100)/2000)*860;
	}
	price = Math.ceil(price/ratio); 
	$("#s_product1_price").html(price);
}

function calculateProduct2(){
	var id = $("#sSelectProduct4").children('option:selected').val();
	var id2 = $("#sSelectProduct5").children('option:selected').val();
	var id3 = $("#sSelectProduct6").children('option:selected').val();
	var open = $("#s_product2_open").children('option:selected').val();
	var sSelectPin1 = $("#sSelectPin2").children('option:selected').val();
	var width = $("#s_product2_width").val();
	var height = $("#s_product2_height").val();
	var thick = $("#s_product2_thick").val();
	var men=0;
	var ce=0;
	var ge=0;
	var s=0;
	var t=0;
	// console.log(sSelectProductData);
	for (var i = 0; i < sSelectProductData.length; i++) {
		if (sSelectProductData[i].id == id) {
			men=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id2) {
			ce=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id3) {
			ge=sSelectProductData[i].price;
			continue;
		}
	}
	if(height<1601){
		s = men*thick*width*2.8/1000000;
	}
	if(thick>450){
		t = ge/0.45*Math.ceil((width-100)/450)*height*thick/1000000-(ge*(Math.ceil((width-100)/450)*0.001*height));
	}
	men=men*(Math.ceil((width-100)/450)*0.001*height);
	ce=ce*(2*0.001*height);
	ge=ge*(Math.ceil((width-100)/450)*0.001*height);
	console.log(men+"|"+ce+"|"+ge+"|"+s+"|"+t);
	var price = Math.ceil(men+ce+ge+s+t);
	if(open==2){
		price = price+Math.ceil((width-100)/2000)*860;
	}
	price = Math.ceil(price/ratio); 
	$("#s_product2_price").html(price);
}

function calculateProduct3(){
	var id = $("#sSelectProduct7").children('option:selected').val();
	var width = $("#s_product3_width").val();
	var height = $("#s_product3_height").val();
	var thick = $("#s_product3_thick").val();
	var yu=0;
	var diao=0;
	var gao=0;
	
	var id2=7+parseInt(id);
	var id3=14+parseInt(id);

	// console.log(sSelectProductData);
	for (var i = 0; i < sSelectProductData.length; i++) {
		if (sSelectProductData[i].id == id) {
			yu=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id2) {
			diao=sSelectProductData[i].price;
			continue;
		}
		if (sSelectProductData[i].id == id3) {
			gao=sSelectProductData[i].price;
			continue;
		}
	}
	var price = yu*width*0.001+diao*thick*0.001+gao*height*0.001;
	price = Math.ceil(price/ratio); 
	$("#s_product3_price").html(price);
}

function calculateProduct4(){
	var id = $("#sSelectProduct8").children('option:selected').val();
	var open = $("#s_product4_open").children('option:selected').val();
	var width = $("#s_product4_width").val();
	var height = $("#s_product4_height").val();
	var thick = $("#s_product4_thick").val();
	var c=0;
	var d=0;
	var s=0;
	var t=0;
	if(height<2051){
		s=2050
	}else{
		s=height
	}
	
    if(width<901){
		t=900
	}else{
		t=width;
	}
	for (var i = 0; i < sSelectProductData.length; i++) {
		if (sSelectProductData[i].id == id) {
			c=sSelectProductData[i].price;
			break;
		}
	}
	d=Math.ceil(c/0.9/2.05);
	var price=0;
	if(height>2050||width>900){
		if(open==2){
			// 推拉
			price = Math.ceil(d*s*t/1000000)+1000;
		}else{
			price=Math.ceil(d*s*t/1000000);
		}
	}else{
		price=c;
	}
	price = Math.ceil(price/ratio); 
	$("#s_product4_price").html(price);
}

function calculateProduct5(){
	var id = $("#sSelectProduct9").children('option:selected').val();
	
	var pin = $("#sSelectPin5").children('option:selected').val();
	var width = $("#s_product5_width").val();
	var height = $("#s_product5_height").val();
	var thick = $("#s_product5_thick").val();
	var open = $("#s_product5_open").children('option:selected').val();
	var method=0;
	var p=0;
	var q=0;
	var r=0;
	var s=0;
	var t=0;
	var u=0;
	if(width>400){
		$("#s_product5_method").html("平方");
		method=1;
	}else{
		$("#s_product5_method").html("米");
		method=2;
	}
	for (var i = 0; i < doorTaoData.length; i++) {
		if (doorTaoData[i].id == id) {
			p=doorTaoData[i].price;
			q=doorTaoData[i].price2;
			r=doorTaoData[i].price3;
			break;
		}
	}
	console.log(p+"|"+q+"|"+r+"|"+s+"|"+t+"|"+u);
	s=Math.ceil((height*2+thick*2)/1000*p);
	t=Math.ceil((height*2+thick*2)/1000*q);
	u=Math.ceil(((height*2+thick*2)*029/1000000)*r);
	
	p=Math.ceil((height*1+thick*2)/1000*p);
	q=Math.ceil((height*1+thick*2)/1000*q);
	r=Math.ceil((height*1+thick*2)*029/1000000*r);
	console.log(p+"|"+q+"|"+r+"|"+s+"|"+t+"|"+u);

	var price=0;
	
	if(pin==2){
		if(open==2){
			if(method==1){
				price=r;
			}else{
				if(width<301){
					price=p;	
				}else{
					price=q;
				}
			}
		}else{
			if(method==1){
				price=u;
			}else{
				if(width<301){
					price=s;	
				}else{
					price=t;
				}
			}
		}
	}else{
		if(method==1){
			price=r;
		}else{
			if(width<301){
				price=p;	
			}else{
				price=q;
			}
		}
	}
	console.log(price);
	price = Math.ceil(price/ratio); 
	$("#s_product5_price").html(price);
}

function calculateProduct6(){
	var id = $("#sSelectProduct10").children('option:selected').val();
	var width = $("#s_product6_width").val();
	var height = $("#s_product6_height").val();
	var thick = $("#s_product6_thick").val();
	var method=0;
	var q=0;
	
	for (var i = 0; i < sSelectProductData.length; i++) {
		if (sSelectProductData[i].id == id) {
			q=sSelectProductData[i].price;
			method=sSelectProductData[i].level;
			break;
		}
	}
	var price=0;
	if(method==1){
		price=Math.ceil(width*height*q/1000000);
		$("#s_product6_method").html("平方");
	}else if(method==2){
		price=Math.ceil(height*q/1000);
		$("#s_product6_method").html("米");
	}else if(method==3){
		price=q;
		$("#s_product6_method").html("个");
	}else{
		price=q;
		$("#s_product6_method").html("踏步");
	}
	
	price = Math.ceil(price/ratio)*1.5; 
	$("#s_product6_price").html(price);
}

