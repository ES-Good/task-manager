"use strict";(self["webpackChunktask_manadger"]=self["webpackChunktask_manadger"]||[]).push([[214],{214:function(s,a,t){t.r(a),t.d(a,{default:function(){return I}});var e=t(252);const n={class:"task-nav"};function i(s,a,t,i,d,k){const u=(0,e.up)("AddTask"),o=(0,e.up)("CardSubTask");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(u,{onAddTask:k.updateTask,path:`/tasks/${s.mainTaskInfo.id}/subtasks`},null,8,["onAddTask","path"]),(0,e._)("div",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.allSubtask,(s=>((0,e.wg)(),(0,e.j4)(o,{key:s.id,subTask:s},null,8,["subTask"])))),128))])])}var d=t(907),k=t(330),u=t(577),o=t(963);const r={class:"card-task"},c={key:0,class:"card-task__content-box"},l={class:"card-task__header"},T={class:"task-link"},h={key:1,class:"card-task__input-box"};function m(s,a,t,n,i,d){const k=(0,e.up)("WriteAndDelete");return(0,e.wg)(),(0,e.iD)("div",r,[i.edit?((0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("button",{onClick:a[1]||(a[1]=(...s)=>d.saveEdit&&d.saveEdit(...s))},"Сохранить"),(0,e._)("button",{onClick:a[2]||(a[2]=(...s)=>d.cancel&&d.cancel(...s))},"Отменить"),(0,e.wy)((0,e._)("textarea",{"onUpdate:modelValue":a[3]||(a[3]=s=>i.inputUser=s),name:"",id:"",cols:"30",rows:"10"},null,512),[[o.nr,i.inputUser]])])):((0,e.wg)(),(0,e.iD)("div",c,[(0,e._)("div",l,[(0,e.Wm)(k,{onEditTask:d.editText,onDeleteEvent:a[0]||(a[0]=a=>s.fetchSubTasks(s.mainTaskInfo.id)),deleteTask:t.subTask.id,pathTask:`/tasks/${s.mainTaskInfo.id}/subtasks/${t.subTask.id}`},null,8,["onEditTask","deleteTask","pathTask"])]),(0,e._)("div",T,(0,u.zw)(t.subTask.name),1)]))])}var b=t(667),p=t(9),f={name:"CardSubTask",props:{subTask:Object},components:{WriteAndDelete:b.Z},data(){return{inputUser:"",edit:!1}},computed:{...(0,d.Se)(["mainTaskInfo"])},methods:{...(0,d.nv)(["fetchSubTasks"]),editText(){this.edit=!0,this.inputUser=this.subTask.name},cancel(){this.edit=!1},test(){console.log("+++")},async saveEdit(){this.inputUser&&(await(0,p.x)(this.inputUser,`/tasks/${this.mainTaskInfo.id}/subtasks/${this.subTask.id}/name`),await this.fetchSubTasks(this.$route.params.id),this.edit=!1)}}},v=t(744);const S=(0,v.Z)(f,[["render",m]]);var w=S,_={name:"TasksView",components:{AddTask:k.Z,CardSubTask:w},computed:{...(0,d.Se)(["allSubtask","titleSubtasks","mainTaskInfo"])},methods:{...(0,d.nv)(["fetchSubTasks","addSubTaskBD"]),...(0,d.OI)(["renameMainTitle"]),updateTask(s){s.mainTaskId=this.mainTaskInfo.id,this.addSubTaskBD(s)}},mounted(){this.fetchSubTasks(this.$route.params.id)},updated(){this.renameMainTitle(this.mainTaskInfo.name)}};const D=(0,v.Z)(_,[["render",i]]);var I=D}}]);
//# sourceMappingURL=214.3fdea44d.js.map