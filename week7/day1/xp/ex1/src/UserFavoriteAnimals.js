import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    const { user } = this.props;
    console.log({user});
    

    return (
        <div>
        <h4>User's Favorite Animals: {user.firstName} </h4>
        <ul>
          {user.favAnimals.map((favAnimal, index) => (
            <li key={index}>{favAnimal}</li>
          ))}
          </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;

