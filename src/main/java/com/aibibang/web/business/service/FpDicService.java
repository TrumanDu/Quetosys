package com.aibibang.web.business.service;
import com.aibibang.web.business.entity.FpDic;
import java.util.List;

import com.aibibang.common.persistence.Page;

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
public interface FpDicService{
	
 	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	分页查询
	 * </pre>
	 * 
	 * @param fpDic
	 * @param page
	 * @return
	 */
	public Page<FpDic> findByPage(FpDic fpDic,Page<FpDic> page);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	查询
	 * </pre>
	 * 
	 * @param fpDic
	 * @return
	 */
	public List<FpDic> findBySearch(FpDic fpDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	通过ID查询
	 * </pre>
	 * 
	 * @param FpDic
	 * @return
	 */
	public FpDic getById(Integer id);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	新增
	 * </pre>
	 * 
	 * @param fpDic
	 */
	public void add(FpDic fpDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	修改
	 * </pre>
	 * 
	 * @param fpDic
	 */
	public void update(FpDic fpDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-09-20 20:58 爱毕帮软件
	 * 	删除
	 * </pre>
	 * 
	 * @param id
	 */
	public void delete(Integer id);
	public List<FpDic> listDic(Integer pid);
}
