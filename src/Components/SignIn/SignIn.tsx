import { SignInForm } from './SignInForm'
import { FormTextHeader } from "../Global";

export const SignIn = () => {
  return <div>
    			<FormTextHeader
				header="create account"
				paragraph="Use your personal information"
    />
    <SignInForm/>
  </div>
}