import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import {
  Card,
  Col,
  Container,
  Row,
  Button
} from 'react-bootstrap';
import KeywordInput, { toOptions } from '../features/lift-tracking/components/KeywordInput';
import TextInput from '../features/lift-tracking/components/TextInput';
import getExercise from '../features/lift-tracking/business/selectors/getExercise';
import setExercise from '../features/lift-tracking/business/actions/setExercise';
import getWeight from '../features/lift-tracking/business/selectors/getWeight';
import setWeight from '../features/lift-tracking/business/actions/setWeight';
import setLifts from '../features/lift-tracking/business/actions/setLifts';
import getLifts from '../features/lift-tracking/business/selectors/getLifts';
import ResponseToast from './components/ResponseToast';
import Lift from './components/Lift';
import LiftTable from '../features/lift-table/components/LiftTable';
import styles from '../styles/Home.module.css'

const Home: NextPage = observer(() => {
  const [showToast, setShowToast] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  async function fetchLifts() {
    const request = await fetch("http://max-tracker.test:88/api/lifts")
    const data = await request.json()
    setLifts(data)
  }

  useEffect(() => {
    fetchLifts();
    setIsFetching(false);
  }, [isFetching])

  const exercise = computed(() =>
    toOptions(getExercise())).get();
  const weight = getWeight();
  const previousLifts = getLifts();
  const exerciseOptions = [
    { label: 'Benchpress', value: 'Benchpress' },
    { label: 'Deadlift', value: 'Deadlift' },
    { label: 'Squat', value: 'Squat' },
    ];
  const columns = exerciseOptions.map((option) => {
    return {
      Header: option.value,
      accessor: option.value,
    }
  })
  const handleTrackClick = async () => {
    const response = await fetch('http://max-tracker.test:88/api/lifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"exercise": getExercise(), "weight": getWeight()}),
    });
    if (response.status === 201) {
      setShowToast(true);
      setIsFetching(true);
    } else {
      alert(response.status)
    }
  }

  return (
    <Card>
      <Container>
        <Row>
          <Col xs={5} className="p-1">
            <KeywordInput value={exercise}  label="Exercise" placeholder="Choose an exercise" options={exerciseOptions} onChange={setExercise} />
          </Col>
          <Col xs={2} className="p-1">
            <TextInput value={weight.toString()} label="Weight (kg)" placeholder="kg" onChange={setWeight} />
          </Col>
          <Col xs={2} className="p-1">
          <Button variant="outline-primary" onClick={handleTrackClick}>Track</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <LiftTable data={previousLifts} columns={columns} />
          </Col>
        </Row>
      </Container>
      
      <ResponseToast showToast={showToast} setShowToast={setShowToast} />
    </Card>
  );
})

export default Home
