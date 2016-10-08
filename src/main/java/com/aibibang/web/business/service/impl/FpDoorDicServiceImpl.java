package com.aibibang.web.business.service.impl;
import com.aibibang.web.business.service.FpDoorDicService;
import com.aibibang.web.business.dao.FpDoorDicDao;
import com.aibibang.web.business.entity.FpDoorDic;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.aibibang.common.persistence.Page;

/**
 * 
 * 门套数据service实现类
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
@Service("fpDoorDicService")
public class FpDoorDicServiceImpl implements FpDoorDicService {

	@Resource
	private FpDoorDicDao fpDoorDicDao;
	
	@Override
	public Page<FpDoorDic> findByPage(FpDoorDic fpDoorDic, Page<FpDoorDic> page) {

		page.setResult(fpDoorDicDao.find(fpDoorDic, page));
		
		return page;
	}
	
	@Override
	public List<FpDoorDic> findBySearch(FpDoorDic fpDoorDic) {

		return fpDoorDicDao.find(fpDoorDic);
	}
	
	@Override
	public FpDoorDic getById(Integer id) {

		return fpDoorDicDao.getById(id);
	}

	@Override
	public void add(FpDoorDic fpDoorDic) {

		fpDoorDicDao.add(fpDoorDic);
	}
	
	@Override
	public void update(FpDoorDic fpDoorDic) {

		fpDoorDicDao.update(fpDoorDic);
	}

	@Override
	public void delete(Integer id) {

		fpDoorDicDao.delete(id);
	}

	@Override
	public List<FpDoorDic> listDic(Integer pid) {
		// TODO Auto-generated method stub
		return fpDoorDicDao.listDic(pid);
	}
 	
}