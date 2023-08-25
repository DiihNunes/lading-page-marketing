import React from "react";

import "./app.css"

import Nav from "./components/nav";
import Main from "./components/main";
import Form from "./components/form";

export default (props) => {
    return (
        <div>
            <Nav />
            <Main />
            <Form />
        </div>
    )
}