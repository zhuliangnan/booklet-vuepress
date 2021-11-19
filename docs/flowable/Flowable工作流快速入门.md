---
sidebar: auto
---
## Flowable工作流快速入门
::: tip
最近要处理一个oa工作流相关需求，这里记录一下，有完整的代码及相关资源。抛砖引玉，有不对的地方请指教。
::: 

::: tip
本项目里面有两个工作流--报销的工作流和请假的工作流，这里我只演示一个请假的工作流
::: 

::: tip
github资源包括idea插件资源
https://github.com/zhuliangnan/flowable-demo.git
::: 

::: tip
项目目录,其中lib中为两个idea插件资源,因为我用的是最新版的idea插件库里面找不到这个插件所以一并提供。一个是actibpm.jar用于生成bpmn文件,注意: jBPM文件为上面那个jar的配套文件,直接引入idea插件不要只单独引入里面的jar，本地的idea插件目录如下参考。
ps：虽然idea提供了两个插件可以画图，但是着实不好用。好吧，非常不好用。。末尾我会提供本地部署flowable-model的方法画图和相关教程,还有百度云资源。
::: 
![image.png](/upload/2021/08/image-a387514fad664ebfbadd7fc310b7dca3.png)
![image.png](/upload/2021/08/image-5e234336577a48f5b25ee2f9b5451eac.png)

### 1. jar包引入
````xml
        <!--flowable工作流依赖-->
        <dependency>
            <groupId>org.flowable</groupId>
            <artifactId>flowable-spring-boot-starter</artifactId>
            <version>6.3.0</version>
        </dependency>

        <!-- druid数据库连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
````
### 2. yml文件,数据库请大家自行创建
````yml
server:
  port: 8082

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/flowable?serverTimezone=Asia/Shanghai&useSSL=false&useUnicode=true&characterEncoding=utf-8
    username: root
    password: 123456
    driverClassName: com.mysql.jdbc.Driver
  resources:
#    static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,classpath:/static/flowable-modeler
flowable:
  #关闭定时任务JOB
  async-executor-activate: false
````

### 3. MoneyProcess.xml文件生成
>> 上面已经提供了两个插件资源，请引入使用，这里直接给出已经生成好的一个xml
ps: 如果不知道如何使用请至文章末尾，有保姆级别教程教你一步一步画出来。


````xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef">
  <process id="MoneyProcess" name="报销审批流程" isExecutable="true">
    <documentation>报销审批</documentation>
    <startEvent id="startEvent1" name="开始事件"></startEvent>
    <sequenceFlow id="sid-6BE15210-46D5-48C6-B36A-44EF290EC1F0" sourceRef="startEvent1" targetRef="CheckService"></sequenceFlow>
    <serviceTask id="CheckService" name="CheckService" flowable:class="com.example.demo.delegate.CheckService"></serviceTask>
    <userTask id="ManagerApprovedTask" name="ManagerApprovedTask"></userTask>
    <sequenceFlow id="sid-4432BDEB-3857-4F2E-8FC9-BE52234174D2" sourceRef="CheckService" targetRef="ManagerApprovedTask"></sequenceFlow>
    <exclusiveGateway id="sid-52359286-9119-4856-AD5C-7321191D6CA1"></exclusiveGateway>
    <sequenceFlow id="sid-C3C28DB3-1DF4-453A-A35A-715781EDDC87" sourceRef="ManagerApprovedTask" targetRef="sid-52359286-9119-4856-AD5C-7321191D6CA1"></sequenceFlow>
    <userTask id="BossApprovedTask" name="BossApprovedTask"></userTask>
    <sequenceFlow id="sid-9324A1CC-B589-4D51-9637-2E403BE09239" sourceRef="sid-52359286-9119-4856-AD5C-7321191D6CA1" targetRef="BossApprovedTask">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${money>500}]]></conditionExpression>
    </sequenceFlow>
    <exclusiveGateway id="sid-BB4C6890-2613-4313-BF54-994507DF6F98"></exclusiveGateway>
    <sequenceFlow id="sid-6E1E46CA-2198-4356-A9BF-70E60E02AE8B" sourceRef="BossApprovedTask" targetRef="sid-BB4C6890-2613-4313-BF54-994507DF6F98"></sequenceFlow>
    <serviceTask id="SuccessService" name="SuccessService" flowable:class="com.example.demo.delegate.SuccessService"></serviceTask>
    <sequenceFlow id="sid-0D5D8070-EE2E-4927-83AB-6EB02C510384" name="success" sourceRef="sid-52359286-9119-4856-AD5C-7321191D6CA1" targetRef="SuccessService">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${money<=500}]]></conditionExpression>
    </sequenceFlow>
    <endEvent id="sid-98398DF8-3A7C-444A-A226-18C579596EC5"></endEvent>
    <sequenceFlow id="sid-8E7FB1AB-1B8F-4436-A798-641A70FE1C41" sourceRef="SuccessService" targetRef="sid-98398DF8-3A7C-444A-A226-18C579596EC5"></sequenceFlow>
    <serviceTask id="FailService" name="FailService" flowable:class="com.example.demo.delegate.FailService"></serviceTask>
    <sequenceFlow id="sid-9CB174C8-DC4F-44B0-87AF-9E1D3BA88096" name="同意" sourceRef="sid-BB4C6890-2613-4313-BF54-994507DF6F98" targetRef="SuccessService">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${approved}]]></conditionExpression>
    </sequenceFlow>
    <endEvent id="sid-F86B5F63-07A4-40A4-9F3E-CBE30DD928C9"></endEvent>
    <sequenceFlow id="sid-B2A04ECE-0559-47F2-9F5B-3A3E05EBDC28" sourceRef="FailService" targetRef="sid-F86B5F63-07A4-40A4-9F3E-CBE30DD928C9"></sequenceFlow>
    <sequenceFlow id="sid-BFDE8D89-3774-4EFE-B5BE-9EF5E7F3CE98" name="不同意" sourceRef="sid-BB4C6890-2613-4313-BF54-994507DF6F98" targetRef="FailService">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${!approved}]]></conditionExpression>
    </sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_MoneyProcess">
    <bpmndi:BPMNPlane bpmnElement="MoneyProcess" id="BPMNPlane_MoneyProcess">
      <bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
        <omgdc:Bounds height="30.0" width="30.0" x="90.0" y="150.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="CheckService" id="BPMNShape_CheckService">
        <omgdc:Bounds height="80.0" width="100.0" x="210.0" y="125.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="ManagerApprovedTask" id="BPMNShape_ManagerApprovedTask">
        <omgdc:Bounds height="80.0" width="100.0" x="390.0" y="125.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-52359286-9119-4856-AD5C-7321191D6CA1" id="BPMNShape_sid-52359286-9119-4856-AD5C-7321191D6CA1">
        <omgdc:Bounds height="40.0" width="40.0" x="540.0" y="145.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="BossApprovedTask" id="BPMNShape_BossApprovedTask">
        <omgdc:Bounds height="80.0" width="100.0" x="510.0" y="255.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-BB4C6890-2613-4313-BF54-994507DF6F98" id="BPMNShape_sid-BB4C6890-2613-4313-BF54-994507DF6F98">
        <omgdc:Bounds height="40.0" width="40.0" x="655.0" y="275.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="SuccessService" id="BPMNShape_SuccessService">
        <omgdc:Bounds height="80.0" width="100.0" x="780.0" y="125.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-98398DF8-3A7C-444A-A226-18C579596EC5" id="BPMNShape_sid-98398DF8-3A7C-444A-A226-18C579596EC5">
        <omgdc:Bounds height="28.0" width="28.0" x="1005.0" y="151.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FailService" id="BPMNShape_FailService">
        <omgdc:Bounds height="80.0" width="100.0" x="810.0" y="270.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sid-F86B5F63-07A4-40A4-9F3E-CBE30DD928C9" id="BPMNShape_sid-F86B5F63-07A4-40A4-9F3E-CBE30DD928C9">
        <omgdc:Bounds height="28.0" width="28.0" x="1000.0" y="341.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="sid-6BE15210-46D5-48C6-B36A-44EF290EC1F0" id="BPMNEdge_sid-6BE15210-46D5-48C6-B36A-44EF290EC1F0">
        <omgdi:waypoint x="119.94999923927439" y="165.0"></omgdi:waypoint>
        <omgdi:waypoint x="210.0" y="165.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-BFDE8D89-3774-4EFE-B5BE-9EF5E7F3CE98" id="BPMNEdge_sid-BFDE8D89-3774-4EFE-B5BE-9EF5E7F3CE98">
        <omgdi:waypoint x="694.4363864942528" y="295.5"></omgdi:waypoint>
        <omgdi:waypoint x="745.0" y="295.5"></omgdi:waypoint>
        <omgdi:waypoint x="742.7999877929688" y="347.0"></omgdi:waypoint>
        <omgdi:waypoint x="809.9999999999999" y="325.76919630976903"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-8E7FB1AB-1B8F-4436-A798-641A70FE1C41" id="BPMNEdge_sid-8E7FB1AB-1B8F-4436-A798-641A70FE1C41">
        <omgdi:waypoint x="879.9499999999675" y="165.0"></omgdi:waypoint>
        <omgdi:waypoint x="1005.0" y="165.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-0D5D8070-EE2E-4927-83AB-6EB02C510384" id="BPMNEdge_sid-0D5D8070-EE2E-4927-83AB-6EB02C510384">
        <omgdi:waypoint x="579.4816889632" y="165.46468401486987"></omgdi:waypoint>
        <omgdi:waypoint x="779.9999999999931" y="165.09267161410014"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-6E1E46CA-2198-4356-A9BF-70E60E02AE8B" id="BPMNEdge_sid-6E1E46CA-2198-4356-A9BF-70E60E02AE8B">
        <omgdi:waypoint x="609.9499999999846" y="295.2162337662337"></omgdi:waypoint>
        <omgdi:waypoint x="655.4130434782609" y="295.4130434782609"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-4432BDEB-3857-4F2E-8FC9-BE52234174D2" id="BPMNEdge_sid-4432BDEB-3857-4F2E-8FC9-BE52234174D2">
        <omgdi:waypoint x="309.9499999999431" y="165.0"></omgdi:waypoint>
        <omgdi:waypoint x="390.0" y="165.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-B2A04ECE-0559-47F2-9F5B-3A3E05EBDC28" id="BPMNEdge_sid-B2A04ECE-0559-47F2-9F5B-3A3E05EBDC28">
        <omgdi:waypoint x="909.9499999999999" y="310.0"></omgdi:waypoint>
        <omgdi:waypoint x="947.5" y="310.0"></omgdi:waypoint>
        <omgdi:waypoint x="947.5" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="1000.0" y="355.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-C3C28DB3-1DF4-453A-A35A-715781EDDC87" id="BPMNEdge_sid-C3C28DB3-1DF4-453A-A35A-715781EDDC87">
        <omgdi:waypoint x="489.9499999999953" y="165.20726141078836"></omgdi:waypoint>
        <omgdi:waypoint x="540.4166666666644" y="165.41666666666666"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-9324A1CC-B589-4D51-9637-2E403BE09239" id="BPMNEdge_sid-9324A1CC-B589-4D51-9637-2E403BE09239">
        <omgdi:waypoint x="560.4263565891473" y="184.5160534469404"></omgdi:waypoint>
        <omgdi:waypoint x="560.1542471042471" y="255.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sid-9CB174C8-DC4F-44B0-87AF-9E1D3BA88096" id="BPMNEdge_sid-9CB174C8-DC4F-44B0-87AF-9E1D3BA88096">
        <omgdi:waypoint x="686.3149999999999" y="286.3421052631579"></omgdi:waypoint>
        <omgdi:waypoint x="782.6436781609195" y="204.95"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
