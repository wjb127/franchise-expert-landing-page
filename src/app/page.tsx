import Header from '@/components/Header';
import ServiceSection from '@/components/ServiceSection';
import ExpertSection from '@/components/ExpertSection';
import BenefitsSection from '@/components/BenefitsSection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceSection />
      <ExpertSection />
      <BenefitsSection />
      <FAQSection />
      <ContactForm />
      {/* 하단 고정 폼으로 인한 여백 추가 */}
      <div className="h-40"></div>
    </main>
  );
}
