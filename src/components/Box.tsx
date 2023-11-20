import Button from "./Button";

export default function Box() {
  return (
    <div className="bg-dark-purple text-white p-8 md:px-14 md:py-12 lg:p-16 flex flex-col gap-4">
      <h1 className="font-fraunces wonky text-[2rem] font-semibold md:text-[3rem] lg:text-[3.5rem] text-center md:text-start">Be the first to test</h1>
      <p className="font-manrope text-center md:text-start">
      Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
      </p>
      <Button label="Apply for access" />
    </div>
  );
}