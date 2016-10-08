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


var product;
var order_num = 0;
var order_detail_array =new Array();

function COrder(classify, catena, name, colour, price, quantity,
		totalprices, discount, endprices, remark1) {
	this.classify = classify;
	this.catena = catena;
	this.name = name;
	this.colour = colour;
	this.price = price;
	this.quantity = quantity;
	this.totalprices = totalprices;
	this.totalprices = totalprices;
	this.discount = discount;
	this.endprices = endprices;
	this.remark1 = remark1;
}

function addCOrder() {
	var discount = $("#product_discount").val();
	var classify = $("#classify").children('option:selected').text();
	var catena = $("#catena").children('option:selected').text();
	var name = $("#productname").children('option:selected').text();
	var colour = $("#colorSelected").children('option:selected').text();
	var price = $("#selectedPrice").html();
	;
	var quantity = $("#product_sum").val();
	var totalprices = parseInt(price) * parseInt(quantity);
	var endprices = parseInt(price) * parseInt(quantity)
			* parseFloat(discount);
	var remark1 = $("#product_remark").val();
	var cOrder = new COrder(classify, catena, name, colour, price,
			quantity, totalprices, discount, endprices, remark1);
	order_detail_array.push(cOrder);
	// console.log(cOrder);
	var newRow = "<tr><td>" + classify + "</td><td>" + catena
			+ "</td><td>" + name + "</td><td>" + colour + "</td><td>"
			+ price + "</td>" + "<td>" + quantity + "</td><td>"
			+ totalprices + "</td><td>" + discount + "</td><td>"
			+ endprices + "</td><td>店长签字</td><td>" + remark1 + "</td></tr>";
	$("#c_order tr:last").after(newRow);
	order_num = order_num + endprices;
	$("#order_num").html(order_num + "元");
	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	$("#c_order td").dblclick(
			function() {
				var trSeq = $(this).parent().parent().find("tr").index(
						$(this).parent());
				if (trSeq > 1) {
					if (order_num > 0) {
						var os = $(this).parent().find('td').eq(9).text();
						order_num = order_num - os;
						$("#order_num").html(order_num + "元");
						$("#order_num_upper").html(
								"合计金额：" + toUpper(order_num + ""));
					}
					$(this).parent().remove();
				}

			})
	$('#myModal').modal('hide');
}

