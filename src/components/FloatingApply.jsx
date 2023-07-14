import React from 'react'
import Apply from './Apply'

const FloatingApply = (prop) => {
    const visible=prop.visible
  return (
    <>
      <div
      className={`hidden md:block transition-all fixed bg-slate-200 p-4 left-0 right-0 bottom-0 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Apply
        className="flex justify-between items-center max-w-6xl mx-auto"
        labelClassName="mt-0 text-base"
      />
    </div>
    <button className="fixed bottom-4 left-4 right-4 md:hidden  z-20 bg-yellow-200 rounded-lg px-4 py-4 md:py-2">
      Apply Now
    </button>
  </>
  )
}

export default FloatingApply
