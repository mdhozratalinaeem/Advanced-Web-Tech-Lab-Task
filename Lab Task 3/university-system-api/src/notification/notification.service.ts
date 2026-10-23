import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';
import type { Wrapper } from '../common/wrapper.js';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: Wrapper<EnrollmentService>,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: 'Enrollment checked',
      student: studentName,
      courseId,
      enrollments,
    };
  }
}