import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import RootLayout from "@/Layouts/RootLayout";
const Login = () => {
  return (
    <div className=" ">
      <div className="">
        <h3 className="font-bold text-lg text-center">Login With Github</h3>
        <AiFillGithub
          className="text-5xl mx-auto my-5  hover:cursor-pointer"
          onClick={() => signIn("github")}
        />
      </div>
    </div>
  );
};

export default Login;
Login.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
