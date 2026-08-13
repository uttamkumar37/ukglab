type SectionHeadingProps = {
  kicker: string;
  title: string;
  copy?: string;
  inverse?: boolean;
};

export function SectionHeading({ kicker, title, copy, inverse = false }: SectionHeadingProps) {
  return (
    <div>
      <p className={inverse ? "section-kicker text-signal-400" : "section-kicker"}>{kicker}</p>
      <h2 className={inverse ? "section-title text-white" : "section-title"}>{title}</h2>
      {copy ? <p className={inverse ? "section-copy text-ink-200" : "section-copy"}>{copy}</p> : null}
    </div>
  );
}
