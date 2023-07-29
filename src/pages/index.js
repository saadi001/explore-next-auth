import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const {data: session} = useSession()
  const [user, ] = useAuthState(auth);
  return (
    
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {user ? <h4 style={{ textAlign: "center" }}>Welcome {user?.email}</h4>: ""}
    </div>
  );
};

export default HomePage;
