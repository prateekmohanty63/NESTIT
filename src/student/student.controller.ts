import {Controller,Get, Post, Put,Param,Body} from "@nestjs/common";



@Controller('students')
export class StudentController{
    @Get()
   getStudents(){
       return "All Students"
   }
   
   @Get('/:studentId')
   getStudentById(
       @Param('studentId') studentId:string
   ){
       console.log(studentId)
      return `Get Student by Id ${studentId}`
   }
   
   @Post()
   createStudent(
       @Body() body
   ){
       console.log(body)
       return `Create Student With the Following Data ${JSON.stringify(body)}`
   }
    
  @Put('/:studentId')
   updateStudent(
       @Param('studentId') studentId:string,
       @Body() body
   ){
       return `Update student with id ${studentId} with data of ${JSON.stringify(body)}`
   }
}

