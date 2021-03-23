import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
        <Link to={props.route}>
            <Button variant="contained" color="primary">
                {props.children}
            </Button>
        </Link>
  );
}

export default ButtonLink;