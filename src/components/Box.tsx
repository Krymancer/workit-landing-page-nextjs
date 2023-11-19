import Button from "./Button";

export default function Box() {
  return (
    <div className="bg-dark-purple text-white">
      <h1 className="font-fraunces wonky">Be the first to test</h1>
      <p className="font-manrope">
      Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
      </p>
      <Button label="Apply for access" />
    </div>
  );
}