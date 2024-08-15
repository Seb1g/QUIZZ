import { GenerateLink } from "../../Processes/GenerateLink";
import { Link } from "react-router-dom";

export const GenerateLinkButton = () => {
  const generateLink = GenerateLink();
  return (
    <div className='generateButton'>
      <button onClick={generateLink}>
        <Link to="/question" >Let's begin</Link>
      </button>
    </div>
  );
};