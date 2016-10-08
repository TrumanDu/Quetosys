<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<div class="table-scrollable">
	<table class="table table-striped table-hover table-success">
		<thead>
			<tr>
				<th>#</th>
								<th>名称</th>
				<th>级别</th>
				<th>价格</th>
				<th>父id</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${page.result}" var="fpDic" varStatus="vs">
			<tr>
				<td>${vs.count + page.offset}</td>
				<td>${fpDic.name}</td>
				<td>${fpDic.level}</td>
				<td>${fpDic.price}</td>
				<td>${fpDic.pid}</td>
				<td>
					<a href="javascript:" onclick="update('/fpDic/fpDic?id=${fpDic.id}')">编辑</a>
					<a href="javascript:" onclick="del('/fpDic/delete?id=${fpDic.id}')">删除</a>
				</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
<div class="pageination-panel">${page}</div>