import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {  Avatar } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { getInitials } from 'helpers';
import { forwardRef } from 'react';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search placeholder="Search Students" {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));
const StudentView = props => {
    const { users, setData } = props;
    const classes = useStyles();
 
    const [columns, setColumns] = useState([
      {
        title: 'Name', field: 'name',
        render: rowData => {
          return (
            <div className={classes.nameContainer}>
              <Avatar
                className={classes.avatar}
                src={rowData.avatarUrl}
              >
                {/* {getInitials()} */}                
              </Avatar>
              <span> {rowData.name}</span>
            </div>            
          )},
        editComponent: props => (
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        )
      },
      { title: 'Email', field: 'email',type: 'text'},
      { title: 'Course', field: 'course', type: 'text' },
      {
        title: 'Country',
        field: 'address.country',
      },
    ]);

    return (
      <MaterialTable
        icons={tableIcons}
        title="Students Enrolled In The Course"
        columns={columns}
        data={users}
        options={{selection: true}}
      />
    )
  }
  StudentView.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired
  };
  export default StudentView;
