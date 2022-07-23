import prev from '../../assets/icon-arrow-left.svg';
import next from '../../assets/icon-arrow-right.svg';
import { forwardRef } from 'react';

const CarouselBtn = (props, ref) => {
  return (
    <button
      type="button"
      className="relative align-middle rounded-full bg-black h-[64px] w-[64px]
          duration-[400ms] hover:bg-blue focus:bg-blue"
      aria-label={props.label}
      onClick={props.onClick}
      ref={ref}
      disabled={props.disabled}
    >
      <img
        src={props.prev ? prev : next}
        alt=""
        className="inline absolute m-auto top-0 bottom-0 left-0 right-0"
      />
    </button>
  );
};

export default forwardRef(CarouselBtn);
