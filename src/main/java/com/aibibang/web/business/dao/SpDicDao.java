package com.aibibang.web.business.dao;
import java.util.List;

import com.aibibang.common.base.BaseDao;
import com.aibibang.web.business.entity.SpDic;

/**
 * 
 * 成品字典dao接口.
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
public interface SpDicDao extends BaseDao<SpDic, Integer> {
	/**
	 * 查询单条数据
	 * 
	 * @param id
	 * @return
	 */
	public List<SpDic> listDic(SpDic spDic);

}