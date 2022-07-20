import type { NextPage } from 'next'
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import {
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import KeywordInput, { toOptions } from '../features/lift-tracking/components/KeywordInput';
import TextInput from '../features/lift-tracking/components/TextInput';
import getExercise from '../features/lift-tracking/business/selectors/getExercise';
import setExercise from '../features/lift-tracking/business/actions/setExercise';
import getWeight from '../features/lift-tracking/business/selectors/getWeight';
import setWeight from '../features/lift-tracking/business/actions/setWeight';
import getLifts from '../features/lift-tracking/business/selectors/getLifts';
import setLifts from '../features/lift-tracking/business/actions/setLifts';
import styles from '../styles/Home.module.css'

const Home: NextPage = observer(() => {

  async function fetchLifts() {
    const request = await fetch("http://max-tracker.test:88/api/lifts")
    const data = await request.json()
    setLifts(data)
  }

  useEffect(() => {
    fetchLifts();
  }, [])
  const lifts = getLifts();
  const exercise = computed(() =>
    toOptions(getExercise())).get();
  const weight = getWeight();
  const tempOptions = [
  { label: 'Benchpress', value: 'Benchpress' },
  { label: 'Deadlift', value: 'Deadlift' },
  { label: 'Squat', value: 'Squat' },
  ];

  // TODO: replace with actual type
  const previousLifts = getLifts();

  return (
    <Card>
      <Container>
        <Row>
          <Col xs={5}>
            <KeywordInput value={exercise} label="Exercise" placeholder="Choose an exercise" options={tempOptions} onChange={setExercise} />
          </Col>
          <Col xs={2}>
            <TextInput value={weight.toString()} label="Weight (kg)" placeholder="kg" onChange={setWeight} />
          </Col>
          {previousLifts.map((lift) => <div key={lift.exercise + lift.weight}>{lift.exercise}</div>)}
        </Row>
      </Container>
    </Card>
  );
})

export default Home