````
### 4. FlowableConfig.java 配置文件
````java
import org.flowable.spring.SpringProcessEngineConfiguration;
import org.flowable.spring.boot.EngineConfigurationConfigurer;
import org.springframework.context.annotation.Configuration;

/**
 * @author pyj
 * 修改连线的名称格式，
 * @date 2019/10/30
 */
@Configuration
public class FlowableConfig implements EngineConfigurationConfigurer<SpringProcessEngineConfiguration> {


    @Override
    public void configure(SpringProcessEngineConfiguration engineConfiguration) {
        engineConfiguration.setActivityFontName("宋体");
        engineConfiguration.setLabelFontName("宋体");
        engineConfiguration.setAnnotationFontName("宋体");
    }

}
````
### 4. MoneyController.java 
````java
import org.apache.commons.lang3.StringUtils;
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.engine.*;
import org.flowable.engine.runtime.Execution;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.image.ProcessDiagramGenerator;
import org.flowable.task.api.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author zln
 * @date 2021/08/29
 */
@RestController
@RequestMapping("flowable-money")
public class MoneyController {

    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private TaskService taskService;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private ProcessEngine processEngine;


    /**
     * 创建流程
     *
     * @param userId
     * @param money
     * @return
     */
    @GetMapping("add")
    public String addExpense(String userId, String money) {
        Map<String, Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("money", money);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("MoneyProcess", map);
        return "提交成功,流程ID为：" + processInstance.getId();
    }

