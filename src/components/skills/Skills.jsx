import SkillsCard from './SkillsCard';
import skillsIcons from './skillsIcons';

const Skills = props => {
  return (
    <div className=" container grid grid-cols-[repeat(2,1fr)] gap-6 mb-[6.25rem]">
      <SkillsCard
        className="h-[364px] bg-blue col-span-2"
        src={skillsIcons.design}
        text="Graphic Design"
      />
      <SkillsCard
        className="h-[182px] bg-orange  col-start-1 "
        src={skillsIcons.ui}
        text="UI/UX"
      />
      <SkillsCard
        className="h-[182px] bg-pink col-start-2"
        src={skillsIcons.apps}
        text="Apps"
      />
      <SkillsCard
        className="h-[158px] bg-peach col-span-2"
        src={skillsIcons.illustrations}
        text="Illustrations"
      />
      <SkillsCard
        className="h-[182px] bg-green col-span-2"
        src={skillsIcons.photo}
        text="Photography"
      />
      <SkillsCard
        className="h-[182px] bg-purple col-span-2"
        src={skillsIcons.motion}
        text="Motion Graphics"
      />
    </div>
  );
};

export default Skills;
