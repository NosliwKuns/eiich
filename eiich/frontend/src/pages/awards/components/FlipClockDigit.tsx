import clsx from 'clsx';
import React from 'react';
import styles from '@/pages/awards/styles/FlipClockCountdown.module.css';
// import { Digit, FlipClockCountdownProps } from './types';

// export interface FlipClockDigitProps {
//   current: Digit;
//   next: Digit;
//   className?: string;
//   style?: FlipClockCountdownProps['digitBlockStyle'];
// }

// type FlipClockDigitState = {
//   current: Digit;
//   next: Digit;
// };

export default function FlipClockDigit(props) {
  const { current, next, className, style } = props;
  const [digit, setDigit] = React.useState({ current, next });
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    if (digit.current !== current) {
      if (digit.current === digit.next) {
        setDigit({ ...digit, next });
      }
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [current, next]);

  const handleTransitionEnd = (): void => {
    setDigit({ current, next });
    setFlipped(false);
  };

  return (
    <div className="border border-red-500">
      <div>{digit.next}</div>
      <div>{digit.current}</div>
      <div>
        <div className={clsx(styles.fcc__card, "relative", { [styles.fcc__flipped]: flipped})} onTransitionEnd={handleTransitionEnd}>
          {/* <div className="absolut top-0 bg-green-500">{digit.current}</div> */}
          {/* <div>a</div> */}
          <div className='relative z-10'>{digit.current}</div>
          <span className="absolute top-0 w-full h-full bg-green-50 z-20">{digit.current}</span>
          <div className="absolute top-0 bg-red-50 text-green-500 z-30" style={{ backfaceVisibility: "hidden"}}>{digit.current}</div>
        </div>
        <div>{digit.current}</div>
      </div>
      {/* <div className={styles.fcc__next_above}>{digit.next}</div>
      <div className={styles.fcc__current_below}>{digit.current}</div>
      <div className={clsx(styles.fcc__card, { [styles.fcc__flipped]: flipped })} onTransitionEnd={handleTransitionEnd}>
        <div className={clsx(styles.fcc__card_face, styles.fcc__card_face_front)}>{digit.current}</div>
        <div className={clsx(styles.fcc__card_face, styles.fcc__card_face_back)}>{digit.next}</div>
      </div> */}
    </div>
  );
}