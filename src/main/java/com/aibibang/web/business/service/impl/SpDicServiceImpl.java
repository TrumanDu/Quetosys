package com.aibibang.web.business.service.impl;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.aibibang.web.business.dao.SpDicDao;
import com.aibibang.web.business.entity.SpDic;
import com.aibibang.web.business.service.SpDicService;

/**
 * 
 * 成品字典service实现类
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
@Service("spDicService")
public class SpDicServiceImpl implements SpDicService {

	@Resource
	private SpDicDao spDicDao;
	

	public List<SpDic> listDic(SpDic spDic) {

		return spDicDao.listDic(spDic);
	}
	
 	
}