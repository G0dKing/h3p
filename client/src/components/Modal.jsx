import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Modal = ({ onClose }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/submit', { email })
            setEmail('')
            onClose()
        } catch (error) {
            console.error('Error submitting form data:', error)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.modal-content')) {
                onClose()
            }
        }

        document.body.addEventListener('click', handleClickOutside)
        
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [onClose])

    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                 <label>
                    Your Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                 </label>
                <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default Modal