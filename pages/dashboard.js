import { useSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // When the user is unauthenticated we push them to signin page
      signIn("github", { callbackUrl: "http://localhost:3000/dashboard" });
    },
  }); // contains user object and authenticated

  if (status === "loading") {
    return <h1>Page Loading.....</h1>;
  }
  return <div>{session.user.name} Dashboard</div>;
}; // Next Ui Component

export default Dashboard;
