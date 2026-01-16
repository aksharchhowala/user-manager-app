import Button from "../components/Button";
import axios from "../lib/axios-setup.js";

export default function Dashboard() {
  // const callProtected = async () => {
  //   try {
  //     const res = await axios.get("/users/me");
  //     alert("API OK: " + JSON.stringify(res.data));
  //   } catch (err) {
  //     alert("API error: " + (err.message || "Unknown"));
  //   }
  // };
  // return (
  //   <>
  //     <div className="min-h-screen grid place-items-center p-6">
  //       <div className="w-full max-w-xl rounded-xl">
  //         <h1>Dashboard</h1>
  //         <p>You're signed in. Try the protected API call:</p>
  //         <Button onClick={callProtected}>Call /api/users/me</Button>
  //       </div>
  //     </div>
  //   </>
  // );

  return <>This worked</>;
}
