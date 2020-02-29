import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouse } from '../../actions';

class HouseList extends Component {
  componentDidMount() {
    this.props.fetchHouse();
  }

  // renderHouses() {
    
  //     return (
  //       <div className="card darken-1" key={house._id}>
  //         {/* <div className="card-content">
  //           <span className="card-title">{house.houseName}</span>
  //           <p>
  //             {house.owner}
  //           </p>
  //       </div> */}
  //       </div>
  //     );
  // }

  render() {
    return (
      <div>
        should be a list of houses
        {/* {this.renderHouses()} */}
      </div>
    );
  }
}

function mapStateToProps({ houses }) {
  return { houses };
}

export default connect(mapStateToProps, { fetchHouse })(HouseList);