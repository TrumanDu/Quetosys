package com.aibibang.web.business.dao;
import com.aibibang.web.business.entity.FpDic;
import com.aibibang.web.business.entity.FpDoorDic;

import java.util.List;

import com.aibibang.common.base.BaseDao;

/**
 * 
 * 门套数据dao接口.
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
public interface FpDoorDicDao extends BaseDao<FpDoorDic, Integer> {
	public List<FpDoorDic> listDic(Integer pid);

}