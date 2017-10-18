package com.omcube.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.omcube.model.po.AttencePO;
import com.omcube.service.AttenceService;
import com.omcube.service.UserInfoService;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.ReadExcel;
import com.omcube.util.WDWUtil;

@RestController
@RequestMapping(value = "/attence")
public class AttenceController {
    
    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private AttenceService attenceService;
    
    
 /*   @Value("${filePath}")  
    private String filePath; */ 
    
    /**
     * 下载Excel模板
     * @param fileName
     * @param request
     * @param response
     * @return
     */
    @GetMapping(value = "/download")
    public Object download(String fileName, HttpServletRequest request,
            HttpServletResponse response) {
        System.out.println("控制台输出：走入下载");
        System.out.println("制造冲突");
        response.setCharacterEncoding("utf-8");
        response.setContentType("multipart/form-data");
        response.setHeader("Content-Disposition", "attachment;fileName="+ fileName);
        try {
            String filePath="E:\\upload";
            InputStream inputStream = new FileInputStream(new File(filePath+ File.separator + fileName));
            OutputStream os = response.getOutputStream();
            byte[] b = new byte[2048];
            int length;
            while ((length = inputStream.read(b)) > 0) {
                os.write(b, 0, length);
            }
             // 关流。
            os.close();

            inputStream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return JSONResultUtil.setError("F00002", "the file download is fail");
    }
    
    
    /**
     * 导入Excel文件,进行数据校验,并将数据存储在数据库
     * @param fileName
     * @param request
     * @param response
     * @return
     */
    @PostMapping(value = "/batchimport")
    public Object batchimport(@RequestParam(value="filename") MultipartFile file,
            HttpServletRequest request,HttpServletResponse response) throws IOException{
	logger.info("AttenceController ..batchimport() start");
        String Msg =null;
        boolean b = false;
        
        //判断文件是否为空
        if(file==null){
            Msg ="the upload file is null";
            return JSONResultUtil.setError("F00002", Msg);
        }
        
        //获取文件名
        String name=file.getOriginalFilename();
        
        //进一步判断文件是否为空（即判断其大小是否为0或其名称是否为null）验证文件名是否合格
        long size=file.getSize();
        if(name==null || ("").equals(name) && size==0 && !WDWUtil.validateExcel(name)){
            Msg ="文件格式不正确！请使用.xls或.xlsx后缀文档。";
            return JSONResultUtil.setError("F00002",  Msg);
        }
        
        //创建处理EXCEL
        ReadExcel readExcel=new ReadExcel();
        //解析excel，获取考勤信息集合。
        List<AttencePO> attenceList =null;
        try{
            attenceList = readExcel.getExcelInfo(file,userInfoService);
	}catch (Exception e){
	    e.printStackTrace();
	}
      
        if(attenceList != null && !attenceList.toString().equals("[]") && attenceList.size()>=1){
            b = true;
        }
        
        if(b){
             //迭代添加考勤信息（注：在Mybatis的相应映射文件中使用foreach标签进行批量添加）
             attenceService.addAttenceTemplate(attenceList);	  	
             return JSONResultUtil.setSuccess();   
        }else{
             Msg ="批量导入EXCEL失败！";
             return JSONResultUtil.setError("F00002",  Msg);
        } 
   
    }
    
    

}
