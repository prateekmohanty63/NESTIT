import {Controller,Get, Post, Put,Param,Body} from "@nestjs/common";
import {CreateStudentDto,UpdateStudentDto, FindStudentsResponseDto} from './dto/student.dto'


@Controller('students')
export class StudentController{
    @Get()
   getStudents(): FindStudentsResponseDto[]{
       return "All Students"
   }
   
   @Get('/:studentId')
   getStudentById(
       @Param('studentId') studentId:string
   ): FindStudentsResponseDto{
       console.log(studentId)
      return `Get Student by Id ${studentId}`
   }
   
   @Post()
   createStudent(
       @Body() body:CreateStudentDto
   ): FindStudentsResponseDto{
       console.log(body)
       return `Create Student With the Following Data ${JSON.stringify(body)}`
   }
    
  @Put('/:studentId')
   updateStudent(
       @Param('studentId') studentId:string,
       @Body() body:UpdateStudentDto
   ){
       return `Update student with id ${studentId} with data of ${JSON.stringify(body)}`
   }
}

