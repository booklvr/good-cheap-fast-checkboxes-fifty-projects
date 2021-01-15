import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ title, func, val, handleChange }) => {
  return (
    <div className='toggle-container'>
      <input
        type='checkbox'
        id={title}
        checked={val ? 'checked' : false}
        className='toggle'
        onChange={(e) => handleChange(func, val, e.target)}
      />
      <label htmlFor={title} className='label'>
        <div className='ball'></div>
      </label>
      <span>{title[0].toUpperCase() + title.substring(1)}</span>
    </div>
  )
}

const Checkboxes = () => {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)

  const handleChange = (func, val, target) => {
    func(!val)

    if (fast && cheap && target.id === 'good') {
      setFast(false)
    }

    if (good && fast && target.id === 'cheap') {
      setGood(false)
    }

    if (cheap && good && target.id === 'fast') {
      setCheap(false)
    }
  }

  return (
    <Fragment>
      <h2>How do you want your project to be?</h2>
      <Checkbox
        title='good'
        val={good}
        handleChange={handleChange}
        func={setGood}
      />
      <Checkbox
        title='cheap'
        val={cheap}
        func={setCheap}
        handleChange={handleChange}
      />
      <Checkbox
        title='fast'
        val={fast}
        func={setFast}
        handleChange={handleChange}
      />
    </Fragment>
  )
}

Checkbox.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func.isRequired,
  val: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Checkboxes
