import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { FormControl, Loading } from '@/components'
import { queries, mutations, useAuth } from '@/hooks'

const Settings = () => {
  const { logout } = useAuth()

  const { data, isLoading } = queries.User.useUser()

  const { mutate, isLoading: updateIsLoading } = mutations.User.useUserUpdate()

  // update settings
  const initialVales = {
    image: data && data?.user?.image !== null ? data?.user?.image : '',
    username: data && data?.user?.username !== null ? data?.user?.username : '',
    bio: data && data?.user?.bio !== null ? data?.user?.bio : '',
    email: data && data?.user?.email !== null ? data?.user?.email : '',
    password: ''
  }

  const validationSchema = Yup.object({
    image: Yup.string(),
    username: Yup.string().required('username is required'),
    bio: Yup.string(),
    email: Yup.string().email('Please enter the correct email format').required('email is required'),
    password: Yup.string().min(6, 'Password requires at least 6 characters')
  })

  const handleSubmit = values => {
    const user = { ...values }
    mutate(user, {
      onSuccess: () => {
        toast.success('Settings updated success, please login again ~')
        logout()
      }
    })
  }

  if (isLoading) return <Loading />

  return (
    <div className='container py-6'>
      <div className='flex flex-col gap-6 w-[60vw] mx-auto'>
        <h2 className='flex flex-col items-start gap-4'>
          <span className='text-xl text-gray-800'>Your Settings</span>
          <span className='text-sm text-gray-400'>
            After changing user settings, you need to log in again for the changes to take effect
          </span>
        </h2>
        <Formik initialValues={initialVales} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {formik => (
            <Form className='flex flex-col gap-4'>
              <FormControl control='input' label='Avatar image url' name='image' placeholder='Url of profile picture' />
              <FormControl control='input' label='Username' name='username' placeholder='Username' />
              <FormControl control='textarea' label='Bio' name='bio' placeholder='Short bio about your' />
              <FormControl control='input' label='Email' name='email' placeholder='Email' />
              <FormControl
                control='input'
                type='password'
                label='Password'
                name='password'
                placeholder='New password'
              />
              <div className='flex justify-end items-center'>
                <FormControl control='button' text='Update settings' disabled={updateIsLoading} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Settings
