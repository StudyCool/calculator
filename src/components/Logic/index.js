import React, { Component } from 'react';
import styles from './Logic.module.css';
import classNames from 'classnames';

function Logic (props) {
  return (
    <div className={styles.logic}>
      <table>
        <tr>
          <th className={styles.operator} data-action="add">+</th>
          <th className={styles.operator} data-action="subtract">-</th>
          <th className={styles.operator} data-action="multiply">&times;</th>
          <th className={styles.operator} data-action="divide">÷</th>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td rowSpan={4}  data-action="calculate" align={'center'} className={styles.calculate}>=</td>
        </tr>

        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>

        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>

        </tr>
        <tr>
          <td>0</td>
          <td data-action="decimal">.</td>
          <td data-action="clear">AC</td>
        </tr>

      </table>


    </div>
  );
}

export default Logic;