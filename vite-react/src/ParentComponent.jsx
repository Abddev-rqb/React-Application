import { useState, useEffect } from 'react'
import MouseTracker from './MouseTracker'

function ParentTracker() {
  const [showComponent, setShowComponent] = useState(true);
  const toggleCompenent = () => {
    setShowComponent((prev) => !prev);
  };
  return (
    <div>
      <button onClick={toggleCompenent}>
          {showComponent ? 'Unmount Tracker':'Mount Tracker'}
      </button>
      {showComponent && <MouseTracker />}
    </div>
  )
}

export default ParentTracker