function addSOrder(id) {
	
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
    	var endprices1 = parseInt(s_product1_price) * parseInt(s_product_sum1)
    			* parseFloat(s_product_discount1);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow1 = "<tr><td>" + sSelectPin1 + "</td><td>" + sSelectProduct1
    			+ "</td><td>" + sSelectProduct2 + "</td><td>" + sSelectProduct3 + "</td><td>"
    			+ s_product1_open + "</td>" + "<td>" + s_product1_width + "</td><td>"
    			+ s_product1_thick + "</td><td>" + s_product1_height + "</td><td>" + sdoorSelected1 + "</td><td>" + scolorSelected1 + "</td><td>"
    			+ s_product1_price + "</td><td>" + s_product_sum1 + "</td><td>" + totalprices1 + "</td><td>" + s_product_discount1 + "</td><td>" + endprices1 + "</td><td>店长签字</td><td>" + s_product_remark1 + "</td></tr>";
    	$("#s_order_1 tr:last").after(newRow1);
    	order_num = order_num + endprices1;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_1 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})
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
    	var endprices2 = parseInt(s_product2_price) * parseInt(s_product_sum2)
    			* parseFloat(s_product_discount2);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow2 = "<tr><td>" + sSelectPin2 + "</td><td>" + sSelectProduct4
    			+ "</td><td>" + sSelectProduct5 + "</td><td>" + sSelectProduct6 + "</td><td>"
    			+ s_product2_open + "</td>" + "<td>" + s_product2_width + "</td><td>"
    			+ s_product2_thick + "</td><td>" + s_product2_height + "</td><td>" + sdoorSelected2 + "</td><td>" + scolorSelected2 + "</td><td>"
    			+ s_product2_price + "</td><td>" + s_product_sum2 + "</td><td>" + totalprices2 + "</td><td>" + s_product_discount2 + "</td><td>" + endprices2 + "</td><td>店长签字</td><td>" + s_product_remark2 + "</td></tr>";
    	$("#s_order_2 tr:last").after(newRow2);
    	order_num = order_num + endprices2;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_2 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})	
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
    	var endprices3 = parseInt(s_product3_price) * parseInt(s_product_sum3)
    			* parseFloat(s_product_discount3);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow3 = "<tr><td>" + sSelectPin3 + "</td><td>" + sSelectProduct7
    			+ "</td><td>" + s_product3_width + "</td><td>" + s_product3_thick + "</td><td>"
    			+ s_product3_height + "</td><td>" + sdoorSelected3 + "</td><td>" + scolorSelected3 + "</td><td>"
    			+ s_product3_price + "</td><td>" + s_product_sum3 + "</td><td>" + totalprices3 + "</td><td>" + s_product_discount3 + "</td><td>" + endprices3 + "</td><td>店长签字</td><td>" + s_product_remark3 + "</td></tr>";
    	$("#s_order_3 tr:last").after(newRow3);
    	order_num = order_num + endprices3;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_3 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})	
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
    	var endprices4 = parseInt(s_product4_price) * parseInt(s_product_sum4)
    			* parseFloat(s_product_discount4);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow4 = "<tr><td>" + sSelectPin4 + "</td><td>" + sSelectProduct8
    			+ "</td><td>" + s_product4_height + "</td><td>" + s_product4_width + "</td><td>"
    			+ s_product4_thick + "</td><td>" + s_product4_open + "</td><td>" + sdoorSelected4 + "</td><td>" + scolorSelected4 + "</td><td>"
    			+ s_product4_price + "</td><td>" + s_product_sum4 + "</td><td>" + totalprices4 + "</td><td>" + s_product_discount4 + "</td><td>" + endprices4 + "</td><td>店长签字</td><td>" + s_product_remark4 + "</td></tr>";
    	$("#s_order_4 tr:last").after(newRow4);
    	order_num = order_num + endprices4;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_4 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})	
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
    	var endprices5 = parseInt(s_product5_price) * parseInt(s_product_sum5)
    			* parseFloat(s_product_discount5);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow5 = "<tr><td>" + sSelectPin5 + "</td><td>" + sSelectProduct9
    			+ "</td><td>" + s_product5_open + "</td><td>" + s_product5_height + "</td><td>" + s_product5_thick + "</td><td>"
    			+ s_product5_width + "</td><td>" + s_product5_method + "</td><td>" + scolorSelected5 + "</td><td>"
    			+ s_product5_price + "</td><td>" + s_product_sum5 + "</td><td>" + totalprices5 + "</td><td>" + s_product_discount5 + "</td><td>" + endprices5 + "</td><td>店长签字</td><td>" + s_product_remark5 + "</td></tr>";
    	$("#s_order_5 tr:last").after(newRow5);
    	order_num = order_num + endprices5;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_5 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})	
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
    	var endprices6 = parseInt(s_product6_price) * parseInt(s_product_sum6)
    			* parseFloat(s_product_discount6);
    	/*var cOrder = new COrder(classify, catena, name, colour, price,
    			quantity, totalprices, discount, endprices, remark1);
    	order_detail_array.push(cOrder);*/
    	// console.log(cOrder);
    	var newRow6 = "<tr><td>" + sSelectPin6 + "</td><td>" + sSelectProduct10
    			+ "</td><td>" + s_product6_height + "</td><td>" + s_product6_width + "</td><td>"
    			+ s_product6_thick + "</td><td>" + s_product6_method + "</td><td>" + scolorSelected6 + "</td><td>"
    			+ s_product6_price + "</td><td>" + s_product_sum6 + "</td><td>" + totalprices6 + "</td><td>" + s_product_discount6 + "</td><td>" + endprices6 + "</td><td>店长签字</td><td>" + s_product_remark6 + "</td></tr>";
    	$("#s_order_6 tr:last").after(newRow6);
    	order_num = order_num + endprices6;
    	$("#order_num").html(order_num + "元");
    	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
    	$("#s_order_6 td").dblclick(
    			function() {
    				var trSeq = $(this).parent().parent().find("tr").index(
    						$(this).parent());
    				if (trSeq > 1) {
    					if (order_num > 0) {
    						var os = $(this).parent().find('td').eq(9).text();
    						order_num = order_num - os;
    						$("#order_num").html(order_num + "元");
    						$("#order_num_upper").html(
    								"合计金额：" + toUpper(order_num + ""));
    					}
    					$(this).parent().remove();
    				}

    			})	
    }else{
    	
    }
	$('#myModal3').modal('hide');
}

