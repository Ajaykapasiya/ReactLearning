// Class based component

import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            count: 0
        };
    }
      async componentDidMount()
    {
const data = await fetch("https://api.github.com/users/Ajaykapasiya")
        const json = await data.json();
        console.log  (json);
    }

    render() {
         const {name} = this.props;
         const {count} = this.state;

        return (<div className="user-card">
            <h1>count:{count}</h1>
            <button
                onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                });
            }}>
                count increase
            </button>
            <h2>Name:{name}</h2>
            <h2>Age:21</h2>
            <h2>course:Btech</h2>
            <h2>Contact:997*******</h2>

        </div>);
    };
};

export default UserClass;