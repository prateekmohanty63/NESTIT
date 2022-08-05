import { Module } from '@nestjs/common';
import {StudentController} from '../student/student.controller'
import { TeacherController} from '../teacher/teacher.controller'
import {StudentTeacherController} from '../teacher/student.controller'
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';


@Module({
  imports: [],
  controllers:[StudentController,TeacherController,StudentTeacherController],
  providers:[StudentService,TeacherService]
 
})
export class AppModule {}
