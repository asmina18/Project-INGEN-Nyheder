import style from './Footer.module.scss'

export const Footer = () => {

    return (
        <footer className={style.footerContainer}>
            {/* /--------------------------------------------------------------------------/ */}
            <div className={style.adressStyle}>
                <ul>
                    <li>Adress:</li><br />
                    <li>Intet nyt - Godt nyt ApS</li><br />
                    <li>Tulipanvej 232</li>
                    <li>7320 <br />Valby Øster</li>
                </ul>
            </div>
            {/* /--------------------------------------------------------------------------/ */}
            <div className={style.linksStyle}>
                <ul>
                    <li>Links</li><br />
                    <li>vikanweb.dkl</li>
                    <li>overpådenandenside.dk</li>
                    <li>  retsinformation.dk</li>
                    <li> nogetmednews.dk </li>
                </ul>
            </div>
            {/* /--------------------------------------------------------------------------/ */}
            <div className={style.politkStyle}>
                <ul>
                    <li>Politik</li><br />
                    <li>Privatlivspolitik</li>
                    <li>Cookiepolitik</li>
                    <li>Købsinformation</li>
                    <li>Delingspolitik</li>
                </ul>
            </div>
            {/* /--------------------------------------------------------------------------/ */}
            <div className={style.kontaktStyle}>
                <ul>
                    <li>Kontakt</li><br />
                    <li><a href="#">ingen@nyhed.dk</a></li>
                    <li>telefon:23232323</li>
                    <li>fax:123123-333</li>
                </ul>
            </div>
        </footer >
    )

}
