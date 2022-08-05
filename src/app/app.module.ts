import { Module } from '@nestjs/common';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';


@Module({
  imports: [TeacherModule,StudentModule],
  
 
})
export class AppModule {}
