import ManageCourseClient from './manage-course-client';

const MOCK_COURSE = {
  id: '1',
  title: 'دورة تطوير تطبيقات الويب الشاملة باستخدام Full-Stack',
  category: 'البرمجة والتطوير',
  description: 'تتعلم في هذه الدورة بناء المواقع والأنظمة من الصفر وحتى الاحتراف مع تطبيقات عملية مكثفة على المشاريع الحقيقية.',
  price: 250,
  thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  stats: { students: 128, codesSold: 94, rating: 4.8 },
  profit: 23500,
  recentCodes: [
    { id: '1', code: 'DRB-CH-9841', status: 'active' as const },
    { id: '2', code: 'DRB-CH-5520', status: 'used' as const },
    { id: '3', code: 'DRB-CH-3102', status: 'active' as const },
    { id: '4', code: 'DRB-CH-7744', status: 'used' as const },
  ],
};

export default async function ManageCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = MOCK_COURSE;
  return <ManageCourseClient course={course} />;
}