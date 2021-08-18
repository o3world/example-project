import React, { FunctionComponent, useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import data from '../data/data.json';

import Selection from './Selection/Selection';
import Test1 from './Test1/Test1';
import Test2 from './Test2/Test2';
import Test3 from './Test3/Test3';

import './App.css';

const App: FunctionComponent = () => {
  const [tests, setTests] = useState<any[]>([]);

  // Get data and pass to pages
  useEffect(() => {
    const newTestsList: any[] = [];

    data.forEach((test) =>
      newTestsList.push({
        ...test,
        questions: test.questions.map((question) => ({
          ...question,
          answer: null,
        })),
        selected: false,
      }),
    );

    setTests(newTestsList);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/selection" component={() => <Selection data={tests} />} />
        <Route exact path="/test1" component={() => <Test1 data={tests} />} />
        <Route exact path="/test2" component={() => <Test2 data={tests} />} />
        <Route exact path="/test3" component={() => <Test3 data={tests} />} />

        <Route render={() => <Redirect to={{ pathname: '/selection' }} />} />
      </Switch>
    </div>
  );
};

export default App;
