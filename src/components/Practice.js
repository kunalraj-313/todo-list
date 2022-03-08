import React from 'react'
import { Formik,Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function Practice() {
    const initVals={
        name:'',
        rank:'',
        salary:'',
        gender:''
    }

    const ValSchema= Yup.object({
        name: Yup.string().required("Required"),
        rank: Yup.string().required("Required"),
        salary: Yup.string().required("Required")
    })

    const onSubmit=(values)=>{
        console.log("Form Values:",values)
    }

    const Options=[{key:'Male',value:'male'},{key:'Female',value:'female'}]

    
  return (
    <Formik initialValues={initVals} validationSchema={ValSchema} onSubmit={onSubmit}>
        <form>
            <div>
            <label>Name : </label>
            <Field type='text' name='name'/>
            <ErrorMessage name='name'/>
            </div>
            <div>
            <label>Rank : </label>
            <Field type='text' name='rank'/>
            <ErrorMessage name='rank'/>
            </div>
            <div>
            <label>Salary : </label>
            <Field type='text' name='salary'/>
            <ErrorMessage name='salary'/>
            </div>
            <div className='radio'>
            <Field name='gender' options={Options} >
            {
                (props)=>{
                    const {field} = props
                    return Options.map(option=>{
                    return (
                        <div key={option.key} className='radio-elements'>
                            <input type='radio' id={option.value} {...field} value={option.value} checked={field.value===option.value}/>
                            <label htmlFor={option.value}>{option.key}</label>
                        </div>
                    )
                    }
                    )
                }
            }
            </Field>

            </div>

        </form>
    </Formik>
  )
}

