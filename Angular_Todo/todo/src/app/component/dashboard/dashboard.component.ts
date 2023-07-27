import { Component ,OnInit,NgModule} from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/sevice/crud.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  taskObj:Task=new Task();
  taskArr:Task[]=[];
  addTaskValue:string='';
  editTaskValue:string=''
  editInput:string=''
  editValue:number=-1
  constructor(private crudServiece:CrudService ){

  }
  ngOnInit(): void {
    this.taskObj=new Task();
    this.taskArr=[]
    this.getAllTask();
    this.addTaskValue='';
    this.editTaskValue=''
    this.editValue=-1
  }
  getAllTask() {
    this.crudServiece.getAllTasks().subscribe(res =>{
      this.taskArr=res;
    },err=>{
      alert('list unable toget')
    })

 
  }

  addTask(){
    this.taskObj.task_name=this.addTaskValue
    this.crudServiece.addTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      this.addTaskValue=''
    },err =>{
      alert(err);
    })
  }

  editTask(task:Task){
    task.task_name=this.editTaskValue
    this.crudServiece.editTask(task).subscribe(res=>{
      this.ngOnInit();
    }, err=>{
      alert('faild to update task')
      console.log(err);
      
    })
  }

  editRead(task:Task){
    console.log(task.read,"read");
    
    task.read=task.read
    this.crudServiece.editTask(task).subscribe(res=>{
      this.ngOnInit();
    }, err=>{
      alert('faild to update task')
      console.log(err);
      
    })
  }

  deleteTask(etask:Task){
    this.crudServiece.deleteTask(etask).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert('falied to delete task')
    }
    )
  }


  editCaller(id:number){
    this.editValue=id
  }
  editing(event:any){
    this.editTaskValue=event.target.value
  }
}
