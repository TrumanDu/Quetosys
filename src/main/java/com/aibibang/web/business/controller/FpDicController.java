package com.aibibang.web.business.controller;
import com.aibibang.web.business.entity.FpDic;
import com.aibibang.web.business.service.FpDicService;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aibibang.common.base.BaseController;
import com.aibibang.common.persistence.Page;
import com.aibibang.common.util.ValidateUtils;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * 
 * 成品字典controller
 * 
 * <pre>
 * 	历史记录：
 * 	2016-09-20 20:58 爱毕帮软件
 * 	新建文件
 * </pre>
 * 
 * @author 
 * <pre>
 * SD
 * 	爱毕帮软件
 * PG
 *	爱毕帮软件
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
@RequestMapping("/fpDic")
public class FpDicController extends BaseController {

	private Logger logger = Logger.getLogger(FpDicController.class);

	@Resource
	private FpDicService fpDicService;
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	初始化查询页面
	 * </pre>
	 * 
	 * @return
	 */
	@RequestMapping("/init")
	public String init(){
		
		return "business/fpDicSearch";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	分页查询
	 * </pre>
	 * 
	 * @param fpDic
	 * @param page
	 * @param request
	 * @return
	 */
	@RequestMapping("/list")
	public String list(FpDic fpDic,Page<FpDic> page,HttpServletRequest request){
		
		try {
			
			request.setAttribute("page", fpDicService.findByPage(fpDic, page));
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return "business/fpDicList";
	}
	
	@RequestMapping("/listDic")
	@ResponseBody
	public String listDic(Integer pid,HttpServletRequest request){
		List<FpDic> list = null;
		try {
			list= fpDicService.listDic(pid);
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return JSONArray.fromObject(list).toString();
	}

	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	新增修改页面初始化
	 * </pre>
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping("/fpDic")
	public String fpDic(Integer id,HttpServletRequest request){
		
		try {
			
			if(ValidateUtils.isNotEmpty(id)){
				
				FpDic fpDic = fpDicService.getById(id);
				request.setAttribute("fpDic", fpDic);
			}
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
		}
		
		return "business/fpDic";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	保存
	 * </pre>
	 * 
	 * @param fpDic
	 * @return
	 */
	@RequestMapping("/save")
	@ResponseBody
	public String save(FpDic fpDic){
		
		JSONObject json = new JSONObject();
		
		try {
			
			// 修改
			if(ValidateUtils.isNotEmpty(fpDic.getId())){
				
				fpDicService.update(fpDic);
			}
			// 新增
			else{
				
				fpDicService.add(fpDic);
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
	 * 	2016-09-20 20:58 爱毕帮软件
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
			
			fpDicService.delete(id);
			json.put("result", "delete_success");
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
			json.put("result", "delete_fail");
		}
		
		return json.toString();
	}
}
