package com.aibibang.web.business.service.impl;
import com.aibibang.web.business.service.HistoryOrderService;
import com.aibibang.web.business.dao.HistoryOrderDao;
import com.aibibang.web.business.entity.HistoryOrder;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.aibibang.common.persistence.Page;

/**
 * 
 * 历史信息service实现类
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
@Service("historyOrderService")
public class HistoryOrderServiceImpl implements HistoryOrderService {

	@Resource
	private HistoryOrderDao historyOrderDao;
	
	@Override
	public Page<HistoryOrder> findByPage(HistoryOrder historyOrder, Page<HistoryOrder> page) {

		page.setResult(historyOrderDao.find(historyOrder, page));
		
		return page;
	}
	
	@Override
	public List<HistoryOrder> findBySearch(HistoryOrder historyOrder) {

		return historyOrderDao.find(historyOrder);
	}
	
	@Override
	public HistoryOrder getById(Integer id) {

		return historyOrderDao.getById(id);
	}

	@Override
	public void add(HistoryOrder historyOrder) {

		historyOrderDao.add(historyOrder);
	}
	
	@Override
	public void update(HistoryOrder historyOrder) {

		historyOrderDao.update(historyOrder);
	}

	@Override
	public void delete(Integer id) {

		historyOrderDao.delete(id);
	}
 	
}