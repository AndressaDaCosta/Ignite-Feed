// componentes devem ser iniciados com letras maiúscula pra nao confundir com outros elementos ex: <header></header>  e  <Header />

import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
	return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )

}
