import Dash from "../components/templates/Dash";
import FormGeneralData from "../components/organism/FormGeneralData";

function GeneralData() {
    return (
      <>
        <Dash />
        <main className="dashboard">
          <div className="rounded-md mt-20 pl-8 pr-8">
           <FormGeneralData />
          </div>
        </main>
      </>
    );
}

export default GeneralData;