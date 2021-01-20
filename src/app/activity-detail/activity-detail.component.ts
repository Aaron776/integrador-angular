import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  public id: string | null;
  public activity: ActivityModel = {};
  constructor(private route: ActivatedRoute, private activityService: ActivityService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.sync()
  }

  sync() {
    if (this.id != null) {
      this.activityService.getActivityById(this.id)
        .subscribe(
          data => {
            this.activity = data
            console.log(data)
          }
        )
    }
  }

}
