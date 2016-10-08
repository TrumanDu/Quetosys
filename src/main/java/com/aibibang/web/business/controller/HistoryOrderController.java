package com.aibibang.web.business.controller;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aibibang.common.base.BaseController;
import com.aibibang.common.constant.SessionAttr;
import com.aibibang.common.persistence.Page;
import com.aibibang.common.util.ValidateUtils;
import com.aibibang.web.business.entity.HistoryOrder;
import com.aibibang.web.business.service.HistoryOrderService;
import com.aibibang.web.system.entity.SysUser;

import net.sf.json.JSONObject;

/**
 * 
 * 历史信息controller
 * 
 * <pre>
 * 	历史记录：
 * 	2016-09-19 15:57 爱毕帮软件工作室
 * 	新建文件
 * </pre>
 * 
 * @author 
 * <pre>
 * SD
 * 	爱毕帮软件工作室
 * PG
 *	爱毕帮软件工作室
 * UT
 *
 * MA
 * </pre>
 * @version $Rev$
 *
 * <p/> $Id$
 *
 */
@Controller
@RequestMapping("/historyOrder")
public class HistoryOrderController extends BaseController {

	private Logger logger = Logger.getLogger(HistoryOrderController.class);

	@Resource
	private HistoryOrderService historyOrderService;
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	初始化查询页面
	 * </pre>
	 * 
	 * @return
	 */
	@RequestMapping("/init")
	public String init(){
		
		return "business/historyOrderSearch";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	分页查询
	 * </pre>
	 * 
	 * @param historyOrder
	 * @param page
	 * @param request
	 * @return
	 */
	@RequestMapping("/list")
	public String list(HistoryOrder historyOrder,Page<HistoryOrder> page,HttpServletRequest request){
		
		try {
			HttpSession session = request.getSession();
			SysUser u = (SysUser) session.getAttribute(SessionAttr.USER_LOGIN.getValue());
			if(!"admin".equals(u.getUsername())){
				historyOrder.setCreateuser(u.getUsername());
			}
			request.setAttribute("page", historyOrderService.findByPage(historyOrder, page));
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return "business/historyOrderList";
	}

	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	新增修改页面初始化
	 * </pre>
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping("/historyOrder")
	public String historyOrder(Integer id,HttpServletRequest request){
		
		try {
			
			if(ValidateUtils.isNotEmpty(id)){
				
				HistoryOrder historyOrder = historyOrderService.getById(id);
				request.setAttribute("historyOrder", historyOrder);
			}
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
		}
		
		return "system/home/home";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	保存
	 * </pre>
	 * 
	 * @param historyOrder
	 * @return
	 */
	@RequestMapping("/save")
	@ResponseBody
	public String save(HistoryOrder historyOrder,HttpServletRequest request){
		
		JSONObject json = new JSONObject();
		HttpSession session = request.getSession();
		SysUser u = (SysUser) session.getAttribute(SessionAttr.USER_LOGIN.getValue());
		historyOrder.setCreatedate(new Date());
		historyOrder.setCreateuser(u.getUsername());
		historyOrder.setCreateUserName(u.getName());
		try {
			
			// 修改
			if(ValidateUtils.isNotEmpty(historyOrder.getId())){
				
				historyOrderService.update(historyOrder);
			}
			// 新增
			else{
				
				historyOrderService.add(historyOrder);
			}
			json.put("result", "save_success");
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
			json.put("result", "save_fail");
		}
		
		return json.toString();
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	删除
	 * </pre>
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping("/delete")
	@ResponseBody
	public String delete(Integer id){
		
		JSONObject json = new JSONObject();
		
		try {
			
			historyOrderService.delete(id);
			json.put("result", "delete_success");
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
			json.put("result", "delete_fail");
		}
		
		return json.toString();
	}
}
