import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <FooterBrand />
          <FooterLinks />
        </div>

        <div className="mt-10">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}