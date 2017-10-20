package com.omcube.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.omcube.model.po.AttencePO;
import com.omcube.model.response.UserDetailInfo;
import com.omcube.service.UserInfoService;

public class ReadExcel {
    //总行数
    private int totalRows = 0;  
    //总列数
    private int totalCells = 0; 
    //错误信息接收器
    private String errorMsg;
    //构造方法
    public ReadExcel(){}
    //获取总行数
    public int getTotalRows()  { return totalRows;} 
    //获取总列数
    public int getTotalCells() {  return totalCells;} 
    //获取错误信息-暂时未用到暂时留着
    public String getErrorInfo() { return errorMsg; }
    
  /**
   * 读EXCEL文件，获取考勤信息集合
 * @param userInfoService 
   * @param fielName
   * @return
   */
  public List<AttencePO> getExcelInfo(MultipartFile Mfile, UserInfoService userInfoService) throws Exception{
      
      //把spring文件上传的MultipartFile转换成CommonsMultipartFile类型
       CommonsMultipartFile cf= (CommonsMultipartFile)Mfile; //获取本地存储路径
       File file = new  File("E:\\fileupload");
       //创建一个目录 （它的路径名由当前 File 对象指定，包括任一必须的父路径。）
       if (!file.exists()) file.mkdirs();
       //新建一个文件
       File file1 = new File("E:\\fileupload\\" + new Date().getTime() + ".xls"); 
       //将上传的文件写入新建的文件中
       try {
           cf.getFileItem().write(file1);
       } catch (Exception e) {
           e.printStackTrace();
       }
       
       //初始化考勤信息的集合    
       List<AttencePO> AttenceList=new ArrayList<AttencePO>();
       //初始化输入流
       FileInputStream is = null;
       Workbook wb = null;
       try{
          //根据新建的文件实例化输入流
          is = new FileInputStream(file1);
          //根据excel里面的内容读取考勤信息
          
          //当excel是2003时
          wb = new HSSFWorkbook(is);
          //当excel是2007时
          //wb = new XSSFWorkbook(is);
          
          //读取Excel里面考勤的信息
          AttenceList=readExcelValue(wb,userInfoService);
          is.close();
      }catch(Exception e){
          e.printStackTrace();
      } finally{
          if(is !=null)
          {
              try{
                  is.close();
              }catch(IOException e){
                  is = null;    
                  e.printStackTrace();  
              }
          }
      }
      return AttenceList;
  }
 
  /**
   * 读取Excel里面考勤的信息
   * @param wb
 * @param userInfoService 
   * @return
   */
  private List<AttencePO> readExcelValue(Workbook wb, UserInfoService userInfoService) throws Exception{ 
      //得到第一个shell  
      Sheet sheet = wb.getSheetAt(0);
       
      //得到Excel的行数
       this.totalRows=sheet.getPhysicalNumberOfRows();
       
      //得到Excel的列数(前提是有行数)
       if(totalRows>=1 && sheet.getRow(0) != null){//判断行数大于一，并且第一行必须有标题
            this.totalCells=sheet.getRow(0).getPhysicalNumberOfCells();
       }else{
           return null;
       }
       //创建日期转换器
       SimpleDateFormat sdf = null;  
       
       String uId = SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid();
       List<AttencePO> attenceList=new ArrayList<AttencePO>();//声明一个对象集合
       AttencePO attencePO;//声明一个对象
       
      //循环Excel行数,从第二行开始。标题不入库
       for(int r=1;r<totalRows;r++){
           Row row = sheet.getRow(r);
           if (row == null) continue;
           attencePO = new AttencePO();
           
           //循环Excel的列
           for(int c = 0; c <this.totalCells; c++){ 
               Cell cell = row.getCell(c);
               if (null != cell){
                   if(c==0){
                       String userNo = cell.getStringCellValue();
                       if(StringUtils.isEmpty(userNo)){              	   
                	   throw new RuntimeException("第"+r+"行用户编号为空,参数非法");  
                       }else{	   
                	   UserDetailInfo user = userInfoService.queryUserDetail(uId, userNo);              	   
                	   if(!StringUtils.isEmpty(user)){            	       
                	       attencePO.setUserNo(userNo);
                	   }else{
                	       throw new RuntimeException("第"+r+"行员工不存在"); 
                	   }
                       }          
                   }else if(c==2){      
                      Date date = cell.getDateCellValue();//得到行中第三个值
                      sdf=new SimpleDateFormat("yyyy-mm-dd");
                      sdf.format(date);
                      attencePO.setAttenceTime(date);
                      
                   }else if(c==3){
                       attencePO.setAttenceType(cell.getStringCellValue());
                   }else if(c==4){
                       attencePO.setTaskTime(BigDecimal.valueOf(cell.getNumericCellValue()));
                   }else if(c==5){
                       attencePO.setCreatedBy(cell.getStringCellValue());
                   }else if(c==6){
                       attencePO.setRemark(cell.getStringCellValue());
                   }          
           
               }
      
           }
           
           attencePO.setUid(uId);
           attencePO.setAttenceNo(UUID.randomUUID().toString().replace("_", ""));//考勤编号暂定为UUID生成方式
           attenceList.add(attencePO);//添加对象到集合中
           
       }
       
       return attenceList;
  }
   
  
}
