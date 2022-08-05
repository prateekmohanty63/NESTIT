import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
    @Get()
    getStudents()
    {
        return 'Get all students that belong to a teacher'
    }

    @Put('/:studentId')
    updateStudentTeacher()
    {
          return "Update Student Teacher"
    }

}
