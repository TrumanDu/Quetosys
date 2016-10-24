package com.aibibang.web.business.service;
import com.aibibang.web.business.entity.HistoryOrder;
import java.util.List;

import com.aibibang.common.persistence.Page;

/**
 * 
 * 历史信息service接口
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
public interface HistoryOrderService{
	
 	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	分页查询
	 * </pre>
	 * 
	 * @param historyOrder
	 * @param page
	 * @return
	 */
	public Page<HistoryOrder> findByPage(HistoryOrder historyOrder,Page<HistoryOrder> page);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	查询
	 * </pre>
	 * 
	 * @param historyOrder
	 * @return
	 */
	public List<HistoryOrder> findBySearch(HistoryOrder historyOrder);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	通过ID查询
	 * </pre>
	 * 
	 * @param HistoryOrder
	 * @return
	 */
	public HistoryOrder getById(Integer id);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	新增
	 * </pre>
	 * 
	 * @param historyOrder
	 */
	public void add(HistoryOrder historyOrder);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	修改
	 * </pre>
	 * 
	 * @param historyOrder
	 */
	public void update(HistoryOrder historyOrder);
	public Integer validate(String ordername);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-19 15:57 爱毕帮软件工作室
	 * 	删除
	 * </pre>
	 * 
	 * @param id
	 */
	public void delete(Integer id);
}
