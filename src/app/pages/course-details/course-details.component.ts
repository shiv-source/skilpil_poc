import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coursesSchema } from 'src/app/schema/course.schema';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
    course :any;
    constructor(private route:ActivatedRoute ,public readonly utilsService:UtilsService) {}
    

    ngOnInit(): void {
      const courseId = this.route.snapshot.paramMap.get('id');
      if (courseId) {
        this.course = coursesSchema.find(course => course.id === +courseId);
      }
    }
}
