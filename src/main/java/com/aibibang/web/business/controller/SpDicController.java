package com.aibibang.web.business.controller;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aibibang.common.base.BaseController;
import com.aibibang.web.business.entity.SpDic;
import com.aibibang.web.business.service.SpDicService;

import net.sf.json.JSONArray;

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
@RequestMapping("/spDic")
public class SpDicController extends BaseController {

	private Logger logger = Logger.getLogger(SpDicController.class);

	@Resource
	private SpDicService spDicService;
	
	
	
	@RequestMapping("/listDic")
	@ResponseBody
	public String listDic(Integer pid,HttpServletRequest request){
		List<SpDic> list = null;
		SpDic s=new SpDic();
		s.setPid(pid);
		try {
			list= spDicService.listDic(s);
		} catch (Exception e) {
		
			logger.error(e.getMessage(), e);
		}
		
		return JSONArray.fromObject(list).toString();
	}

	
}
