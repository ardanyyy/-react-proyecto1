

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded-md p-3'>
            <p>{mensaje}</p>
    </div>
  )
}

export default Error