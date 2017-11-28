import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFishData } from '../../redux/actions/fishActions';
import { withStyles } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class FishTableMain extends Component {

  componentDidMount(){
    this.props.fetchFishData();
  }


  render (props) {

      
      return (
        <MuiThemeProvider>
          <Table>
            <TableHead>
              <TableRow>
               <TableCell>Ranking</TableCell>
               <TableCell>Angler</TableCell>
               <TableCell>Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
            </TableBody>
          </Table>
        </MuiThemeProvider>
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

  export default connect(mapStateToProps,mapDispatchToProps)(FishTableMain);