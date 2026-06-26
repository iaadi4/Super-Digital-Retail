import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 font-body">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#7A7A7A]">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-[#111] transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-[#7A7A7A]/50" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#111] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#111] font-medium truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
