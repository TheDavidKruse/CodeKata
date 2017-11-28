import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFishData } from '../redux/actions/fishActions';

class FishTable extends Component {

  componentDidMount(){
    this.props.fetchFishData();
  }


  render () {
    console.log(this.state, this.props)
    let mappedFishData = this.props.fishData
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
   fishData : state.fishData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFishData: bindActionCreators(fetchFishData, dispatch)
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(FishTable);