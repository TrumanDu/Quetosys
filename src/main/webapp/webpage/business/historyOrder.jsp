<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<div class="portlet box green">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift"></i>历史信息
		</div>
  </div>
  <div class="portlet-body form">
  	<form id="historyOrderForm" class="form-horizontal form-bordered" action="/historyOrder/save" method="post">
  		<div class="form-group">
        <label class="col-md-3 control-label">创建人:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="createuser" 
	          	value="${historyOrder.createuser}"  maxlength="255"/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">创建时间:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="date" class="form-control" name="createdate" 
	          	value="${historyOrder.createdate}"  maxlength=""/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">名称:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="ordername" 
	          	value="${historyOrder.ordername}"  maxlength="255"/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">备注:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="remark" 
	          	value="${historyOrder.remark}"  maxlength="255"/>
	        </div>
        </div>
      </div>
      <div class="form-actions">
        <div class="col-md-9 col-md-offset-3">
          <button type="button" class="btn btn-primary" onclick="save(this)">
          	<spring:message code="btn.save"></spring:message>
          </button>
          <button type="reset" class="btn btn-default" onclick="cancel()">
          	<spring:message code="btn.return"></spring:message>
          </button>
        </div>
      </div>
      <input type="hidden" name="id" value="${historyOrder.id}">
  	</form>
  </div>
</div>
<script type="text/javascript">
	$(function(){
		$('#historyOrderForm').validate();
	});
</script>