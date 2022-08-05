import {Injectable,NestMiddleware,HttpException} from '@nestjs/common'
import {Request,Response,NextFunction} from "express"
import {students} from '../../db'

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
     
    use(req:Request,res:Response,next:NextFunction){
        console.log('This Middleware was called')
         const studentId=req.params.studentId;
         console.log(studentId)
         
         const studentExists=students.some(student=>{
             console.log(student.id)
             student.id===studentId
         });

         if(!studentExists){
             throw new HttpException("Student not found",400)
         }
         next()

    }
}