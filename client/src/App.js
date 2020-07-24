import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})


const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/any',
  name: '박진우',
  birthday: '911226',
  gender: '남자',
  job: '웹퍼블리셔'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/any?t=1595578610444',
  name: '김남영',
  birthday: '970213',
  gender: '여자',
  job: '디자이너'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/any?t=1595578633614',
  name: 'Who',
  birthday: '911226',
  gender: '남자',
  job: '축구선수'
}]

function App(props) {
  const {classes} = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) }) } 
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);