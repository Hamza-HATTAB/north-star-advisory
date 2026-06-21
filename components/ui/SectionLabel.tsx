interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-label-caps mb-4 tracking-widest ${className}`}
      style={{
        color: light ? "#a9c7ff" : "#43474f",
      }}
    >
      {children}
    </p>
  );
}
