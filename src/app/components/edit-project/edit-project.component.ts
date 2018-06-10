import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VicaApiService } from '../../services/vica-api.service'


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  editProject = {
    _id: '',
    name: '',
    location: '',
    surface: '',
    duration: '',
    description: '',
    image: '',
    tags: []
  }
  tag: '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vicaApiService: VicaApiService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showDetails(params['id']);
    })
  }

  showDetails(id) {
    this.vicaApiService.get(id)
      .subscribe((editProject) => {
        this.editProject = editProject;
      })
  }

  addTag(tag) {
    this.editProject.tags.push(tag);
  }

  updateProject() {
    this.vicaApiService.edit(this.editProject)
    .subscribe((e) => {
      this.router.navigate(['/projects', this.editProject._id]);
      console.log('Sucessfully update', e);
    });
  }

  deleteProject() {
    if (window.confirm('Are you sure?')) {
      this.vicaApiService.remove(this.editProject._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
