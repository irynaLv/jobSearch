import { Logo, FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("You have successfully registered!");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Something went wrong");
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name"></FormRow>
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
         
        ></FormRow>
        <FormRow type="text" name="location" ></FormRow>
        <FormRow
          type="text"
          name="email"
          
        ></FormRow>
        <FormRow type="text" name="password" ></FormRow>

        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
