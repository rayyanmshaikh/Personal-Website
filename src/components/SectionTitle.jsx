import PropTypes from 'prop-types'
import { Bounce } from 'react-awesome-reveal'

function SectionTitle({ start, highlight }) {
  return (
    <Bounce>
      <h2 className='section-title'>
        {start} <span className='text-green'>{highlight}</span>
      </h2>
    </Bounce>
  )
}

SectionTitle.propTypes = {
  start: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
}

export default SectionTitle
