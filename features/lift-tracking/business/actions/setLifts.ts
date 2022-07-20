import { action } from 'mobx';
import state from '../../../state';
import { lift } from '../../state';

export default action((lifts: lift[]): void => {
  state.lifts = lifts;
});
