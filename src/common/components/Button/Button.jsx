import PropTypes from 'prop-types'

export function Button({ loading = false, type = 'button', preset = 'btn-primary', label = 'Valider' }) {
  return (
    <button type={type} className={`btn ${preset}`}>
      {loading ? (<>
        <i className='fa fa-spinner fa-spin' />
        Loading
      </>) : label}
    </button>
  );
}

Button.PropTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  preset: PropTypes.string,
  label: PropTypes.string,
};
