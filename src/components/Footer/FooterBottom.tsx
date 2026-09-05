import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";


export function FooterBottom() {
  return (
    <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} BookHand. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/privacy"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Privacy
        </Link>

        <Link
          href="/terms"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Terms
        </Link>

        <div className="ml-2 flex items-center gap-3 border-l pl-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaGithub className="h-4 w-4" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaTwitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}