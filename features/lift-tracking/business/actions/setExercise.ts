import { action } from 'mobx';
import state from '../../../state';

type Value = { value: string };
export default action((exercise: Value): void => {
  state.lift.exercise = exercise.value;
});
