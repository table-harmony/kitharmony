import { ThemeImage } from "@/components/image-wrapper";
import { Title } from "@/components/title";

export function FeaturesSection() {
  return (
    <section className="container px-4 lg:px-20">
      <Title
        title="features"
        subtitle="Polished, end-to-end features needed in every saas"
        className="flex flex-col items-center text-center"
      />
      <div className="mt-8 grid grid-cols-1 gap-20 md:mt-24 md:gap-40">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <Title
            title="authentication"
            subtitle="Support for oauth and credentials."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
            src="/scalekit/landing/authentication-light.png"
            dark="/scalekit/landing/authentication-dark.png"
            alt="First feature"
            width="1222"
            height="636"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <Title
            title="emails"
            subtitle="Using React email and Resend."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
            src="/scalekit/landing/emails-light.png"
            dark="/scalekit/landing/emails-dark.png"
            alt="Second feature"
            width="1222"
            height="636"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <Title
            title="documentation"
            subtitle="Well-documented using Fumadocs."
            className="mt-4 w-full px-4 md:max-w-sm"
          />
          <ThemeImage
            className="px-6 sm:max-w-4xl md:mr-14 md:min-w-[500px] md:max-w-screen-xl lg:px-8"
            src="/scalekit/landing/documentation-light.png"
            dark="/scalekit/landing/documentation-dark.png"
            alt="Third feature"
            width="1222"
            height="636"
          />
        </div>
      </div>
    </section>
  );
}
