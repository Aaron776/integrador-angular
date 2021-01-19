import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.css']
})
export class ViewActivityComponent implements OnInit {

  public ci: string | null;
  public name: string | null;
  public lastName: string | null;

  constructor(private route: ActivatedRoute) {
    this.ci = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
    console.log(this.ci + ' ' + this.name + ' ' + this.lastName)
  }

  ngOnInit(): void {
  }

}
