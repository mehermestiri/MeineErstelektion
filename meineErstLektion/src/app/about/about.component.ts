import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  // DI
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    // here we are just logging the parameter, but in the future we can grap a specifi
    // item from an API and show it in here
     this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']); // This is the path to the home Component defined in the app-routing/module.
  }

}
