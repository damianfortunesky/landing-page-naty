interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="mx-auto mb-10 max-w-2xl space-y-4 text-center md:mb-12 md:space-y-5">
      <p className="text-xs uppercase tracking-[0.32em] text-rose-300 md:text-sm">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-text-primary md:text-4xl">{title}</h2>
      <p className="text-sm leading-relaxed text-text-secondary md:text-base">{subtitle}</p>
    </header>
  );
}
