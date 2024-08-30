import { Button } from "@nextui-org/react";
import { GenerateLink } from "../../Features/GenerateLink";
import { Link } from "react-router-dom";

export const GenerateLinkButton = () => {
  return (
    <div className='generateButton'>
      <Button color="default" variant="bordered"
        onClick={GenerateLink()}>
        <Link to="/question" >Let's begin</Link>
      </Button>
    </div>
  );
};