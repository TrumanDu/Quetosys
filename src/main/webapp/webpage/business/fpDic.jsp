<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<div class="portlet box green">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift"></i>成品字典
		</div>
  </div>
  <div class="portlet-body form">
  	<form id="fpDicForm" class="form-horizontal form-bordered" action="/fpDic/save" method="post">
  		<div class="form-group">
        <label class="col-md-3 control-label">名称:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="name" 
	          	value="${fpDic.name}"  maxlength="255"/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">级别:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="level" 
	          	value="${fpDic.level}"  maxlength="10"/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">价格:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="price" 
	          	value="${fpDic.price}"  maxlength="10"/>
	        </div>
        </div>
      </div>
  		<div class="form-group">
        <label class="col-md-3 control-label">父id:</label>
        <div class="col-md-4">
        	<div class="input-icon right">
	        	<i class="fa"></i>
	          <input type="text" class="form-control" name="pid" 
	          	value="${fpDic.pid}"  maxlength="10"/>
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
      <input type="hidden" name="id" value="${fpDic.id}">
  	</form>
  </div>
</div>
<script type="text/javascript">
	$(function(){
		$('#fpDicForm').validate();
	});
</script>