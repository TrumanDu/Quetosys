package com.aibibang.web.business.service.impl;
import com.aibibang.web.business.service.FpDicService;
import com.aibibang.web.business.dao.FpDicDao;
import com.aibibang.web.business.entity.FpDic;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.aibibang.common.persistence.Page;

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
@Service("fpDicService")
public class FpDicServiceImpl implements FpDicService {

	@Resource
	private FpDicDao fpDicDao;
	
	@Override
	public Page<FpDic> findByPage(FpDic fpDic, Page<FpDic> page) {

		page.setResult(fpDicDao.find(fpDic, page));
		
		return page;
	}
	public List<FpDic> listDic(Integer pid) {

		return fpDicDao.listDic(pid);
	}
	
	@Override
	public List<FpDic> findBySearch(FpDic fpDic) {

		return fpDicDao.find(fpDic);
	}
	
	@Override
	public FpDic getById(Integer id) {

		return fpDicDao.getById(id);
	}

	@Override
	public void add(FpDic fpDic) {

		fpDicDao.add(fpDic);
	}
	
	@Override
	public void update(FpDic fpDic) {

		fpDicDao.update(fpDic);
	}

	@Override
	public void delete(Integer id) {

		fpDicDao.delete(id);
	}
 	
}