    /**
     * 获取指定用户组流程任务列表
     *
     * @param group
     * @return
     */
    @GetMapping("list")
    public Object list(String group,String userId) {
        List<Task> tasks = null;
        if (StringUtils.isNotBlank(group)){
            tasks = taskService.createTaskQuery().taskCandidateGroup(group).list();
        }else if(StringUtils.isNotBlank(userId)){
             tasks = taskService.createTaskQuery().taskAssignee(userId).orderByTaskCreateTime().desc().list();
        }
        return tasks.toString();
    }

    /**
     * 通过/拒绝任务
     *
     * @param taskId
     * @param approved 1 ：true  2：false
     * @return
     */
    @GetMapping("apply")
    public String apply(String taskId, String approved,String money) {
        Task task = taskService.createTaskQuery().taskId(taskId).singleResult();
        if (task == null) {
            return "流程不存在";
        }
        Map<String, Object> variables = new HashMap<>();
        if (StringUtils.isNotBlank(approved)){
            Boolean apply = approved.equals("1") ? true : false;
            variables.put("approved", apply);
        }
        if (StringUtils.isNotBlank(money)){
            variables.put("money", money);
        }
        taskService.complete(taskId, variables);
        return "审批是否通过：" + approved+"  "+money;

    }


    /**
     * 查询流程图
     *
     * @param httpServletResponse
     * @param processId
     * @throws Exception
     */
    @RequestMapping(value = "processDiagram")
    public void genProcessDiagram(HttpServletResponse httpServletResponse, String processId) throws Exception {
        ProcessInstance pi = runtimeService.createProcessInstanceQuery().processInstanceId(processId).singleResult();

        //流程走完的不显示图
        if (pi == null) {
            return;
        }
        Task task = taskService.createTaskQuery().processInstanceId(pi.getId()).singleResult();
        //使用流程实例ID，查询正在执行的执行对象表，返回流程实例对象
        String InstanceId = task.getProcessInstanceId();
        List<Execution> executions = runtimeService
                .createExecutionQuery()
                .processInstanceId(InstanceId)
                .list();

        //得到正在执行的Activity的Id
        List<String> activityIds = new ArrayList<>();
        List<String> flows = new ArrayList<>();
        for (Execution exe : executions) {
            List<String> ids = runtimeService.getActiveActivityIds(exe.getId());
            activityIds.addAll(ids);
        }

        //获取流程图
        BpmnModel bpmnModel = repositoryService.getBpmnModel(pi.getProcessDefinitionId());
        ProcessEngineConfiguration engconf = processEngine.getProcessEngineConfiguration();
        ProcessDiagramGenerator diagramGenerator = engconf.getProcessDiagramGenerator();
        InputStream in = diagramGenerator.generateDiagram(bpmnModel, "png", activityIds, flows, engconf.getActivityFontName(), engconf.getLabelFontName(), engconf.getAnnotationFontName(), engconf.getClassLoader(), 1.0);
        OutputStream out = null;
        byte[] buf = new byte[1024];
        int legth = 0;
        try {
            out = httpServletResponse.getOutputStream();
            while ((legth = in.read(buf)) != -1) {
                out.write(buf, 0, legth);
            }
        } finally {
            if (in != null) {
                in.close();
            }
            if (out != null) {
                out.close();
            }
        }
    }

}
````

### 5. 几个Service节点对应文件
CheckService.java
````java
import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.JavaDelegate;

/**
 * @author zln
 * @date 2021/08/29
 */
public class CheckService implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) {
        System.out.println("对于请求参数进行check: \n 申请人:"+delegateExecution.getVariable("userId")
                +"申请金额:"+delegateExecution.getVariable("money"));
    }
}
````
FailService.java
````java
import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.JavaDelegate;
/**
 * @author zln
 * @date 2021/08/29
 */
public class FailService implements JavaDelegate {


    @Override
    public void execute(DelegateExecution delegateExecution) {
        System.out.println("请求被拒绝check: \n 申请人:"+delegateExecution.getVariable("username")
                +"申请金额:"+delegateExecution.getVariable("money"));
    }
}
````
SuccessService.java
````java
import org.flowable.engine.delegate.DelegateExecution;
import org.flowable.engine.delegate.JavaDelegate;
/**
 * @author zln
 * @date 2021/08/29
 */
