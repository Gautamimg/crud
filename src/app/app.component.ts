import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud';
  list:any[]=[];
  task:any;
  data:any;
  

  addTask(item:any)
  { 
    if(this.data != '' && this.data != null){
      this.list.push({id:this.list.length,name:item})
      console.warn(this.list);
      console.log(item);
      this.data='';
    }
    
  }

  removeTask(id:number)
  {
   if(confirm('You want to delete') ){
    this.list=this.list.filter(item=>item.id!==id);
   }
  }

  editTask(item:any){
    let res=prompt('', item.name);
    if(res!==null && res!==''){
      item.name=res;
     }
  }
}