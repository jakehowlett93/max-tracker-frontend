import { observable } from 'mobx';
import { liftState } from './lift-tracking/state';

export type State = {
  lift: liftState,
};

const AppState: State = observable<State>({
  lift: {
    exercise: '',
    weight: 0,
  },
});

export default AppState;