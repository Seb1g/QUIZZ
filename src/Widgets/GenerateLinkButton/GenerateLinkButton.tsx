import { GenerateLink } from "../../Processes/GenerateLink";
import { Link } from "react-router-dom";

export const GenerateLinkButton = () => {
  return (
    <div className='generateButton'>
      <button onClick={GenerateLink()}>
        <Link to="/question" >Let's begin</Link>
      </button>
    </div>
  );
};