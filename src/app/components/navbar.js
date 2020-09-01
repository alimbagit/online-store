import Link from "next/link"
const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Main page</a></Link></li>
            <li><Link href="/catalog"><a>My Catalog</a></Link></li>
        </ul>
    </div>
);
export default Navbar;