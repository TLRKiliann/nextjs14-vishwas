"use client";

import classNames from "classnames";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2 mr-4">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-blue-200": !props.canScrollPrev,
          "bg-blue-500 shadow-lg hover:bg-blue-600 hover:shadow-none active:bg-blue-700 \
           dark:bg-sky-900 hover:dark:bg-sky-800 active:dark:bg-sky-700": 
            props.canScrollPrev,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-blue-200": !props.canScrollNext,
          "bg-blue-500 shadow-lg hover:bg-blue-600 hover:shadow-none active:bg-blue-700 \
           dark:bg-sky-900 hover:dark:bg-sky-800 active:dark:bg-sky-700": 
            props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselControls;
