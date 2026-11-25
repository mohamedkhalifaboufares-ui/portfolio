type Props = {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  number,
  label,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`section-label ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-white/30">{number}</span>
        <span className="h-px w-8 bg-cyan-300/50" />
        {label}
      </div>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  );
}
