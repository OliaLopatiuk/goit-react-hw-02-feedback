import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled'

const FeedbackOptions = ({options, onLeaveFeedback}) => 
(<div>
    {options.map(option => (<Button type='button' name ={option} key={option} onClick={onLeaveFeedback}>{option}</Button>))}
    </div>);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string), 
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;