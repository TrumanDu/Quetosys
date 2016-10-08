package com.aibibang.web.business.controller;
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
import com.aibibang.web.business.entity.FpDoorDic;
import com.aibibang.web.business.service.FpDoorDicService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * 
 * 门套数据controller
 * 
 * <pre>
 * 	历史记录：
 * 	2016-10-06 18:58 爱毕帮软件
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
@RequestMapping("/fpDoorDic")
public class FpDoorDicController extends BaseController {

	private Logger logger = Logger.getLogger(FpDoorDicController.class);

	@Resource
	private FpDoorDicService fpDoorDicService;
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	初始化查询页面
	 * </pre>
	 * 
	 * @return
	 */
	@RequestMapping("/init")
	public String init(){
		
		return "business/fpDoorDicSearch";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	分页查询
	 * </pre>
	 * 
	 * @param fpDoorDic
	 * @param page
	 * @param request
	 * @return
	 */
	@RequestMapping("/list")
	public String list(FpDoorDic fpDoorDic,Page<FpDoorDic> page,HttpServletRequest request){
		
		try {
			
			request.setAttribute("page", fpDoorDicService.findByPage(fpDoorDic, page));
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return "business/fpDoorDicList";
	}
    
	@RequestMapping("/listDic")
	@ResponseBody
	public String listDic(Integer pid,HttpServletRequest request){
		List<FpDoorDic> list = null;
		try {
			list= fpDoorDicService.listDic(pid);
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return JSONArray.fromObject(list).toString();
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	新增修改页面初始化
	 * </pre>
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping("/fpDoorDic")
	public String fpDoorDic(Integer id,HttpServletRequest request){
		
		try {
			
			if(ValidateUtils.isNotEmpty(id)){
				
				FpDoorDic fpDoorDic = fpDoorDicService.getById(id);
				request.setAttribute("fpDoorDic", fpDoorDic);
			}
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
		}
		
		return "business/fpDoorDic";
	}
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	保存
	 * </pre>
	 * 
	 * @param fpDoorDic
	 * @return
	 */
	@RequestMapping("/save")
	@ResponseBody
	public String save(FpDoorDic fpDoorDic){
		
		JSONObject json = new JSONObject();
		
		try {
			
			// 修改
			if(ValidateUtils.isNotEmpty(fpDoorDic.getId())){
				
				fpDoorDicService.update(fpDoorDic);
			}
			// 新增
			else{
				
				fpDoorDicService.add(fpDoorDic);
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
	 * 	2016-10-06 18:58 爱毕帮软件
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
			
			fpDoorDicService.delete(id);
			json.put("result", "delete_success");
		} catch (Exception e) {
			
			logger.error(e.getMessage(), e);
			json.put("result", "delete_fail");
		}
		
		return json.toString();
	}
}
