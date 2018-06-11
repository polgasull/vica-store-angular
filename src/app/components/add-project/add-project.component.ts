import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VicaApiService } from '../../services/vica-api.service'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  newProject = {
    name: '',
    location: '',
    surface: '',
    duration: '',
    description: '',
    image: '',
    tags: []
  }

  constructor(
    private router: Router,
    private vicaApiService: VicaApiService ) { }

  ngOnInit() {
  }

  addTag(tag) {
    this.newProject.tags.push(tag);
  }

  createNew() {
    this.vicaApiService.new(this.newProject)
    .subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }

}
