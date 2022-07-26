import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './lift.module.css';

type Props = {
  exercise: string,
  weight: Number,
}

const Lift = ({exercise, weight}: Props) => {
  return (
    <Card className={styles.liftCard}>
      <Card.Body>
        <div className={styles.lift}>
          <div className={styles.exercise}>{exercise}</div>
          <div>{`${weight}kg`}</div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Lift;
