import React, { FunctionComponent, Fragment, useState } from 'react';

type SelectionProps = {
  data: any;
};

const Selection: FunctionComponent<SelectionProps> = ({ data }) => {
  const [selectedTests, setSelectedTests] = useState<any[]>([]);

  const handleSelection = (event: any): void => {
    if (event.target.checked) {
      const updatedSelectedTests = selectedTests.filter(
        (selected) => selected.id !== event.target.value,
      );

      setSelectedTests(updatedSelectedTests);
    } else {
      setSelectedTests([...selectedTests, event.target.value]);
    }
  };

  return (
    <>
      {data.map((test: any) => (
        <Fragment key={test.id}>
          <input
            type="checkbox"
            id={test.name}
            name={test.name}
            value={test.id}
            onChange={handleSelection}
          />
          <label htmlFor={test.name}>{test.name}</label>
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Selection;
