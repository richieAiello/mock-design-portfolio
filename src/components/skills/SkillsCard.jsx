const SkillsCard = props => {
  return (
    <div
      className={`flex rounded-lg relative pl-6 pb-6 ${props.className}`}
    >
      <img
        src={props.src}
        alt=""
        className="absolute top-6 right-6"
      />
      <p className="capitalize font-bold text-white text-[1.5rem] leading-[1.89rem] mt-auto">
        {props.text}
      </p>
    </div>
  );
};

export default SkillsCard;