function editOrder(){
	order_num=0;
	for(var i = 0; i < order_detail_array.length; i++){
		var order = order_detail_array[i];
		var newRow = "<tr><td>" + order.classify + "</td><td>" + order.catena
		+ "</td><td>" + order.name + "</td><td>" + order.colour + "</td><td>"
		+ order.price + "</td>" + "<td>" + order.quantity + "</td><td>"
		+ order.totalprices + "</td><td>" + order.discount + "</td><td>"
		+ order.endprices + "</td><td>店长签字</td><td>" + order.remark1 + "</td></tr>";
	$("#c_order tr:last").after(newRow);
	order_num = order_num + order.endprices;
	$("#order_num").html(order_num + "元");
	$("#order_num_upper").html("合计金额：" + toUpper(order_num + ""));
	$("#c_order td").dblclick(
		function() {
			var trSeq = $(this).parent().parent().find("tr").index(
					$(this).parent());
			if (trSeq > 1) {
				if (order_num > 0) {
					var os = $(this).parent().find('td').eq(9).text();
					order_num = order_num - os;
					$("#order_num").html(order_num + "元");
					$("#order_num_upper").html(
							"合计金额：" + toUpper(order_num + ""));
				}
				$(this).parent().remove();
			}

		})
	}
	
}

function loadData(id, div) {
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
		discount = 1;
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
	var value = parseInt(price) * parseInt(sum) * parseFloat(discount);
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
	
	var sum = $("#s_product_sum"+id).val();
	if (sum == null || sum == "" || sum == undefined) {
		alert("请输入数量");
		return;
	}
	var discount = $("#s_product_discount"+id).val();
	if (discount == null || discount == "" || discount == undefined) {
		discount = 1;
	}
	var colour = $("#scolorSelected"+id).children('option:selected').text();
	if (colour == null || colour == "请选择" || colour == undefined) {
		alert("请选择颜色");
		return;
	}
	var price = $("#s_product"+id+"_price").html();
	var remark = $("#s_product_remark"+id).val();
	
	var value = parseInt(price) * parseInt(sum) * parseFloat(discount);
	var productData = "<table>"
	productData = productData + "<tr><td>总价：</td><td>"
			+ (parseInt(price) * parseInt(sum))
			+ "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;折后价：</td><td>" + value
			+ "</td></tr>";
	$("#s_product_value").html(productData);
	$("#addSOrder").attr("onclick","addSOrder("+id+")"); 
	$('#myModal3').modal('show');
}

function print() {
	$("#visaReport").jqprint({
		debug : false, // 如果是true则可以显示iframe查看效果（iframe默认高和宽都很小，可以再源码中调大），默认是false
		importCSS : true, // true表示引进原来的页面的css，默认是true。（如果是true，先会找$("link[media=print]")，若没有会去找$("link")中的css文件）
		printContainer : true, // 表示如果原来选择的对象必须被纳入打印（注意：设置为false可能会打破你的CSS规则）。
		operaSupport : true
	// 表示如果插件也必须支持歌opera浏览器，在这种情况下，它提供了建立一个临时的打印选项卡。默认是true
	});
}

function saveConfirm(){
	$('#myModal2').modal('show');
}

function saveOrder(){
	var name = $("#oreder_name").val();
	$('#myModal2').modal('hide');
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

