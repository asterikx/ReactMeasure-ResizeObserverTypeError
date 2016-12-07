import Measure from 'react-measure';
import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <Measure
        whitelist={['width']}
        onMeasure={(dim) => console.log(dim)}>
        <div
          style={{minHeight: '200px', backgroundColor: 'gray'}}>
        </div>
      </Measure>
    );
  }

}
