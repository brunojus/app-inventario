// import {urls} from "../../utils/urlUtils";
import {urls} from "../../utils/urlaux";
import {Button, Typography} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

export const Welcome = () => {
    return (
        <React.Fragment>

            <Typography variant="headline" component="h2">Welcome</Typography>
            {
                Object.values(urls).map((url, index) => {

                    return <Button  key={index} component={props => <Link to={url.path} {...props}/>}>
                        {url.name}
                    </Button>
                })
            }
        </React.Fragment>
    )
};