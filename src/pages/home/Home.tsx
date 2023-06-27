import { FC } from 'react'
import "./index.scss"
// layouts
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
// components
import Benefit from './components/benefit/Benefit'
import Service from './components/service/Service'
import Iptelephony from './components/iptelephony/Iptelephony'
import Amocrm from './components/amocrm/Amocrm'
import Description from './components/description/Description'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home: FC = () => {
    return (
        <div className='paged'>
            <h1 className="visually-hidden">
                Услуги IP-Телефонии и AMOCRM от компании ITkey
            </h1>
            <Header />
            <main className="page-main">
                <nav className="fixed-menu">
                    <h2 className="visually-hidden">Дополнительное меню сайта</h2>
                    <a
                        className="logo-fixed"
                        href="/"
                        aria-label="Ссылка на главную страницу"
                    >
                        <svg
                            className="fixed-logo_img"
                            xmlns="http://www.w3.org/2000/svg"
                            width={39}
                            height={29}
                        >
                            <use xlinkHref="/img/svg-icons.svg#sprite-small-logo" />
                        </svg>
                    </a>
                    <ul className="service-menu menu-list">
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
                    <button className="menu-trigger" type="button" aria-label="Открыть меню">
                        <span className="hamburger-inner" aria-hidden="true" />
                    </button>
                </nav>
                <div className="content-wrap ">
                    <Benefit />
                    <Service />
                    <Iptelephony />
                    <Amocrm />
                    <Description />
                    <div
                        className="links-wrap wow fadeIn"
                        data-wow-delay=".2s"
                        data-wow-duration=".4s"
                    >
                        <AnchorLink href='#site-footer' style={{textDecoration: "none"}}>
                            <button className="btn-link m-30" data-target="form">
                                Оставить заявку
                            </button>
                        </AnchorLink>
                        {/* <a className="btn-link" href="/calc.html">
                            расcчитать стоимость
                        </a> */}
                    </div>
                </div>
                <div className="service-modal" id="modal">
                    <div className="modal-content">
                        <button className="modal-close">×</button>
                        <div className="servise-img" />
                        <div className="main-content" />
                    </div>
                </div>
            </main>
            <Footer />
            <a
                className="to-top fixed-icons"
                href="#"
                aria-label="Подняться наверх"
                title="Подняться наверх"
            />
            <a
                className="call-us fixed-icons service fixed"
                href="tel:+998712021199"
                aria-label="Позвонить нам"
                title="Свяжитесь с нами"
            >
                <svg
                    className="call-us-icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                    fill="#d29450"
                >
                    <use xlinkHref="/img/svg-icons.svg#sprite-phone" />
                </svg>
            </a>

        </div>
    )
}

export default Home