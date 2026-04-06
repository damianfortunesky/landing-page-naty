interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blush-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm text-zinc-300 md:text-base">{subtitle}</p>
    </header>
  );
}
