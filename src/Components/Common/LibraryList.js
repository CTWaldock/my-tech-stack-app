import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {
 
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.liraries);

  }

  render() {
    return;
  }
}

const mapStateToProps = state => {
  return { liraries: state.liraries };
};

export default connect()(LibraryList);
