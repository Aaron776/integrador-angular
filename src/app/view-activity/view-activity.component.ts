import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.css']
})
export class ViewActivityComponent implements OnInit {

  public ci: string | null;
  public name: string | null;
  public lastName: string | null;
  public activities: ActivityModel[] = [];
  public activity: ActivityModel = {};


  constructor(private rout: Router, private route: ActivatedRoute, private activityService: ActivityService) {
    this.ci = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
  }

  ngOnInit(): void {
    this.sync();
  }

  sync(): void {
    if (this.ci != null) {
      this.activityService.getAllActivitiesByEmployee(this.ci)
        .subscribe(
          data => {
            this.activities = data
          }
        )
    }

  }

  navigateToActivity(activity: ActivityModel): void {
    this.rout.navigate(['/detail/' + activity.id]);

  }

  createActivity(): void {
    if (this.ci != null) {
      this.activity.employee = { ci: this.ci };

      this.activityService.createActivity(this.activity).subscribe(
        data => {
          this.sync();
          alert(data);

        }
      )
    }
  }
}
