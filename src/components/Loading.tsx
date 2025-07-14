import React from 'react'
import { FadeLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className='flex justify-center items-center text-3xl mt-20'>
      <FadeLoader/>
    </div>
  );
}

export default Loading
