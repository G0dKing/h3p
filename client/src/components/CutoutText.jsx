import { } from 'react'
import PropTypes from 'prop-types'
import '@style/CutoutText.css'

const CutoutText = ({ onClick }) => {
    return (
      <>
     <h2 className="white heading" onClick={onClick}>JOIN OUR MAILING LIST</h2>
      </>
    );
}

CutoutText.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CutoutText