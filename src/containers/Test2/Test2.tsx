import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';

import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';

type Page2Props = {
  data: any;
};

const Page2: FunctionComponent<Page2Props> = ({ data }) => {
  const [test, setTest] = useState<any>({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setTest(data[1]);
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

export default Page2;
