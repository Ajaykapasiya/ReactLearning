// Class based component

import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            userInfo: {
                name: "Ajay kapasiya ", location: "India", age: 22, id: 3423, avatar_url: "http://dummy-photo.com"

            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Ajaykapasiya")
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);

    }


    render() {
        const {count} = this.state;
        const {
            name, location, age, id, avatar_url
        } = this.state.userInfo

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
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Age:{age}</h2>
            <h2>id:{id}</h2>
            <h2>course:Btech</h2>
            <h2>Contact:997*******</h2>

        </div>);
    };
};

export default UserClass;