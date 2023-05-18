import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import TagInput from './TagInput'
import Editor from './Editor'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'taginput':
      return <TagInput {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'button':
      return <Button {...rest} />
    case 'editor':
      return <Editor {...rest} />
    default:
      return null
  }
}

export default FormControl
