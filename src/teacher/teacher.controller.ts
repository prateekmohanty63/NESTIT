import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(){
        return "All Teachers"
    }

    @Get("/:teacherId")
    getTeacherById(){
        return "Get Teacher by id"
    }


}
