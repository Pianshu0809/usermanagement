import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummydata',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dummydata.html',
  styleUrl: './dummydata.css'
})
export class Dummydata implements OnInit{
courses:{name: string,mode:string,address:string,date:string,registered:number,vacancy:number}[] = [];
date = new Date();

ngOnInit(): void {
  const formattedDate= this.dateFunction();

  this.courses = [
    {name: "Angular", mode:"On Campus",address:"Block A, Street",date: formattedDate, registered: 134 , vacancy: 56},
    {name: "Java",mode:"virtual",address:"Zoom meeting",date: formattedDate, registered:342  , vacancy: 54},
    {name: "HTML",mode:"Of Campus",address:"Audotorium",date: formattedDate, registered: 32 , vacancy:46 },
    {name:"TailwindCss",mode:"On Campus",address:"Block B, Street",date: formattedDate, registered: 323 , vacancy: 54 },
    {name:"C",mode:"virtual",address:"Block B, Street",date: formattedDate, registered: 323 , vacancy: 54 },
    {name:"C++",mode:"On Campus",address:"Block B, Street",date: formattedDate, registered: 323 , vacancy: 54 },
    {name:"React",mode:"Of Campus",address:"Block B, Street",date: formattedDate, registered: 323 , vacancy: 54 },
    
  ]

}

dateFunction() {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  const dateObj: Date = this.date

  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const monthName = monthNames[monthIndex];
  const year = dateObj.getFullYear();

  let hours = dateObj.getHours(); 
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes.toString().padStart(2, '0');

  return  `${monthName} ${day}, ${year}. ${hours}:${formattedMinutes} ${ampm}`;

}






}
