import { observable } from 'mobx';
import { lift } from './lift-tracking/state';

export type State = {
  lift: lift,
  lifts: lift[],
};

const AppState: State = observable<State>({
  lift: {
    exercise: '',
    weight: 0,
  },
  lifts: [],
});

export default AppState;