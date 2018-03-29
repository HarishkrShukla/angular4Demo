import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
headTitle='Cricket';
  TeamNames='Team Names';
  itemCount=0;
  Name="";
  isValue=true;
  /*Pipes*/
  btntext:string='Add Items';
  jsonVal={name:'Anil',age:'25',address:{a1:'Mumbai',a2:'Kerala'}};
  goalText:string='Enter Team name';
  teamname:string;
  TeamName=[];
  
  ngOnInit()
  {
	  this.itemCount= this.TeamName.length;
  }
  
  addTeamName()
  {
	  this.TeamName.push(this.teamname)
	  this.teamname="";
	  this.itemCount=this.TeamName.length;
  }
  addItems()
  {
	  this.itemCount++;
  }
	// addTeamName(event)
	// {
		// const inputvalue=event.target.value;
		// console.log(inputvalue);
	// }
	onKey(event:any)
	{
		this.Name=event.target.value;
	}
	ClickMe(event)
	{
		alert(event.target);
		this.isValue=false;
	}
	dropdownchange(event)
	{
		console.log("dropdown change event");
		alert("Drop dopwn select: "+event.target.value);
		console.log(event.target.value);
	}
	removeitem(i)
	{
		this.TeamName.slice(i,1);
	}
}
