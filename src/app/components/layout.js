import Navbar from './Navbar';

const Layout = (props) => (
    <div>
    <head>
        <title>My first NextJS project</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
    </head>

        <Navbar />
        {props.children}
    </div>
);
export default Layout;