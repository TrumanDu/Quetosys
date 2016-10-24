package com.aibibang.web.business.dao;
import com.aibibang.web.business.entity.HistoryOrder;
import com.aibibang.common.base.BaseDao;

/**
 * 
 * 历史信息dao接口.
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
public interface HistoryOrderDao extends BaseDao<HistoryOrder, Integer> {

	public Integer validate(String ordername);
}