import React from 'react'

import Button from "elements/Button";
import LogoGypsophila from "assets/images/gypsophila.png";

export default function IconTextWhite() {
    return (
        <Button href="" type="link">
            <img
                src={LogoGypsophila}
                className="img-fluid"
                alt="Gypsophila"
                style={{ height:45 }}
            />
        </Button>
    )
}
