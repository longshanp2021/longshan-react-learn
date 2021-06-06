import * as react from "react";

export class List extends react.Component {

    users;
    render() {
        let userNames=this.props.users.map(u=>(<p>{u.name}</p>));
        // console.log(1,userNames);
        return (
            <div>
                {userNames}
            </div>
        );
    }
}