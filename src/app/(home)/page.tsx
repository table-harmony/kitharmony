import {
  FaqSection,
  JoinSection,
  MainSection,
  StaterKitsSection,
} from "./sections";

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      <MainSection />
      <StaterKitsSection />
      <FaqSection />
      <JoinSection />
    </div>
  );
}
