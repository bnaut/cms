import React from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Hours from '../components/Hours';

const Home = () => (
  <div className='content'>
    <h3>Lucas's CMS</h3>
    <AddTodo />
    <VisibleTodoList />
    <Hours />
    <Footer />
  </div>
);

export default Home;
