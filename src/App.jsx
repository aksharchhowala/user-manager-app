import "./App.css";
import CustTextAreaBox from "./components/CustTextAreaBox";
import CustTextBox from "./components/CustTextBox";

function App() {
  return (
    <>
      <form className="flex w-fit m-4 flex-col bg-gray-700 p-4 ">
        <div className="w-2xl">
          <CustTextBox
            label={"Name:"}
            id={"username"}
            name={"name"}
            testId={"user-name"}
            isRequired={false}
            maxlength={15}
          />
        </div>
        <div className="w-2xl ">
          <CustTextBox
            label={"Email:"}
            id={"email"}
            name={"email"}
            testId={"email-address"}
            isRequired={false}
            maxlength={15}
          />
        </div>
        <div className="w-2xl ">
          <CustTextBox
            label={"Phone:"}
            id={"phone"}
            name={"phone"}
            testId={"phone-number"}
            isRequired={false}
            maxlength={15}
          />
          <CustTextAreaBox
            label={"Address:"}
            id={"address"}
            name={"address"}
            testId={"full-address"}
            isRequired={false}
            maxlength={225}
            rows={3}
          />
        </div>
      </form>
    </>
  );
}

export default App;
