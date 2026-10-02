import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  className?: string;
  monogram?: boolean;
  inverse?: boolean;
};

export function BrandMark({
  href = "/",
  className = "",
  monogram = false,
  inverse = false,
}: BrandMarkProps) {
  const content = monogram ? "Λ" : "ΛRCHΛNGEL";
  const classes = ["aa-brand-wordmark", inverse ? "text-[var(--aa-white)]" : "", className]
    .filter(Boolean)
    .join(" ");

  if (!href) {
    return <span className={classes} aria-label="Archangel">{content}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label="Archangel home">
      {content}
    </Link>
  );
}
