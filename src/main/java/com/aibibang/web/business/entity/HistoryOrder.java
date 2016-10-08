package com.aibibang.web.business.entity;
import java.io.Serializable;
import java.util.Date;
import java.math.BigDecimal;

import com.aibibang.common.base.BaseEntity;

/**
 * 
 * 历史信息实体类.
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
public class HistoryOrder extends BaseEntity implements Serializable {
	
	private static final long serialVersionUID = 1L;
	

	/**创建人*/
	private String createuser;
	/**创建时间*/
	private Date createdate;
	/**名称*/
	private String ordername;
	/**备注*/
	private String remark;
	
	
	/**
	 *方法: 取得String
	 *@return: String  创建人
	 */
	public String getCreateuser(){
		return this.createuser;
	}

	/**
	 *方法: 设置String
	 *@param: String  创建人
	 */
	public void setCreateuser(String createuser){
		this.createuser = createuser;
	}
	
	/**
	 *方法: 取得Date
	 *@return: Date  创建时间
	 */
	public Date getCreatedate(){
		return this.createdate;
	}

	/**
	 *方法: 设置Date
	 *@param: Date  创建时间
	 */
	public void setCreatedate(Date createdate){
		this.createdate = createdate;
	}
	
	/**
	 *方法: 取得String
	 *@return: String  名称
	 */
	public String getOrdername(){
		return this.ordername;
	}

	/**
	 *方法: 设置String
	 *@param: String  名称
	 */
	public void setOrdername(String ordername){
		this.ordername = ordername;
	}
	
	/**
	 *方法: 取得String
	 *@return: String  备注
	 */
	public String getRemark(){
		return this.remark;
	}

	/**
	 *方法: 设置String
	 *@param: String  备注
	 */
	public void setRemark(String remark){
		this.remark = remark;
	}
	
}
