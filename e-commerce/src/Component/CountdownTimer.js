import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import Images from '../utilis/images';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="d-flex flex-row gap-5 align-items-center mb-0">
      <a className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        {/* <p className='value' >:</p> */}
        <div className='d-flex flex-column  gap-2 '>
          <img src={Images.doteed} width="9" height="9" alt='' />
          <img src={Images.doteed} width="9" height="9" alt='' />
        </div>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <div className='d-flex flex-column  gap-2 '>
          <img src={Images.doteed} width="9" height="9" alt='' />
          <img src={Images.doteed} width="9" height="9" alt='' />
        </div>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <div className='d-flex flex-column  gap-2 '>
          <img src={Images.doteed} width="9" height="9" alt='' />
          <img src={Images.doteed} width="9" height="9" alt='' />
        </div>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter className=' d-flex'
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
