import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import {FindStudentsResponseDto,StudentResponseDto} from '../student/dto/student.dto'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
   
    @Get()
    getStudents(
        @Param('teacherId') teacherId:string
    ):FindStudentsResponseDto[]
    {
        return `Get all students that belong to a teacher with id ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId:string,
        @Param('studentId') studentId:string
    ):StudentResponseDto
    {
          return `Update Student having id ${studentId} Teacher having id ${teacherId}`
    }

}
