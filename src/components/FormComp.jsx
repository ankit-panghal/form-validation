import React from 'react'
import { formContext } from '../context/FormContext'

const patterns = {
    name: /^[a-z]{5,}$/,
    email: /^([a-z\d\.-])+@([a-z\d-])+\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/
}
const FormComp = () => {
    const {name, email, password, dispatch} = React.useContext(formContext)
    const[result,setResult] = React.useState({status : 400, name : '', email : '', password : '',message : ''})

    function handleSubmission(e) {
        e.preventDefault()
        if(!name || !email || !password) {
            setResult({status: 400, message: 'Please fill all the fields'})
            return;
        }
        else setResult({status: 200, message: 'Form submitted successfully'})
    }

    function handleChange(e) {
        setResult(prev => ({...prev, message: ''}))

        dispatch({type: `SET_${(e.target.name).toUpperCase()}`, payload: e.target.value})
        if(!patterns[e.target.name].test(e.target.value)) {
            setResult(prev => ({...prev, [e.target.name]: `*Please enter a valid ${e.target.name}`}))
        }
        else {
          setResult(prev => ({...prev, [e.target.name]: ''}))
        }
    }

  return (
    <>
    <form className='flex flex-col mt-12 w-2/4 gap-4' onSubmit={handleSubmission}>
        <h2 className='text-2xl font-bold text-center dark:text-white'>Form</h2>
        <input className='border-2 rounded-md px-4 py-2 dark:text-white dark:border-white ' name='name' type="text" placeholder="Name" onChange={handleChange} />
       {result.name && <p className='text-red-600 text-xs mt-[-10px]'>{result.name}</p>}
        <input className='border-2 rounded-md px-4 py-2 dark:text-white dark:border-white ' name='email' type="email" placeholder="Email" onChange={handleChange}  />
        {result.email && <p className='text-red-600 text-xs mt-[-10px]'>{result.email}</p>}
        <input className='border-2 rounded-md px-4 py-2 dark:text-white dark:border-white ' name='password' type="password" placeholder="Password" onChange={handleChange}  />
        {result.password && <p className='text-red-600 text-xs mt-[-10px]'>{result.password}</p>}
        <button className='bg-zinc-800 text-white py-2 dark:text-black dark:bg-white rounded-md cursor-pointer' type="submit">Submit</button>
      { result.message && <p className={`text-center font-semibold ${result.status === 200 ?' text-green-600' : 'text-red-600'}`}>{result.message}</p>}
    </form>
    </>
  )
}

export default React.memo(FormComp)