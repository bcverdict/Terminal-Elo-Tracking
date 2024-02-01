import {Button, Input} from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {

    return(
        <form className="inputButtonPair" onSubmit={props.submitHandler}>
            <Input className="input" placeholder={props.placeholder} value={props.inputValue === 0 ? '' : props.inputValue } onChange={(e)=>{props.setInputValue(e.target.value)}}/>
            <Button className="button" color="primary" type="submit"><SearchIcon/></Button>
        </form>
    );
}