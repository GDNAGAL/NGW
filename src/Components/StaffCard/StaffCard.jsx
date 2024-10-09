import React from 'react'

const StaffCard = ({staffImage, staffName, staffDesignation}) => {
  return (
    <div className="text-center p-2">
        <img src={staffImage} className="rounded-pill bg-info pt-3" alt="" width="120px" height="120px" />
        <strong className="d-block mt-3" style={{width:"120px"}}>{staffName}</strong>
        <span>{staffDesignation}</span>
    </div>
  )
}

export default StaffCard