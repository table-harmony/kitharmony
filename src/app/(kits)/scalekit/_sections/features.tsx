import { Title } from "@/components/title";
import { Section } from "@/components/section";
import { ThemeImage } from "@/components/image-wrapper";

export function FeaturesSection() {
  return (
    <Section id="features" className="flex flex-col items-center">
      <Title
        title="features"
        subtitle="polished, end-to-end features needed in every saas"
        className="text-center"
      />
      <div className="mt-8 grid grid-cols-1 gap-20 md:mt-24 md:gap-40">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <Title
            title="Authentication"
            subtitle="support for oauth and credentials."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/authentication-light.png"
            dark="/scalekit/landing/authentication-dark.png"
            alt="First feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <Title
            title="Emails"
            subtitle="uses React Email and Resend."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/emails-light.png"
            dark="/scalekit/landing/emails-dark.png"
            alt="Second feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <Title
            title="Documentation"
            subtitle="well-documented using Fumadocs."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            src="/scalekit/landing/documentation-light.png"
            dark="/scalekit/landing/documentation-dark.png"
            alt="Third feature"
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
          />
        </div>
      </div>
    </Section>
  );
}
