<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<title><spring:message code="title"></spring:message></title>
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="${webRoot}/static/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<link href="${webRoot}/static/admin/pages/css/login.css" rel="stylesheet" type="text/css"/>
	<!-- BEGIN THEME STYLES -->
	<link href="${webRoot}/static/global/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/global/css/plugins.css" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
	<link href="${webRoot}/static/admin/layout/css/themes/darkblue.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="${webRoot}/static/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>
	<!-- END THEME STYLES -->
</head>
<%-- style="background:url(${webRoot}/static/logo.png) no-repeat center" --%>
<body class="login" >
     <img border='0' src='${webRoot}/static/ad1.jpg' width='100%' height='100%' style='position: absolute;left:0px;top:0px;z-index: -1'>
	<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
	<div class="menu-toggler sidebar-toggler">
	</div>
	<!-- END SIDEBAR TOGGLER BUTTON -->
	<!-- BEGIN LOGO -->
	<div class="logo">
		<div style="margin-top: 6px;">
			<!-- <span style="color: #fff;font-size: 24px;">派克</span><span style="color: red;font-size: 24px;">兄弟家居</span> -->
		</div>
		<%-- <img src="${webRoot}/static/admin/layout/img/logo.jpg" alt=""/> --%>
	</div>
	<!-- END LOGO -->
	<!-- BEGIN LOGIN -->
	<div class="content" style="border-radius: 15px !important; border: 1px solid #5a0008;">
		<!-- BEGIN LOGIN FORM -->
		<form id="loginForm" action="${webRoot}/login/checkUser" method="post">
		    <div style="float:left;" ><img src="${webRoot}/static/logo.jpg" alt=""/></div>
		    <div style="float:left; ">
			<%-- <h3 class="form-title"><spring:message code="title"></spring:message></h3> --%>
			<div class="form-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">
					<spring:message code="login.label.username"></spring:message>：
				</label>
				<div class="input-icon right">
					<i class="fa"></i>
					<input class="form-control form-control-solid placeholder-no-fix" type="text" 
						autocomplete="off" name="username" 
						placeholder="<spring:message code="login.label.username"></spring:message>"
						required title="<spring:message code="login.msg.username"></spring:message>" style="background-color: #fff;"/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label visible-ie8 visible-ie9">
					<spring:message code="login.label.password"></spring:message>：
				</label>
				<div class="input-icon right">
					<i class="fa"></i>
					<input class="form-control form-control-solid placeholder-no-fix" type="password" 
						autocomplete="off" name="password" 
						placeholder="<spring:message code="login.label.password"></spring:message>"
						required title="<spring:message code="login.msg.password"></spring:message>" style="background-color: #fff;"/>
				</div>
			</div>
			<div class="form-actions" >
				<button type="button" id="loginBtn" class="btn btn-success uppercase" style="background-color: #5a0008">
					<spring:message code="login.btn.login"></spring:message>
				</button>
			</div>
			<%-- <div class="login-options">
				<h4><spring:message code="login.label.otherLogin"></spring:message></h4>
				
			</div> --%>
			</div>
		</form>
		<!-- END LOGIN FORM -->
	</div>
	<div class="copyright">
	 <spring:message code="footer"></spring:message>.
	</div>
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<!--[if lt IE 9]>
	<script src="${webRoot}/static/global/plugins/respond.min.js"></script>
	<script src="${webRoot}/static/global/plugins/excanvas.min.js"></script> 
	<![endif]-->
	<script src="${webRoot}/static/global/plugins/jquery.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script src="${webRoot}/static/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/jquery-validation/js/additional-methods.min.js" type="text/javascript"></script>
	<script src="${webRoot}/static/global/plugins/jquery-validation/js/localization/messages_zh.js" type="text/javascript"></script>
	<script src="${webRoot}/static/custom/validate-override.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<script type="text/javascript">
		// 项目访问根目录
		var webRoot = '${webRoot}';
	</script>
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="${webRoot}/static/global/scripts/metronic.js" type="text/javascript"></script>
	<script src="${webRoot}/static/admin/layout/scripts/layout.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL SCRIPTS -->
	
	<script type="text/javascript">
		$(function(){
			Metronic.init(); // init metronic core components
			Layout.init(); // init current layout
			
			$('#loginForm').validate();
			
			$("#loginBtn").click(function(){
				if($('#loginForm').valid()){
					$.ajax({
						type: 'post',
						url: $('#loginForm').attr('action'),
						data: $('#loginForm').serialize(),
						dataType: 'json',
						success: function(data){
							if(data.result == 'login_success'){
								window.location.href =  webRoot + '/index';
							}
							else{
								alert('<spring:message code="login.msg.usernameOrPasswordError"></spring:message>');
								$('#loginForm')[0].reset();
							}
						}
					});
				}
			});
		});
	</script>
</body>
</html>