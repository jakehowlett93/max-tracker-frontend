import { action } from 'mobx';
import state from '../../../state';

export default action((weight: string): void => {
  state.lift.weight = Number(weight);
});
