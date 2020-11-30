import React from 'react';
import {Button} from './styles'

const SubmitButton = ({disabled,title}) => {
    return (
      <Button disabled={disabled} type='submit'>
        {title}
      </Button>
    );
}
 
export default SubmitButton;