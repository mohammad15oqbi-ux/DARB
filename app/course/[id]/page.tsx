import { getCourseById } from '@/lib/course-data';
import CourseClient from './course-client';

interface CoursePageProps {
  params: Promise<{ id: string }>;
  }

  export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params;
      const courseId = parseInt(id, 10);
        const course = getCourseById(courseId);

          if (!course) {
              return (
                    <div className="course-page-wrapper">
                            <div className="back-nav">
                                      <a href="/" className="btn-back">
                                                  <i className="fas fa-arrow-right"></i> العودة للمتجر
                                                            </a>
                                                                    </div>
                                                                            <div className="course-main-content" style={{ textAlign: 'center', padding: '80px 40px' }}>
                                                                                      <i className="fas fa-exclamation-triangle" style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '20px', display: 'block' }}></i>
                                                                                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--drb-primary)', marginBottom: '10px' }}>
                                                                                                            الدورة غير موجودة
                                                                                                                      </h2>
                                                                                                                                <p style={{ color: '#64748b', marginBottom: '25px' }}>
                                                                                                                                            ربما تم حذف الدورة أو الرابط غير صحيح
                                                                                                                                                      </p>
                                                                                                                                                                <a
                                                                                                                                                                            href="/"
                                                                                                                                                                                        style={{
                                                                                                                                                                                                      display: 'inline-block',
                                                                                                                                                                                                                    padding: '14px 35px',
                                                                                                                                                                                                                                  background: 'var(--drb-accent)',
                                                                                                                                                                                                                                                color: 'white',
                                                                                                                                                                                                                                                              borderRadius: '16px',
                                                                                                                                                                                                                                                                            fontWeight: 800,
                                                                                                                                                                                                                                                                                          textDecoration: 'none',
                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                                            تصفح الدورات
                                                                                                                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                            return <CourseClient course={course} />;
                                                                                                                                                                                                                                                                                                                                                            }