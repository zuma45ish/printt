import {Providers} from "../providers";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col bg-base-100 text-neutral min-h-screen">
      <Providers>
          <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </div>
      </Providers>
    </section>
  );
}
