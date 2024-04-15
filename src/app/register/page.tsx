import RegisterForm from "@/components/registerForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
   <div>
    <RegisterForm></RegisterForm>
   </div>
  );
}
