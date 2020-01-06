import React from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Home = () => (
  <div className='content'>
    <h3>Lucas's CMS</h3>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default Home;
