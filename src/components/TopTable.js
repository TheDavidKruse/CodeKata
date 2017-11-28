import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import * as fishActions from '../redux/actions/fishActions';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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

class TopTable extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fishActions.fetchFishData();
    }

    render() {
        console.log(this)
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Angler</TableCell>
                    <TableCell>Weight</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.fishData.map((fish,index) => {
                        return (
                            <TableRow>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{fish.angler}</TableCell>
                                <TableCell>{fish.weight}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            </Paper>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
      fishData: state.fish
    }
  }
  
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fishActions : bindActionCreators(fishActions, dispatch)
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(TopTable));