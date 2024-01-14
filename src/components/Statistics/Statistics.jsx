import PropTypes from 'prop-types';
import {Item, List} from './Statistics.styled'

const Statistics = ({options, total, positivePercentage, state}) => 
(
    <div>
        <List>
        {options.map(option => (<Item key={option}>{option}: {state[option]}</Item>))}
      </List>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage() || 0}%</p>
    </div>
 );

 Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string), 
    total: PropTypes.func, 
    positivePercentage: PropTypes.func, 
    state: PropTypes.object, 
 }

export default Statistics;