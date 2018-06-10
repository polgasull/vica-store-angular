import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VicaApiService } from '../../services/vica-api.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [VicaApiService]
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vicaApiService: VicaApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProjectDetails(params['id']);
    })
  }

  getProjectDetails(id) {
    this.vicaApiService.get(id)
      .subscribe((project) => {
        this.project = project;
      })
  }

  deleteProject() {
    if (window.confirm('Are you sure?')) {
      this.vicaApiService.remove(this.project._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

}
