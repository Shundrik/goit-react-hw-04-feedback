import { Statistics } from 'components/Statistics/Statistics';
import { useState } from 'react';
import styled from 'styled-components';
import { Section } from 'components/Section/Section';
// import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
// import { Button } from 'components/Buttons/Buttons';
const WraperCard = styled.div`
  width: 250px;
  height: 100%;
  border: 2px solid white;
  border-radius: 15px;
  &:hover {
    box-shadow: 2px 5px 10px gold;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 20px;
`;
const TitleSecond = styled.h2`
  text-align: center;
  font-size: 20px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
export const Review = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error(`unkrouns feedback type - ${type}`);
    }
  };

  const options = ["good", "neutral", "bad"];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <WraperCard>
      <Title> Please leave feedback</Title>
      <WrapperButton>
        {/* <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button> */}

         <FeedbackOptions
                    options={options}
                    onLeaveFeedback={onLeaveFeedback}
                  ></FeedbackOptions>
      </WrapperButton>

      <TitleSecond>Statistics</TitleSecond>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
      ) : (
        <Section> </Section>
      )}
    </WraperCard>
  );
  //  ========== var 1
  //   return (
  //     <>
  //       <h1>Please leave feedback</h1>
  //       <button onClick={()=>setGood(good + 1)}>Good</button>
  //       <button onClick={()=>setNeutral(neutral + 1)}>Neutral</button>
  //       <button onClick={()=>setBad(bad + 1)}>Bad</button>
  //       <h2>Statistics</h2>
  //       <ul>
  //         <li>Good: {good}</li>
  //         <li>Neutral: {neutral}</li>
  //         <li>Bad: {bad} </li>
  //       </ul>
  //     </>
  //   );
};

// Review.propTypes = {
  // this.state: PropTypes.arrayOf(PropTypes.shape({
  //   good:PropTypes.number.isRequired,
  //   neutral:PropTypes.number.isRequired,
  //   bad:PropTypes.number.isRequired,
  // }).isRequired,
  // ).isRequired,
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };
