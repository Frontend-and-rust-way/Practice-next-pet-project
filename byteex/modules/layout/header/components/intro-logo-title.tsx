import Image from "next/image";

export function IntroLogoTitle() {
  return (
    <div>
      <Image
        src="/byteex-logo.png"
        alt="Byteex logo"
        width={200}
        height={35}
      />
      <span className="mt-8 text-3xl font-semibold text-tw-dark-blue block">
        Don’t apologize for being comfortable.
      </span>
    </div>
  );
}
