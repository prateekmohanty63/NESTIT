import {Controller,Get, Post, Put} from "@nestjs/common";



@Controller('students')
export class StudentController{
    @Get()
   getStudents(){
       return "All Students"
   }
   
   @Get('/:studentId')
   getStudentById(){
      return 'Get Student by Id'
   }
   
   @Post()
   createStudent(){
       return "Student created"
   }
    
  @Put('/:studentId')
   updateStudent(){
       return "Update student by id"
   }
}

