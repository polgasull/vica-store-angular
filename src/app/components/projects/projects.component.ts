import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { VicaApiService } from '../../services/vica-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [VicaApiService]
})
export class ProjectsComponent implements OnInit {
  projects;


  constructor(
    private router: Router,
    private vicaApiService: VicaApiService) { }

  ngOnInit() {
    this.vicaApiService.getList()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

}
