package com.aibibang.web.business.entity;
import java.io.Serializable;
import java.util.Date;
import java.math.BigDecimal;

import com.aibibang.common.base.BaseEntity;

/**
 * 
 * 门套数据实体类.
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
public class FpDoorDic extends BaseEntity implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	/**名称*/
	private String name;
	/**级别*/
	private Integer level;
	/**200价格*/
	private Integer price;
	/**200-400价格*/
	private Integer price2;
	/**400价格*/
	private Integer price3;
	/**父id*/
	private Integer pid;
	
	
	
	/**
	 *方法: 取得String
	 *@return: String  名称
	 */
	public String getName(){
		return this.name;
	}

	/**
	 *方法: 设置String
	 *@param: String  名称
	 */
	public void setName(String name){
		this.name = name;
	}
	
	/**
	 *方法: 取得Integer
	 *@return: Integer  级别
	 */
	public Integer getLevel(){
		return this.level;
	}

	/**
	 *方法: 设置Integer
	 *@param: Integer  级别
	 */
	public void setLevel(Integer level){
		this.level = level;
	}
	
	/**
	 *方法: 取得Integer
	 *@return: Integer  200价格
	 */
	public Integer getPrice(){
		return this.price;
	}

	/**
	 *方法: 设置Integer
	 *@param: Integer  200价格
	 */
	public void setPrice(Integer price){
		this.price = price;
	}
	
	/**
	 *方法: 取得Integer
	 *@return: Integer  200-400价格
	 */
	public Integer getPrice2(){
		return this.price2;
	}

	/**
	 *方法: 设置Integer
	 *@param: Integer  200-400价格
	 */
	public void setPrice2(Integer price2){
		this.price2 = price2;
	}
	
	/**
	 *方法: 取得Integer
	 *@return: Integer  400价格
	 */
	public Integer getPrice3(){
		return this.price3;
	}

	/**
	 *方法: 设置Integer
	 *@param: Integer  400价格
	 */
	public void setPrice3(Integer price3){
		this.price3 = price3;
	}
	
	/**
	 *方法: 取得Integer
	 *@return: Integer  父id
	 */
	public Integer getPid(){
		return this.pid;
	}

	/**
	 *方法: 设置Integer
	 *@param: Integer  父id
	 */
	public void setPid(Integer pid){
		this.pid = pid;
	}
	
}
