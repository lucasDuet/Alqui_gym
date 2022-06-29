import React from 'react'
import { useForm } from 'react-hook-form'

const FormBasic = () => {
  const { register, handleSubmit } = useForm() 
  const customSubmit = (data) => {
      console.log(data)
  }
  return (
    <>
        <h2>Login</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control'>
                <label>Numero de telefono</label>
                <input type="number" {...register('tell')} />
            </div>
            <div className='form-control'>
                <label>Provincia</label>
                <input type="text" {...register('provincia')} />
            </div>
            <div className='textotarea'>
               <label>Actividad que se quiere hacen en el Sum:
                <textarea value={this.state.value} onChange={this.handleSubmit}></textarea>
                </label>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </>
  )
}

export default FormBasic