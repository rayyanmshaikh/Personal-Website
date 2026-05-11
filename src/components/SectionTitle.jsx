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

export default SectionTitle
