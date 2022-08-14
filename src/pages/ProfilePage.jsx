import { MyAccount } from "../components/MyAccounts/MyAccount";


function ProfilePage() {
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <MyAccount />
      </div>
    </>
  );
}
export default ProfilePage;
