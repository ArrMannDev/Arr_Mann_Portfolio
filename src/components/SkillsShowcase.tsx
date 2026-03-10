import type { SkillShowcaseProps } from "../type/type";

export default function SkillsShowcase({
  className,
  showCaseText,
  techIcons,
}: SkillShowcaseProps) {
  return (
    <div className={className}>
      <p className="text-lg text-(--color-text) font-DMMono-regular border-r-2 py-2 pr-4">
        {showCaseText}
      </p>

      <div className="flex flex-row flex-wrap items-center gap-3 ml-4">
        {techIcons.map(({ icon: Icon, color }, index) => (
          <Icon key={index} size={30} className={color} />
        ))}
      </div>
    </div>
  );
}
