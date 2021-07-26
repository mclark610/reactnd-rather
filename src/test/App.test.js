import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { getInitialData } from '../data/api';

describe('App', () => {
  it('renders without crashing given the required props', () => {
    getInitialData().then(val => (
      console.log("val: " + val)
    )).catch((err) => (
      console.log("error in init data" + err)
    ))
  })
  })