import React from 'react'
import { Formik,Form,Field,ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from 'yup'

function YouTubeForm() {

  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid format').required('Required'),
    channel: Yup.string().required('Required'),
    address: Yup.string().required('Required')
  })

  const ops=([
   { key: 'option1' ,value:'Male'},
   { key: 'option2' ,value:'Female'}
  ])

  const initialValues={
    name: '',
    email:'',
    channel:'',
    comments:'',
    address:''
}

const onSubmit=(values)=>{
  console.log("Formik Values",values)
}


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <label htmlFor='name'>Name</label>
            <Field type="text" id="name" name='name'/>
            <ErrorMessage name='name'/>
          </div>
          <div className="form-control">
            <label htmlFor='email'>E-mail</label>
            <Field type="email" id="email" name='email'/>
            <ErrorMessage name='email'/>
          </div>
          <div className="form-control">
            <label htmlFor='channel'>Channel</label>
            <Field type="text" id="channel" name='channel'/>
            <ErrorMessage name='channel'/>
          </div>
          <div className="form-control">
            <label htmlFor='address'>Address</label>
            <Field name='address'>
              {
                ({form,meta,field})=>{
                    console.log("Render Props :",meta.error)
                    return (
                    <div>
                      <input type='text' id='address' {...field}></input>
                      {meta.error && meta.touched ? <div>{meta.error} </div>:null}
                    </div>)

                }
              }
              </Field>
          </div>
          <div className="form-control">
            <label htmlFor='gender'>
            <Field type='radio' name='gender' value='Male'/>
            Male</label>
          </div>
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YouTubeForm