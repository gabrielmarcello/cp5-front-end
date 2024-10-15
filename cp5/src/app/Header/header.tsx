import Link from "next/link";

const Header = () =>{
    return (
        <>
        <header>
            <h1>PetShop Cão Lindão</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Servicos">Servicos</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;