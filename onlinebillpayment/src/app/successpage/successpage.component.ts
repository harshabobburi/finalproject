import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  tologin() {
    this.router.navigate(['display'])
  }
}
