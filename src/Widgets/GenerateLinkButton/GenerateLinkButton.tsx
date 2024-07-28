import { Link } from "react-router-dom";
import { GenerateLink } from "../../Processes/GenerateLink";

export const GenerateLinkButton = () => {
  const generateLink = GenerateLink();
  return (
    <div className='generateButton'>
      <button onClick={generateLink}>
        <Link to="/question" >Generate Link</Link>
      </button>
    </div>
  );
};