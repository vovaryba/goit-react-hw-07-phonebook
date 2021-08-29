import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const change = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={change}
        type="text"
        name="name"
        className={s.input}
      />
    </label>
  );
};

export default Filter;
