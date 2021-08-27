import PropTypes from "prop-types";
export default function FeedbackOption({ options, handleFeedback }) {
  return (
    <div>
      {options.map((option, index) => (
        <button
          type="button"
          key={index}
          name={option}
          onClick={handleFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
