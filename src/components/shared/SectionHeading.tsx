interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: Props) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
      <div className={`mt-4 h-1 w-16 rounded-full bg-primary-500 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
