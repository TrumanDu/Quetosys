<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<style>
/* .table-c table{border-right:1px solid #F00;border-bottom:1px solid #F00} 
.table-c table td{border-left:1px solid #F00;border-top:1px solid #F00}  */
<!--
body {font-size: 10px;}
-->
</style>
<div class="col-md-12">
	<div class="row">
		<div class="form-group">
			<!-- <label class="control-label col-md-3"></label> -->
			<div class="col-md-6">
				<select class="form-control input-xlarge select2me"
					data-placeholder="Select..." id="select1" onchange="change()">
					<option value="1">成品</option>
					<option value="2">定制</option>
				</select>
			</div>
			<!-- <label class="control-label col-md-3"></label> -->
			<div class="col-md-6">
				<select class="form-control input-xlarge select2me"
					data-placeholder="Select..." id="select2" onchange="selfChange()"
					disabled="disabled">
					<option value="1">衣柜\书柜\酒柜\鞋柜</option>
					<option value="2">餐边柜\电视柜\矮柜</option>
					<option value="3">橱柜\浴室柜</option>
					<option value="4">木门(尺寸为测量长度）</option>
					<option value="5">门套\窗套</option>
					<option value="6">木作</option>
					<option value="7">其他</option>
				</select>
			</div>
		</div>
	</div>
	<br>


	<div class="panel panel-primary" id="product"  style="border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">成品</h3>
			<input id="cpid0" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName0" type="text" class="form-control"
								id="pruductName0" />
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-medium select2me"
								data-placeholder="Select..." id="classify"
								onchange="selectClassify()">
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">系列</label>
						<div>
							<select class="form-control input-medium select2me"
								data-placeholder="Select..." id="catena"
								onchange="selectCatena()">
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">产品</label>
						<div>
							<select class="form-control input-medium select2me"
								data-placeholder="Select..." id="productname"
								onchange="selectProduct(this)">
								<option>请选择</option>
							</select>
						</div>
					</div>
				</div>
				
			</div>

			<div class="row">
	             <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">颜色</label>
						<div>
							<select class="form-control input-medium select2me"
								data-placeholder="Select..." id="colorSelected">

							</select>
						</div>
					</div>
				</div>		
			
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="selectedPrice"></div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" id="product_sum" type="text"
								class="form-control" />
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="product_discount" type="text" id="product_discount"
								class="form-control" />
						</div>
					</div>
				</div>
			</div>
			
		<div class="row">

				<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control"
								id="product_remark" />
						</div>
					</div>
				</div>
		</div>
			
			<div class="form-actions">
				<div class="row">
					<div class="col-md-offset-5 col-md-6">
						<a class="btn green" onclick="addProduct()">提交</a>
					</div>
				</div>
			</div>
		</div>

	</div>



	<div class="panel panel-primary" id="s_product1" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（衣柜\书柜\酒柜\鞋柜）</h3>
			<input id="spid1" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName1" type="text" class="form-control"
								id="pruductName1" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin1" onchange="sSelectProduct('sSelectPin1')">
								<option value="">请选择</option>
								<option value="0">定制衣柜</option>
								<option value="1">定制书柜/酒柜</option>
								<option value="2">定制鞋柜</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct1">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">侧板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct2">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">隔板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct3">
				
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">开启方式</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="s_product1_open">
								<option value="1">平开门</option>
								<option value="2">推拉门</option>
							</select>
						</div>
					</div>
				</div>


			</div>

			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门型</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sdoorSelected1">
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected1">
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">W(宽度)<span class="required">*
						</span></label>
						<div>
							<input name="number" id="s_product1_width" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">D(厚度)<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product1_thick"/>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">H(高度)<span class="required">*
						</span></label>
						<div>
							<input name="number" id="s_product1_height" type="text" class="form-control input-small" onblur="calculateProduct1()" />
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product1_price"></div>
					</div>
				</div>
				
				
			</div>
			<div class="row">
			   <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum1"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount1"/>
						</div>
					</div>
				</div>
			   <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark1"/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(1)">提交</button>
				</div>
			</div>
		</div>
	</div>


	<div class="panel panel-primary" id="s_product2" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（餐边柜\电视柜\矮柜）</h3>
			<input id="spid2" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName2" type="text" class="form-control"
								id="pruductName2" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin2" onchange="sSelectProduct('sSelectPin2')">
								<option >请选择</option>
								<option value="0">定制餐边柜</option>
								<option value="1">定制电视柜</option>
								<option value="2">定制矮柜</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct4">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">侧板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct5">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">隔板</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct6">
								
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">开启方式</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="s_product2_open">
								<option value="1">平开门</option>
								<option value="2">推拉门</option>
							</select>
						</div>
					</div>
				</div>

				
			</div>

			<div class="row">
			     
			     <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门型</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sdoorSelected2">
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected2">
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">W(宽度)<span class="required">*
						</span></label>
						<div>
							<input  type="text" class="form-control input-small" id="s_product2_width"/>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">D(厚度)<span class="required">*
						</span></label>
						<div>
							<input  type="text" class="form-control input-small" id="s_product2_thick"/>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">H(高度)<span class="required">*
						</span></label>
						<div>
							<input  type="text" class="form-control input-small" id="s_product2_height" onblur="calculateProduct2()" />
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product2_price"></div>
					</div>
				</div>
				
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum2"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount2"/>
						</div>
					</div>
				</div>
				
			<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark2"/>
						</div>
					</div>
				</div>
			
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(2)">提交</button>
				</div>
			</div>
		</div>
	</div>



	<div class="panel panel-primary" id="s_product3" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（橱柜\浴室柜）</h3>
			<input id="spid3" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName3" type="text" class="form-control"
								id="pruductName3" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin3" onchange="sSelectProduct('sSelectPin3')">
								<option >请选择</option>
								<option value="0">橱柜</option>
								<option value="1">浴室柜</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">材质</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct7">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">地柜\浴室柜</label>
						<div>
							<input id="s_product3_width" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">吊柜</label>
						<div>
							<input id="s_product3_thick" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">高柜</label>
						<div>
							<input id="s_product3_height" type="text" class="form-control input-small" onblur="calculateProduct3()"/>
						</div>
					</div>
				</div>

				
			</div>

			<div class="row">
			   <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门型</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sdoorSelected3">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected3">
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product3_price"></div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum3"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount3"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark3"/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(3)">提交</button>
				</div>
			</div>
		</div>
	</div>


	<div class="panel panel-primary" id="s_product4" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（木门(尺寸为测量长度））</h3>
			<input id="spid4" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName4" type="text" class="form-control"
								id="pruductName4" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin4" onchange="sSelectProduct('sSelectPin4')">
								<option >请选择</option>
								<option value="0">木门及门套不带反扣线</option>
								<option value="1">木门及门套带反扣线</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">材质</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct8">
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">H(高度)</label>
						<div>
							<input id="s_product4_height" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">W(宽度)</label>
						<div>
							<input id="s_product4_width" type="text" class="form-control input-small" onblur="calculateProduct4()"/>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">D(厚度)<span class="required">*
						</span></label>
						<div>
							<input id="s_product4_thick" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>

				

			</div>

			<div class="row">
                 <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">开启方式</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="s_product4_open" >
								<option value="1">平开门</option>
								<option value="2">推拉门</option>
							</select>
						</div>
					</div>
				</div>
                 
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">门型</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sdoorSelected4">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected4">
							</select>
						</div>
					</div>
				</div>


				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product4_price"></div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum4"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount4"/>
						</div>
					</div>
				</div>

			</div>
			<div class="row">
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark4"/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(4)">提交</button>
				</div>
			</div>
		</div>
	</div>


	<div class="panel panel-primary" id="s_product5" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（门套\窗套）</h3>
			<input id="spid5" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName5" type="text" class="form-control"
								id="pruductName5" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin5" onchange="sSelectProduct('sSelectPin5')">
								<option >请选择</option>
								<option value="0">门套双包边</option>
								<option value="1">门套单包边</option>
								<option value="2">窗套单包边</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">材质</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct9">
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">窗套四面\三面</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="s_product5_open">
								<option value="1">四面</option>
								<option value="2">三面</option>
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">W(宽度)</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product5_height"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">H(高度)</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product5_thick"/>
						</div>
					</div>
				</div>

				

			</div>

			<div class="row">
			     <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">D(厚度)<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product5_width" onblur="calculateProduct5()"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单位</label>
						<div id="s_product5_method"></div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected5">
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product5_price"></div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum5"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount5"/>
						</div>
					</div>
				</div>
				
			</div>
			<div class="row">
			<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark5" />
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(5)">提交</button>
				</div>
			</div>
		</div>
	</div>


	<div class="panel panel-primary" id="s_product6" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（木作）</h3>
			<input id="spid6" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName6" type="text" class="form-control"
								id="pruductName6" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">品类</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectPin6" onchange="sSelectProduct('sSelectPin6')">
								<option >请选择</option>
								<option value="0">飘窗台</option>
								<option value="1">护墙板</option>
								<option value="2">装饰木柱100²</option>
								<option value="4">大板装饰50mm厚度</option>
								<option value="3">方柱法兰</option>
								<option value="5">榻榻米按投影面积算</option>
								<option value="6">顶线10cm以内</option>
								<option value="7">顶线拐角</option>
								<option value="8">踢脚线</option>
								<option value="9">地板</option>
								<option value="10">楼梯踏步900mm含扶手立柱</option>
								<option value="11">楼梯踏步1200mm含扶手立柱</option>
								<option value="12">楼梯大柱</option>
								<option value="13">楼梯脚线</option>
								<option value="14">楼梯护板</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">材质</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="sSelectProduct10">
				
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">W(宽度)</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product6_height"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">D(厚度)</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product6_width" onblur="calculateProduct6()"/>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">H(高度)<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product6_thick"/>
						</div>
					</div>
				</div>
				
			</div>

			<div class="row">

                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单位</label>
						<div id="s_product6_method"></div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">颜色</label>
						<div>
							<select class="form-control input-small select2me"
								data-placeholder="Select..." id="scolorSelected6">
							</select>
						</div>
					</div>
				</div>

				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label ">单价</label>
						<div id="s_product6_price"></div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">数量<span class="required">*
						</span></label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_sum6"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">折扣</label>
						<div>
							<input name="number" type="text" class="form-control input-small" id="s_product_discount6"/>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">备注</label>
						<div>
							<input name="remark" type="text" class="form-control input-small" id="s_product_remark6"/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(6)">提交</button>
				</div>
			</div>
		</div>
	</div>


	<div class="panel panel-primary" id="s_product7" style="display: none;border-color: #5a0008;">
		<div class="panel-heading" style="color: #D8E3F2;background-color: #5a0008;border-color: #5a0008;">
			<h3 class="panel-title">定制（其他）</h3>
			<input id="spid7" type="hidden" value="0" />
		</div>
		<div class="panel-body">
			<div class="row">
			    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
						<label class="control-label">名称</label>
						<div>
							<input name="pruductName7" type="text" class="form-control"
								id="pruductName7" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
					<label class="control-label">材料</label>
						<div>
							<input name="s_product_material" id="s_product_material" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
					<label class="control-label">尺寸</label>
						<div>
							<input name="number" id="s_product7_size" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
					<label class="control-label">价格</label>
						<div>
							<input name="number" id="s_product7_price" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
					<label class="control-label">折扣</label>
						<div>
							<input name="number" id="s_product_discount7" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
					<div class="form-group">
					<label class="control-label">备注</label>
						<div>
							<input name="number" id="s_product_remark7" type="text" class="form-control input-small" />
						</div>
					</div>
				</div>
				
			</div>

		</div>
		<div class="form-actions">
			<div class="row">
				<div class="col-md-offset-5 col-md-6">
					<button type="submit" class="btn green" onclick="addSelfProduct(7)" >提交</button>
				</div>
			</div>
		</div>
	</div>

</div>


<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel">成品信息确认</h4>
			</div>
			<div class="modal-body" id="product_value"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">取消
				</button>
				<button type="button" class="btn green" onclick="addCOrder()">
					添加</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>

<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal3" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel3" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel3">订制信息确认</h4>
			</div>
			<div class="modal-body" id="s_product_value"></div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">取消
				</button>
				<button type="button" class="btn green"  id="addSOrder">
					添加</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>




<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel2" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel2">是否保存当前订单信息？</h4>
			</div>
			<div class="modal-body" >
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="form-group" >
					<label class="control-label">订单名称:</label>
					<form id="orderForm" action="#" method="post">
						<div>
							 <input name="oreder_name" required placeholder="请输入订单名称！" title="请输入订单名称！" id="oreder_name" type="text" class="form-control input-medium" />
						</div>
						<input id="save_flag" type="hidden"/>
					</form>	
					</div>
				</div>
			</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">取消
				</button>
				<button type="button" class="btn btn-primary" onclick="saveOrder()">保存</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>
<script type="text/javascript">
	jQuery(document).ready(function() {
		loadData("0", "classify");//获取品类
		//loadData("100", "colorSelected");//获取颜色
		colorLoadData("100");//获取颜色
		doorLoadData("101");//获取门形
		loadSelfData();//获取所有定做数据
		order_detail_array=$.parseJSON('${historyOrder.remark}');
		console.log('${historyOrder.id}');
		console.log('${historyOrder.ordername}');
		order_detail_id='${historyOrder.id}';
		order_detail_name='${historyOrder.ordername}';
		if(order_detail_array==null){
			order_detail_array = new Array();
		}
		if(order_detail_array!=null&&order_detail_array.length>0){
			editOrder();
			$("#oreder_name").val(order_detail_name);
		}
		$('#orderForm').validate();
	});
	var ratio = 0.95;
	var disUnit = 0.1;
	var sdiscount="${USER_LOGIN.email}";
	console.log(sdiscount);
	if(sdiscount==""){
		sdiscount=8;
	}
	var sSelectProductData;
	var doorTaoData;
	loadDoorTaoSelfData();
</script>
<div>
	<div id="visaReport">
		<table width="100%"  id="order_head" style="border: 1px solid black;border-left: none;border-right: none;border-top: none;">
			<tbody>
			    <tr>
					<td colspan="12" align="left">
					<img alt="" src="${webRoot}/static/back.jpg">
					</td>
				</tr>
			    
				<tr>
					<td colspan="12" align="center"><h2>
							<b>家居产品订货单</b>
						</h2></td>
				</tr>
				<tr>
					<td colspan="4" align="left"><b>客户姓名： </b><span
						style="text-decoration: underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
					<td colspan="4" align="left"><b>手机： </b><span
						style="text-decoration: underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
					<td colspan="4" align="left"><b>电话（宅）：</b><span
						style="text-decoration: underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
				</tr>
				<tr>
					<td colspan="8" align="left"><b>送货地址：</b><span
						style="text-decoration: underline">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
					<td colspan="4" align="left"><b>签单日期：&nbsp;</b><span
						style="text-decoration: underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
				</tr>
			</tbody>
		</table>

		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;" id="c_order">
			<tbody>
				<tr>
					<td colspan="12" align="center">
					<!-- <h4 style="height: 10px;">
							<b>成品</b>
						</h4> -->
					<font style="font-weight:bold;font-size: medium;">成品</font>	
				   </td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>系列</td>
					<td>产品</td>
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>

			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;"  id="s_order_1" >
			<tbody>
				<tr>
				<td colspan="17" align="center">
				<!-- <h4 style="height: 10px;"><b>（衣柜\书柜\酒柜\鞋柜）</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">（衣柜\书柜\酒柜\鞋柜）</font>	
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>门板</td>
					<td>侧板</td>
					<td>隔板</td>
					<td>开启方式</td>
					<td>W(宽度)</td>
					
					<td>D(厚度)</td>
					<td>H(高度)</td>
					<td>门型</td>
					
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;" id="s_order_2" >
			<tbody>
				<tr>
				<td colspan="17" align="center">
				<!-- <h4 style="height: 10px;"><b>（餐边柜\电视柜\矮柜）</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">（餐边柜\电视柜\矮柜）</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>门板</td>
					<td>侧板</td>
					<td>隔板</td>
					<td>开启方式</td>
					<td>W(宽度)</td>
					
					<td>D(厚度)</td>
					<td>H(高度)</td>
					<td>门型</td>
					
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;"  id="s_order_3" >
			<tbody>
				<tr>
				<td colspan="14" align="center">
				<!-- <h4 style="height: 10px;"><b>橱柜\浴室柜</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">橱柜\浴室柜</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>材质&nbsp;&nbsp;&nbsp;</td>
					<td>地柜\浴室柜</td>
					<td>吊柜</td>
					<td>高柜</td>
					<td>门型</td>
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;"  id="s_order_4" >
			<tbody>
				<tr>
				<td colspan="15" align="center">
				<!-- <h4 style="height: 10px;"><b>木门(尺寸为测量长度）</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">木门(尺寸为测量长度）</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>材质&nbsp;&nbsp;&nbsp;</td>
					<td>H(高度)</td>
					<td>W(宽度)</td>
					<td>D(厚度)</td>
					<td>开启方式</td>
					<td>门型</td>
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;" id="s_order_5" >
			<tbody>
				<tr>
				<td colspan="15" align="center">
				<!-- <h4 style="height: 10px;"><b>门套\窗套</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">门套\窗套</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>材质&nbsp;&nbsp;&nbsp;</td>
					<td>窗套四面\三面 </td>
					<td>W(宽度)</td>
					<td>H(高度) </td>
					<td>D(厚度)</td>
					<td>单位</td>
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;" id="s_order_6" >
			<tbody>
				<tr>
				<td colspan="15" align="center">
				<!-- <h4 style="height: 10px;"><b>木作</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">木作</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>品类</td>
					<td>材质&nbsp;&nbsp;&nbsp;</td>
					<td>W(宽度)</td>
					<td>D(厚度)</td>
					<td>H(高度) </td>
					<td>单位</td>
					<td>颜色</td>
					<!-- <td>单价</td> -->
					<td>数量</td>
					<!-- <td>价格</td> -->
					<td>折扣</td>
					<td>折后价</td>
					<!-- <td>备注</td> -->
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>
		
		<table width="100%" border="1" cellpadding="0" cellspacing="0" style="border: 1px solid black;border-collapse:collapse;border-top: none;" id="s_order_7" >
			<tbody>
				<tr>
				<td colspan="15" align="center">
				<!-- <h4 style="height: 10px;"><b>其它</b></h4> -->
				<font style="font-weight:bold;font-size: medium;">其它</font>
				</td>
				</tr>
				<tr id="c_head">
					<!-- <td>序号</td> -->
					<td>名称</td>
					<td>材料</td>
					<td>尺寸</td>

					<td>折扣</td>
					<td>折后价</td>
					<td width="50">备注</td>
				</tr>
			</tbody>
		</table>

		<table width="100%" style="border: 1px solid black; border-collapse:collapse;border-top: none;"
			id="c_order">
			<tr id="sum_head">
				<td colspan="4" align="right"><div id="order_num_upper">合计金额：</div></td>
				<td colspan="5">&nbsp;</td>
				<td colspan="3"><div id="order_num">元</div></td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none">
			<tr>
				<td colspan="12" align="left">付款确认：&nbsp;订金/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;余额/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;余额缴纳时间/</td>
			</tr>
		</table>

		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td colspan="12" align="left">送货时间（24小时制）/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对时间：
					有严格要求□ &nbsp;&nbsp;大概要求□</td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td nowrap>额外内容:</td>
				<td colspan="11" align="left">客户预订正常品货款必须支付总金额的30%作为定金，定制产品必须支付总金额的80%作为定金，提货前补足余货款，且半年之内必须结清所有货款。所定货品不得随意取消或者更改，否则定金恕不退还。</td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td colspan="12" align="left">顾客要求内容：</td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td colspan="12" align="left">公司特殊提醒：</td>
			</tr>
		</table>
		<table width="100%"
			style="border: 1px solid black; border-top: none; border-bottom: none">
			<tr>
				<td colspan="12" align="left">对以上内容如清楚无误请确认签字：</td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td colspan="12" align="left">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售确认：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户确认：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp设计师确认：
                </td>
			</tr>
		</table>
		<table width="100%" style="border: 1px solid black; border-top: none;">
			<tr>
				<td colspan="12" align="left">订货须知：<br> 
				    <font style="font-size: 8px;">
				    ①所定产品需参照样品标准订购。<br>
					②本订单为派克兄弟实木家居专用，其他单位或个人使用无效。<br>
					③本公司产品为纯实木结构，因此可能存在如色差、纹理的大小、棕眼及某些花纹处凹凸不平的现象以及因环境干湿度而出现的变形、膨胀、开裂问题，望顾客周知。<br>
					④本公司产品自顾客收货之日起如结构、工艺等质量问题或造成产品变形、开裂、损坏而影响用户的可直接拨打派克兄弟实木家居服务热线。<br>
					⑤如无特殊情况，订货周期为2个月。<br> ⑥此订单为您选购家居后的唯一有效凭证，请您妥善保管。<br>
					⑦本订单有效期为六个月，过期作废。<br>
					⑧定制品下单生产后不可随意更改材质、颜色、尺寸等；若更改，需付费更改，并征得销售、设计师、工厂下单人员、生产人员的一致同意后方可更改。<br></font>
				</td>
			</tr>
		</table>

	</div>
	<div class="form-actions">
		<div class="row">
			<div class="col-md-offset-4 col-md-6">
				<a class="btn green" onclick="saveConfirm(1)">保存</a> &nbsp;&nbsp;<a class="btn green" onclick="saveConfirm(0)">另存为</a> &nbsp;&nbsp; <a
					class="btn green" onclick="preprint()">打印</a>
			</div>
		</div>
	</div>
</div>

