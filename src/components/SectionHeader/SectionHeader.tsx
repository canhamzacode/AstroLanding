import CoolText from '../CoolText/CoolText';
import Button from '../Button/Button';

interface SectionHeaderProps {
  title: string;
  description: string;
  action?: string;
  info: string;
  customColor?: string;
}

const SectionHeader = ({ title, description, action, info, customColor }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12">
      <CoolText text={info} customColor={customColor} />
      <div>
        <h1 className="leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
          {title}
        </h1>
        <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
          {description}
        </p>
      </div>
      {action && <Button text={action} />}
    </div>
  );
};

export default SectionHeader;