public class SuccessService implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) {
        System.out.println("请求被通过check: \n 申请人:"+delegateExecution.getVariable("username")
                +"申请金额:"+delegateExecution.getVariable("money"));
    }
}
````

以上就是这个流程需要的所有文件，大家也可以通过git下载。

### 4. 启动项目
::: tip
flowable会为我们自动创建34个表，用于数据，历史记录，流程定义，运行实例等等。
请注意如果启动失败，解决错误以后，每次都需要把表数据清空，或者删除在再重新启动。
::: 
![image.png](/upload/2021/08/image-9c5c10b3ec684ab6b0f07e055395e16b.png)

### 5. 测试

step.1 访问 http://127.0.0.1:8082/flowable-money/add?userId=%E6%B5%8B%E8%AF%951&money=400
![image.png](/upload/2021/08/image-36cc90d4cf584156bf12f47955598f45.png)
![image.png](/upload/2021/08/image-265c7b5fb46b48518c92e423e7052f76.png)

step.2 根据返回的processid查看流程 http://127.0.0.1:8082/flowable-money/processDiagram?processId=10009
![image.png](/upload/2021/08/image-518ace6a71b94e08a1d585eb1ee2bb1f.png)
>>这里我们看到现在Manager节点进行审核

step.3 这里我们给他通过审核 http://127.0.0.1:8082/flowable-money/apply?approved=1&taskId=10016

ps：taskid在act_ru_task表中这里面存储了，流程id和taskid的对应关系
![image.png](/upload/2021/08/image-666209455a824a23a44b4d9dfd2de3c9.png)

![image.png](/upload/2021/08/image-b1ec033de28649d8b7867d22e5a71587.png)

![image.png](/upload/2021/08/image-8a16d78d6c53499892bd8966590abba7.png)
![image.png](/upload/2021/08/image-f7bd941e2d514550a6882f4c598a53d8.png)

审核通过流程结束。act_ru_task的那个流程记录被删除。


>> 工作流相关API服务介绍


*RepositoryService*
>>流程建立相关。比如流程定义，流程的部署，流程文件的查询，验证BpmnModel等，流程转换成bpmnModel，BpmnModel转化成流程文件(.bpm)等。关键方法如下：
````java
//伪代码。关键代码
// 验证bpmnModel
 List<ValidationError> validationErrors = repositoryService.validateProcess(bpmnModel);

//流程的查询
repositoryService.createProcessDefinitionQuery().processDefinitionName(route.getId().toString()).singleResult();

// 通过bpmnmodel定义流程并部署流程
Deployment deployment = repositoryService.createDeployment().addBpmnModel(bpmnModel.getProcesses().get(0).getName()+".bpmn", bpmnModel).deploy();

//将流程转成bpmnModel
repositoryService.getBpmnModel(processDefinition.getId());

//根据processDef上的deploymentId获取流程定义生成的bpmn文件或者其他资源文件。
InputStream inputStream = repositoryService.getResourceAsStream(deploymentId, resourceName);

// 删除流程定义
repositoryService.deleteDeployment(processDefinition.getDeploymentId(), cascade);
````

*RumtimeService*
>>流程实例管理。管理流程实例的启动，推进，删除，获取流程实例当前状态等
````java
// 启动实例。businessId为业务号，一般唯一。比如lotId。商品编码。业务层方便查找
runtimeService.startProcessInstanceById(processDefinition.getId(), businessId);

// trigger形式的过站 只适用于ReceiveTask S1表示当前流程所在的taskId
ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey(businessId).singleResult();

Execution execution = runtimeService.createExecutionQuery().processInstanceId(processInstance.getId()).activityId("S1").singleResult();

runtimeService.trigger(execution.getId());
````



*HistoryService*
>>流程历史查询，所有有关历史的查询都从这个Service中来。
````java
// 整个业务的持续时间
List<HistoricProcessInstance> list = historyService.createHistoricProcessInstanceQuery().processInstanceBusinessKey(lotId).list();
String instanceId = "";
for (HistoricProcessInstance hpi : list) {
    instanceId = hpi.getId();
    System.out.println("流程定义文件->" + hpi.getProcessDefinitionId());
    System.out.println("ProcessInstance->" + hpi.getId());
    System.out.println("StartActivityId->" + hpi.getStartActivityId());
    System.out.println("EndActivityId->" + hpi.getEndActivityId());
    System.out.println("startTime ->" + hpi.getStartTime() + "EndTime->" + hpi.getEndTime() + "duration" + hpi.getDurationInMillis());
}

