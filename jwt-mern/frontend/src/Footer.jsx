import "./Footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="footer">
            <p>
                © {currentYear} Food Ordering App |
                Built with React, Express, MongoDB & JWT Authentication
            </p>
        </footer>

    );

}

export default Footer;
