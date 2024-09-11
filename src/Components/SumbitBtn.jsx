import { useNavigation } from 'react-router-dom'
import React from 'react'

const SumbitBtn = ({ text }) => {
     const navigation = useNavigation();
     const isSubmitting = navigation.state === 'sumbitting';
  return (
    <button
    type='sumbit' 
    className='btn btn-primary btn-block'
    disabled={isSubmitting}
    >
        {isSubmitting ? (
            <>
            <span className='loading loading-spinner'></span>
            sending...
            </>
        ) : (
            text || 'sumbit'
        )}  
    </button>
  )
}

export default SumbitBtn
