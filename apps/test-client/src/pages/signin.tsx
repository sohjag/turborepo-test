import { Signup } from "ui";

export default function SignInPage() {
  return (
    <div>
      <Signup
        onClick={(email, password) => {
          alert(email);
          alert(process.env.TEST);
        }}
      />
    </div>
  );
}
