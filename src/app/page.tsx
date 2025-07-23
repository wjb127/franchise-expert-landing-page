import Header from '@/components/Header';
import ServiceSection from '@/components/ServiceSection';
import ExpertSection from '@/components/ExpertSection';
import BenefitsSection from '@/components/BenefitsSection';
import FAQSection from '@/components/FAQSection';
import OneClickConsultation from '@/components/OneClickConsultation';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceSection />
      <ExpertSection />
      <BenefitsSection />
      <OneClickConsultation />
      <FAQSection />
      <ContactForm />
      {/* 하단 고정 폼을 위한 여백 */}
      <div className="h-24"></div>
    </main>
  );
}
