import React from 'react';
import BaseHoc from './hoc/BaseHoc';

class ClassComponent extends React.Component{
render(){
    return (
        <div className="App">
          <header className="App-header">
          <p>This is class Components</p>
          </header>
        </div>
      );
}
}

export default  BaseHoc(ClassComponent);