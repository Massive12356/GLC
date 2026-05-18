interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-secondary'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-accent mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;
