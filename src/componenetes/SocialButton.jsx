import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialButton = (props) => {
    return (
        <>
            <div>
                <a href="https://github.com/AnaSelomit?tab=repositories" target="blank">
                    {" "}
                    <FontAwesomeIcon className="icons" icon={props.icon} />
                </a>
                <a href="https://github.com/AnaSelomit?tab=repositories" target="blank">
                    <FontAwesomeIcon className="icons" icon={props.icon2} />
                </a>
                <a href="https://github.com/AnaSelomit?tab=repositories" target="blank">
                    {" "}
                    <FontAwesomeIcon className="icons" icon={props.icon3} />{" "}
                </a>
            </div>
        </>
    );
};

export default socialButton;
