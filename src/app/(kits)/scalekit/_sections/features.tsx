export function FeaturesSection() {
  return (
    <div id="features" className="flex flex-col items-center">
      <div className="text-center">
        <h2 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
          features
        </h2>
        <p className="mb-2 font-semibold">
          polished, end-to-end features needed in every saas
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-20 md:mt-24 md:gap-40">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <div>
            <h3 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
              authentication
            </h3>
            <p className="mb-2 font-semibold">
              support for oauth and credentials.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div>
            <h3 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
              emails
            </h3>
            <p className="mb-2 font-semibold">using React email and Resend.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse">
          <div>
            <h3 className="max-w-lg text-2xl font-bold uppercase text-primary md:text-4xl">
              documentation
            </h3>
            <p className="mb-2 font-semibold">
              well-documented using Fumadocs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
