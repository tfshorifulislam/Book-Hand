import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Books", href: "/books" },
  { label: "Community", href: "/community" },
];

const accountLinks = [
  { label: "Profile", href: "/profile" },
  { label: "Saved", href: "/saved" },
  { label: "My Posts", href: "/my-posts" },
  { label: "Settings", href: "/settings" },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
      <div>
        <h3 className="text-sm font-semibold">Explore</h3>

        <ul className="mt-4 space-y-3">
          {exploreLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Account</h3>

        <ul className="mt-4 space-y-3">
          {accountLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}