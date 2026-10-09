type Props = {
  number: string;
  label: string;
  title: string;
  id?: string;
};

export function SectionHeading({ number, label, title, id }: Props) {
  return (
    <>
      <p className="mb-3 font-mono text-[13px] text-accent">
        {number} / {label}
      </p>
      <h2 id={id} className="mb-10 font-display text-[40px] leading-[1.1] font-bold">
        {title}
      </h2>
    </>
  );
}
