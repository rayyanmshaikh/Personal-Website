import PropTypes from 'prop-types'

function AppSection({ id, className = '', children }) {
  const sectionClassName = ['page-section', className].filter(Boolean).join(' ')

  return (
    <section id={id} className={sectionClassName}>
      {children}
    </section>
  )
}

AppSection.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default AppSection
