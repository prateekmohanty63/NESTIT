import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentsResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import {v4 as uuid} from "uuid"
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
    private students=students
    getStudents():FindStudentsResponseDto[]
    {
        return this.students
    }
    getStudentById(studentId:string):FindStudentsResponseDto{
          return this.students.find(student=>{
              return student.id===studentId
          })
    }

    createStudent(payload:CreateStudentDto):StudentResponseDto{
          let newStudent={
              id:uuid(),
              ...payload
          }
          this.students.push(newStudent)

          return newStudent
    }
    updateStudent(payload:UpdateStudentDto,studentId:string){
        
        let updateStudent:StudentResponseDto;

        const updatedStudentList=this.students.map(student=>{
            if(student.id==studentId){
                updateStudent={
                    id:studentId,
                    ...payload
                } 
            }
            else return student
        })

        this.students=updatedStudentList;

        return updateStudent
    }

    // providers for fetching student details belonging to a specific teacher

    getStudentsByTeacherId(teacherId:string):FindStudentsResponseDto[]
    {
        return this.students.filter(student=>{
            return student.teacher
        })
    }

    updateStudentTeacher(teacherId:string,studentId:string):StudentResponseDto
    {
        let updateStudent:StudentResponseDto;

        const updatedStudentList=this.students.map(student=>{
            if(student.id==studentId){
                updateStudent={
                    ...student,
                    teacher:teacherId
                } 
            }
            else return student
        })

        this.students=updatedStudentList;

        return updateStudent
    }

}
