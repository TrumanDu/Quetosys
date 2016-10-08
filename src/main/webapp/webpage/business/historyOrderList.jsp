<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<div class="table-scrollable">
	<table class="table table-striped table-hover table-success">
		<thead>
			<tr>
				<th>#</th>
				<th>创建人</th>
				<th>创建时间</th>
				<th>名称</th>
				<!-- <th>备注</th> -->
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${page.result}" var="historyOrder" varStatus="vs">
			<tr>
				<td>${vs.count + page.offset}</td>
				<td>${historyOrder.createuser}</td>
				<td><fmt:formatDate value="${historyOrder.createdate}" pattern="yyyy-MM-dd"/></td>
				<td>${historyOrder.ordername}</td>
				<%-- <td>${historyOrder.remark}</td> --%>
				<td>
					<a href="javascript:" onclick="update('/historyOrder/historyOrder?id=${historyOrder.id}')">编辑</a>
					<a href="javascript:" onclick="del('/historyOrder/delete?id=${historyOrder.id}')">删除</a>
				</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
<div class="pageination-panel">${page}</div>