import React from 'react';

function ScaleImage(props) {
  return (
      <div>
        <div>Scale Image</div>
        <div>
          <input
            onChange={(e)=>{ if(props.set){ props.set(e.target.value) }}}
            type="range" min="1" max="10" step="1"/>
        </div>
      </div>
  );
}
export default ScaleImage;