package com.aibibang.web.business.service;
import java.util.List;

import com.aibibang.web.business.entity.SpDic;

/**
 * 
 * 成品字典service接口
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
public interface SpDicService{
	

	public List<SpDic> listDic(SpDic spDic);
}