//业务流转过程中每站的记录
List<HistoricActivityInstance> list1 = historyService.createHistoricActivityInstanceQuery().processInstanceId(instanceId).list().stream().sorted(Comparator.comparing(HistoricActivityInstance :: getStartTime)).collect(Collectors.toList());
for (HistoricActivityInstance historicActivityInstance : list1) {
    System.out.println("------");
    System.out.println(historicActivityInstance.getActivityId());
    System.out.println(historicActivityInstance.getActivityName());
    System.out.println(historicActivityInstance.getActivityType());
    System.out.println("startTime ->" +historicActivityInstance.getStartTime() + "EndTime->" + historicActivityInstance.getEndTime() + "duration" + historicActivityInstance.getDurationInMillis());
}

````


*TaskService*
>>用于指定节点任务的主要Service.比如ReceiveTask, UserTask, MailTask,HttpTask等等。不同的Task具备了不同的处理方式。
````java
Execution execution = runtimeService.createExecutionQuery().processInstanceId(processInstance.getId()).activityId("S1").singleResult();
runtimeService.trigger(execution.getId());

execution = runtimeService.createExecutionQuery().processInstanceId(processInstance.getId()).activityId("S2").singleResult();
runtimeService.trigger(execution.getId());

execution = runtimeService.createExecutionQuery().processInstanceId(processInstance.getId()).activityId("S3").singleResult();
runtimeService.trigger(execution.getId());
````

### PS. 本地部署

名称：flowable-6.4.0.zip
链接：https://pan.baidu.com/s/1ctXANv-3-F30xX1Zpp_FyA 
提取码：7a5u

#### step1.解压并启动
>> 把wars里面文件部署到tomcat的wepapp目录项目，启动startup.bat就好了，war包会自动解压如下图。如果没有自动解压，请检查是否放到了C盘导致没有权限，另外tomcat的log里面也会有日志。实在不行手动解压就好了。
![image.png](/upload/2021/08/image-8e178555f2324023a52cb4e4e1f2b441.png)
![image.png](/upload/2021/08/image-9a547c57480d47b5945a3e8eeff958aa.png)
![image.png](/upload/2021/08/image-7045764566ae422db1040a5ca6331ea0.png)
>>启动过程比较慢，启动完访问 http://localhost:8080/flowable-modeler
![image.png](/upload/2021/08/image-e4dd1d3ee1a44d13b6cc68752b0016b6.png)

#### step3.画流程

>>首先创建一个流程

![image.png](/upload/2021/08/image-2f0d53d288494534a7f355971d8d6da0.png)
![image.png](/upload/2021/08/image-51d4b8c913004798a4136701a36a4a56.png)
![image.png](/upload/2021/08/image-ef30e6c168dd4331b73f2c12d5a5feff.png)

>>流程的简单介绍

![image.png](/upload/2021/08/image-41f1b8d4a9134d9eba63de2664ca620e.png)


>>相关重要节点如何配置截图
一般只需要配置name和id，name用于显示在图上的名字，id用于唯一标识，id不去设置它自己生成

Task节点设置
![image.png](/upload/2021/08/image-9c798479f79f4c81b3082fbbd32bf4af.png)

排它节点设置
排它节点需要设置条件，由上一步传过来的参数决定走向，这里我们需要一个approved变量，这里我图方便所有人审批都是用的一个方法如下图，大家关注在task节点通过或者不通过审核的同时传入了哪些变量给下一个节点(排它节点)使用。
![image.png](/upload/2021/08/image-9a94419a3be74cd8baca30f010562fc4.png)
![image.png](/upload/2021/08/image-5ae01f72fe084b1aabeb9c192c3003d3.png)

Service节点
>>ps：Service节点的创建由Task节点创建而来如下图
![image.png](/upload/2021/08/image-9cff40fc7a474159b8418dac4ae4d711.png)
![image.png](/upload/2021/08/image-ffa3f1b3ea634ff0b4c713b9a2c786d1.png)

Service节点就是对应我们代码里面的处理类，Class里面配置处理类的位置就好了，到达Service节点的适合就会去执行。
![image.png](/upload/2021/08/image-34723bb291f8420683367ab13ded6b37.png)

![image.png](/upload/2021/08/image-1b49f9a818d04507bc48969b1cd6152c.png)

ok，以上就是画流程图的简单操作和对应代码的相关东西。完成图如下
![image.png](/upload/2021/08/image-8e80308a8f6342988ad64d33d613db11.png)


