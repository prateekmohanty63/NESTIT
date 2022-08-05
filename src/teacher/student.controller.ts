import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
    @Get()
    getStudents(
        @Param('teacherId') teacherId:string
    )
    {
        return `Get all students that belong to a teacher with id ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId:string,
        @Param('studentId') studentId:string
    )
    {
          return `Update Student having id ${studentId} Teacher having id ${teacherId}`
    }

}
