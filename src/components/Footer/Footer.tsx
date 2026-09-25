import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-370 px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] lg:gap-20">
          <FooterBrand />
          <FooterLinks />
        </div>

        <div className="mt-12 border-t pt-6">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}