package com.aibibang.web.business.service;
import com.aibibang.web.business.entity.FpDoorDic;
import java.util.List;

import com.aibibang.common.persistence.Page;

/**
 * 
 * 门套数据service接口
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
public interface FpDoorDicService{
	
 	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	分页查询
	 * </pre>
	 * 
	 * @param fpDoorDic
	 * @param page
	 * @return
	 */
	public Page<FpDoorDic> findByPage(FpDoorDic fpDoorDic,Page<FpDoorDic> page);
	
	public List<FpDoorDic> listDic(Integer pid);
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	查询
	 * </pre>
	 * 
	 * @param fpDoorDic
	 * @return
	 */
	public List<FpDoorDic> findBySearch(FpDoorDic fpDoorDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	通过ID查询
	 * </pre>
	 * 
	 * @param FpDoorDic
	 * @return
	 */
	public FpDoorDic getById(Integer id);
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	新增
	 * </pre>
	 * 
	 * @param fpDoorDic
	 */
	public void add(FpDoorDic fpDoorDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	修改
	 * </pre>
	 * 
	 * @param fpDoorDic
	 */
	public void update(FpDoorDic fpDoorDic);
	
	/**
	 * 
	 * <pre>
	 * 	2016-10-06 18:58 爱毕帮软件
	 * 	删除
	 * </pre>
	 * 
	 * @param id
	 */
	public void delete(Integer id);
}
