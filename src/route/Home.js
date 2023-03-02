import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to our calculator app!</h1>

    <p className={styles.description}>
      Math Magic is a handy tool for quick and easy solutions to basic math problems.
      <br />

      Ideal for students, professionals, and anyone who needs to perform calculations regularly.

      It performs basic math operations like addition, multiplication, division and subtraction.
    </p>

    <p className={styles.message}>
      We are constantly updating our App to ensure they are accurate and up-to-date.

      Start exploring our website today.
    </p>
  </div>
);

export default Home;
