import React from 'react';
import ShelfItem from './shelf_item';

class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    if (this.props.currentUser && this.props.users &&
      this.props.users[this.props.currentUser.id] &&
      this.props.users[this.props.currentUser.id].bookshelves.length > 0) {
      return (
        <div>
          <div>
            Welcome to your profile page {this.props.currentUser.name}
          </div>
          <div>
            {
              this.props.users[this.props.currentUser.id].shelf_items.map((item, idx) => (
                <ShelfItem
                  key={idx}
                  item={item} />
              ))
            }
          </div>
        </div>
      );
    } else {
      return(
        <div>

        </div>
      )
    }
  }
}
export default ProfilePage;
