import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(){
        return "All Teachers"
    }

    @Get("/:teacherId")
    getTeacherById(
        @Param('teacherId') teacherId:string
    ){
        return `Get Teacher by id ${teacherId}`
    }


}
