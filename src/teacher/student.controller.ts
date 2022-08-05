import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class StudentTeacherController {
   
    @Get('/:teacherId/students')
    getStudents()
    {
        
    }

    @Put('/:teacherId/students/:studentId')
    updateStudentTeacher()
    {

    }

}
