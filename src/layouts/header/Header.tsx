import { FC } from 'react'
//  icons
import LOGO from "../../assets/icons/logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header: FC = () => {
    return (
        <header className="site-header">
            <nav className="header-menu">
                <h2 className="visually-hidden">Основное меню сайта</h2>
                <a className="logo" href="/" aria-label="Ссылка на главную страницу">
                    <img src={LOGO} alt="itkey logo" />
                </a>
                <ul className="service-menu menu-list">
                    {/* <li className="menu-item">
                        <a className="menu-item_link" href="/outsource.html">
                            amoCRM
                        </a>
                    </li> */}
                    <li className="menu-item">
                        <AnchorLink className="menu-item_link" href="#amocrm">
                            amoCRM
                        </AnchorLink>
                    </li>
                    {/* <li className="menu-item">
                        <AnchorLink className="menu-item_link" href="/">
                            CRM-системы
                        </AnchorLink>
                    </li> */}
                    <li className="menu-item">
                        <AnchorLink className="menu-item_link" href="#iptelephony">
                            ip-телефония
                        </AnchorLink>
                    </li>
                    <li className="menu-item">
                        <AnchorLink className="menu-item_link" href="#site-footer">
                            оставить заявку
                        </AnchorLink>
                    </li>
                    {/* <li className="menu-item">
                        <a className="menu-item_link" href="/service.html">
                            обслуживание оргтехники
                        </a>
                    </li> */}
                    {/* <li className="menu-item">
                        <a className="menu-item_link" href="/video.html">
                            видеонаблюдение
                        </a>
                    </li> */}
                </ul>
                <div className="contact-us">
                    <a
                        className="contact-us_tel contact-us_item service"
                        href="tel:+998996098639"
                    >
                        99 609 86 39
                    </a>
                    <a
                        className="contact-us_tel contact-us_item service"
                        href="tel:+998977773419"
                    >
                        97 777 34 19
                    </a>
                    <a
                        className="contact-us_tel contact-us_tel--mobile service"
                        href="tel:+998712021199"
                        aria-label="позвонить нам"
                    />
                </div>
                <button className="menu-trigger" type="button" aria-label="Открыть меню">
                    <span className="hamburger-inner" aria-hidden="true" />
                </button>
                <div className="main-menu_wrap">
                    <div className="menu-logo-wrap">
                        <a
                            className="logo-fixed"
                            href="/"
                            aria-label="Ссылка на главную страницу"
                            style={{ marginRight: "auto" }}
                        >
                            <svg
                                className="logo_img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={119}
                                height={79}
                                fill="#fff"
                            >
                                <use xlinkHref="/img/svg-icons.svg#sprite-logo" />
                            </svg>
                        </a>
                        <div className="contact-us">
                            <a
                                className="contact-us_tel contact-us_item service"
                                href="tel:+998712021199"
                            >
                                71 202 11 99
                            </a>
                            <a
                                className="contact-us_tel contact-us_item service"
                                href="tel:+998903703396"
                            >
                                90 370 33 96
                            </a>
                        </div>
                        <button
                            className="menu-trigger inner"
                            type="button"
                            aria-label="Открыть меню"
                        >
                            <span className="hamburger-inner" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="menu-wrap">
                        <ul className="main-menu menu-list">
                            <li className="menu-item">
                                <a className="menu-item_link" href="/about.html">
                                    О компании
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="#site-footer">
                                    Записаться на аудит
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/calc.html">
                                    Калькулятор стоимости
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/remote-assistance.html">
                                    Удаленная помощь
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="#site-footer">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                        <ul className="main-menu menu-list mobile-service-menu">
                            <li className="menu-item">
                                <a className="menu-item_link" href="/outsource.html">
                                    IT-аутсорсинг
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/network.html">
                                    сети
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/crm.html">
                                    CRM-системы
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/telephony.html">
                                    ip-телефония
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/service.html">
                                    обслуживание оргтехники
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item_link" href="/video.html">
                                    видеонаблюдение
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-social-wrap">
                        <a
                            className="footer-social"
                            href="https://www.facebook.com/alexTechnical"
                            aria-label="Ссылка на Facebook"
                            title="Наш Facebook"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg width={23} height={23} fill="white">
                                <use xlinkHref="/img/svg-icons.svg#sprite-facebook" />
                            </svg>
                        </a>
                        <a
                            className="footer-social"
                            href="https://www.instagram.com/alex_technical/"
                            aria-label="Ссылка на Instagram"
                            title="Наш Instagram"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg width={23} height={23} fill="white">
                                <use xlinkHref="/img/svg-icons.svg#sprite-icon" />
                            </svg>
                        </a>
                        <a
                            className="footer-social"
                            href="https://t.me/alextechnical"
                            aria-label="Ссылка на Telegram"
                            title="Наш Telegram"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg width={23} height={23} fill="white">
                                <use xlinkHref="/img/svg-icons.svg#sprite-telegram" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="transition-layer">
                    <div className="bg-layer" />
                </div>
            </nav>
            <a
                className="octopus-link"
                href="/remote-assistance.html"
                title="Удаленная помощь"
            >
                <span className="visually-hidden">
                    Ссылка на страницу Удаленная помощь
                </span>
                <svg width={23} height={23} fill="white">
                    <use xlinkHref="/img/svg-icons.svg#sprite-octopus-mini" />
                </svg>
            </a>
        </header>
    )
}

export default Header