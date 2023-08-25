import React from "react";

import "./form.css";

export default () => {
    return(
        <div>
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha"/>
            <input type="submit" value="Enviar >" className="btn-submit"/>
        </form>
        </div>
    )
}