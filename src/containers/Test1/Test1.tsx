import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';

import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';

type Page1Props = {
  data: any;
};

const Page1: FunctionComponent<Page1Props> = ({ data }) => {
  const [test, setTest] = useState<any>({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setTest(data[0]);
  }, [data]);

  return (
    <>
      {test?.questions?.map((question: any) => (
        <Fragment key={question.id}>
          <Question question={question} />
          <Answer />
        </Fragment>
      ))}
    </>
  );
};

export default Page1;
