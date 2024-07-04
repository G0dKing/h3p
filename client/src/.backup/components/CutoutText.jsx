import { } from 'react'
import PropTypes from 'prop-types'
import '@s/CutoutText.css'

const CutoutText = ({ onClick }) => {
    return (
      <>
     <button className="white heading" onClick={onClick}>JOIN OUR MAILING LIST</button>
      </>
    );
}

CutoutText.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CutoutText