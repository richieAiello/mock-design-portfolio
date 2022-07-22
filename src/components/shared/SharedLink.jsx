import clsx from 'clsx';

const SharedLink = ({ light, dark }) => {
  return (
    <a
      href="#"
      className={`capitalize font-bold text-[0.875rem] leading-7
        text-cream rounded-full py-2 px-7 inline-block
        duration-[400ms] md:text-[1rem] ${clsx({
          'bg-black': dark,
          'bg-peach': light,
          'hover:bg-blue': dark,
          'focus:bg-blue': dark,
          'hover:bg-orange': light,
          'focus:bg-orange': light,
        })}`}
    >
      Free Consultation
    </a>
  );
};

export default SharedLink;
