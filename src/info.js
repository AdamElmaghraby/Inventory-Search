import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const title = "This is my title";
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

export default Info;
