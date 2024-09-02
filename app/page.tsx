import React from 'react';

import { Zap, User, Code, Star, Briefcase } from 'lucide-react';

const name = process.env.REACT_APP_NAME;
const title = process.env.REACT_APP_TITLE;
const contact = process.env.REACT_APP_CONTACT;

const textContent = {
  name,
  title,
  contact,
  coreCompetencies: ['풀스택 개발', '성능 최적화', '팀 리더십', '문제 해결'],
  techStack: {
    backend: ['Python', 'FastAPI', 'Supabase'],
    frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  careerSummary: [
    '작가 주식회사 - 풀스택 개발자 (2023.11 - 현재)',
    '핏펫 주식회사 - 프론트엔드 개발자 (2023.07 - 2023.08)',
    '벳플럭스 - 프론트엔드 개발자 (2020.12 - 2021.09)',
  ],
  coreCompetenciesDescription: `시간 비용을 최우선으로 고려하며, 
  팀에 실용적인 도움이 된다면 원칙을 깨는 것도 두려워하지 않는다는 점입니다. 
  이는 "완벽한 코드는 없다. 문제를 해결할 수 있으면 그게 최고의 코드다"라고 했던 켄 톰슨(Ken Thompson)의 말과 일맥상통합니다. 
  저는 실용적인 해결책이 더 나은 결과를 낳는다는 신념을 가지고, 효율성과 실용성을 항상 우선시합니다.`,
  selfIntroduction: [
    '안녕하세요, 불확실성을 기회로 바꾸는 풀스택 개발자 양승민입니다. 저는 React와 FastAPI를 활용한 웹 애플리케이션 개발에 전문성을 가지고 있으며, 특히 성능 최적화와 사용자 경험 개선 분야에서 탁월한 성과를 거두어왔습니다.',
    '최근 프로스페이스 브라우저 앱 개발에서 앱 응답 시간을 0.4초 이하로 개선하고, Million.js 도입으로 컴포넌트 성능을 70% 이상 향상시켰습니다. 이 과정에서 기술적 도전을 해결하며 ��용자 중심의 개발 철학을 더욱 굳건히 하게 되었습니다.',
    '또한, 팀 리더십을 발휘하여 커뮤니케이션 프로세스를 개선하고 프로젝트 완료 시간을 10% 단축한 경험이 있습니다. 이를 통해 기술적 역량뿐만 아니라 팀 협업과 프로젝트 관리 능력도 키울 수 있었습니다.',
    '앞으로도 지속적인 학습과 혁신을 통해 기술적 전문성을 높이고, 이를 바탕으로 비즈니스에 실질적인 가치를 창출하는 개발자로 성장하고 싶습니다. 귀사의 혁신적인 프로젝트에 참여하여 제 기술력과 경험을 적극 활용하고, 함께 성장할 수 있는 기회를 갖고 싶습니다.',
  ],
  projectLessons: [
    {
      icon: Zap,
      title: '프로스페이스 브라우저 앱 최적화',
      description: '기술적 도전과 해결 과정',
      details: [
        '성능 최적화는 단순히 코드 개선을 넘어 사용자 경험 전체를 고려해야 함을 깨달았습니다.',
        'Million.js와 같은 최신 기술 도입 시 팀 전체의 학습 곡선을 관리하는 것의 중요성을 배웠습니다.',
        '측정 가능한 목표 설정(예: 응답 시간 0.4초 이하)의 중요성과 그에 따른 체계적인 접근 방법을 익혔습니다.',
        '성능 ��적화와 코드 가독성 사이의 균형을 유지하는 것의 중요성을 인식하게 되었습니다.',
      ],
    },
    {
      icon: User,
      title: '팀 리더십과 커뮤니케이션',
      description: '소프트 스킬 향상',
      details: [
        '명확한 커뮤니케이션이 프로젝트 성공의 핵심임을 경험했습니다.',
        '다양한 배경을 가진 팀원들과의 효과적인 협업 방법을 터득했습니다.',
        '기술적 결정에 대한 설득력 있는 근거 제시의 중요성을 깨달았습니다.',
        '주니어 개발자 멘토링을 통해 리더십 스킬을 향상시켰습니다.',
      ],
    },
  ],
  careerDetails: [
    {
      company: '작가 주식회사',
      position: '풀스택 개발자 | 2023.11 - 현재',
      achievements: [
        '프로스페이스(브라우저) 앱 성능 최적화: 응답 시간 0.4초 이하로 개선',
        'Million.js 도입으로 컴포넌트 FCP, LCP 70% 이상 향상',
        'GitHub Actions를 활용한 CI/CD 파이프라인 구축으로 배포 프로세스 자동화',
        '팀 커뮤니케이션 개선 주도로 프로젝트 완료 시간 10% 단축',
      ],
    },
    {
      company: '핏펫 주식회사',
      position: '프론트엔드 개발자 | 2023.07 - 2023.08',
      achievements: [
        '테스트 주도 개발(TDD) 방법론 도입에 참여, 코드 품질 향상',
        '사내 공통 컴포넌트 라이브러리 개발 참여, 개발 생산성 20% 증가',
        'React와 TypeScript를 활용한 웹 애플리케이션 개발',
      ],
    },
    {
      company: '벳플럭스',
      position: '프론트엔드 개발자 | 2020.12 - 2021.09',
      achievements: [
        '의료용 메신저 애플리케이션 개발 주도',
        'React Native를 활용한 크로스 플랫폼 모바일 앱 구현',
        '실시간 채팅 기능 구현으로 사용자 간 커뮤니케이션 효율성 50% 향상',
      ],
    },
  ],
};

const Page = ({
  children,
  pageNumber,
}: {
  children: React.ReactNode;
  pageNumber: number;
}) => (
  <div className="relative flex min-h-screen snap-y snap-mandatory flex-col gap-4 border-b bg-white p-8 shadow-lg">
    {children}
    <div className="absolute bottom-4 right-4 text-zinc-700">
      Page {pageNumber}/5
    </div>
  </div>
);

const Section = ({
  icon,
  title,
  children,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) => (
  <section className="mb-6">
    <h2 className="mb-4 flex items-center text-2xl font-semibold">
      {icon && React.createElement(icon, { className: 'mr-2 text-primary' })}
      {title}
    </h2>
    {children}
  </section>
);

const SkillBadge = ({ name }: { name: string }) => (
  <span className="mr-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-primary">
    {name}
  </span>
);

const ComprehensiveResumePackage: React.FC = () => {
  return (
    <div className="mx-auto max-w-[968px]">
      {/* Page 1: 이력서 */}
      <Page pageNumber={1}>
        <h1 className="mb-6 text-center text-3xl font-bold">
          {textContent.name}
        </h1>
        <p className="mb-6 text-center text-xl text-gray-600">
          {textContent.title}
        </p>

        <Section icon={User} title="연락처 정보">
          <p>{textContent.contact}</p>
        </Section>

        <Section icon={Star} title="핵심 역량">
          <div className="mb-4 flex flex-wrap gap-2">
            {textContent.coreCompetencies.map((competency, index) => (
              <SkillBadge key={index} name={competency} />
            ))}
          </div>
          <p className="text-gray-700">
            {textContent.coreCompetenciesDescription}
          </p>
        </Section>

        <Section icon={Code} title="기술 스택">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 font-semibold">프론트엔드</h3>
              <div className="flex flex-wrap gap-2">
                {textContent.techStack.frontend.map((tech, index) => (
                  <SkillBadge key={index} name={tech} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">백엔드</h3>
              <div className="flex flex-wrap gap-2">
                {textContent.techStack.backend.map((tech, index) => (
                  <SkillBadge key={index} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="경력 요약" icon={Briefcase}>
          <ul className="list-inside list-disc space-y-2">
            {textContent.careerSummary.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </Section>
      </Page>

      {/* Page 2-3: 경력기술서 */}
      <Page pageNumber={2}>
        <h1 className="mb-6 text-center text-3xl font-bold">경력기술서</h1>

        {textContent.careerDetails.map((career, index) => (
          <Section key={index} icon={Briefcase} title={career.company}>
            <h3 className="text-xl font-semibold">{career.position}</h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              {career.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </Section>
        ))}
      </Page>

      {/* Page 4: 프로젝트에서 배운 점 */}
      <Page pageNumber={4}>
        <h1 className="mb-6 text-center text-3xl font-bold">
          프로젝트에서 배운 점
        </h1>

        {textContent.projectLessons.map((lesson, index) => (
          <Section key={index} icon={lesson.icon} title={lesson.title}>
            <h3 className="mb-2 text-xl font-semibold">{lesson.description}</h3>
            <p className="mb-4 text-gray-700">{lesson.details.join(' ')}</p>
          </Section>
        ))}
      </Page>

      {/* Page 5: 자기소개서 */}
      <Page pageNumber={5}>
        <h1 className="mb-6 text-center text-3xl font-bold">자기소개서</h1>

        <Section icon={Star} title="기술적 열정과 비즈니스 가치 창출">
          {textContent.selfIntroduction.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </Section>
      </Page>
    </div>
  );
};

export default ComprehensiveResumePackage;
