import { FC, useState } from 'react'
// axios
import axios from 'axios'

const Footer: FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (name == '' || phone == '') {
            alert("Заполните все поля")
        }

        axios.post("http://localhost:3004/create",
            {
                name: name,
                phone: phone,
                responsible_id: 9636770,
                deal_name: "IP-телефония"
            })
    }

    return (
        <footer className="site-footer" id="site-footer">
            <div className="footer-column left-side">
                <div className="left-side-wrap wow fadeInLeft" data-wow-duration=".4s">
                    <div className="sticky">
                        <h2 className="golden bold footer-heading">контакты</h2>
                        <div className="contacts-wrap">
                            <div className="contacts">
                                <a className="footer-contacts service" href="tel:+998996098639">
                                    (+998-99) 609 86 39
                                </a>
                                <a
                                    className="footer-contacts mail service"
                                    href="mailto:info@alextech.uz"
                                >
                                    itkeyuzb@gmail.com
                                </a>
                                <div className="social-wrap">
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
                            <div className="contacts">
                                <a className="footer-contacts service" href="tel:+998977773419">
                                    (+998-97) 777 34 19
                                </a>
                            </div>
                            <span className="footer-address">
                                г. Ташкент, Юнусабадский район, Массив Кашгар 12
                            </span>
                        </div>
                    </div>
                    <nav className="footer-menu">
                        <h2 className="visually-hidden">Меню сайта в футере</h2>
                        {/* <ul className="footer-main-menu flex-menu">
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/about.html">
                                    О компании
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="#site-footer">
                                    Записаться на аудит
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/calc.html">
                                    Калькулятор стоимости
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/remote-assistance.html">
                                    Удаленная помощь
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="#site-footer">
                                    Контакты
                                </a>
                            </li>
                        </ul> */}
                        <ul className="footer-service-menu flex-menu">
                            {/* <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    IT-аутсорсинг
                                </a>
                            </li> */}
                            {/* <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    сети
                                </a>
                            </li> */}
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    amoCRM
                                </a>
                            </li>
                            <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    ip-телефония
                                </a>
                            </li>
                            {/* <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    обслуживание оргтехники
                                </a>
                            </li> */}
                            {/* <li className="footer-menu-item">
                                <a className="footer-menu_link" href="/">
                                    видеонаблюдение
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    <span className="copywright">
                        «ITKEY», 2023. Все права защищены.
                    </span>
                </div>
            </div>
            <div
                className="footer-column right-side wow fadeIn"
                data-wow-duration=".4s"
            >
                <div className="form-wrap">
                    <span className="audit-heading">
                        Запишитесь на
                        <span className="golden bold"> бесплатный аудит прямо сейчас!</span>
                    </span>
                    <p className="footer-text">
                        Посмотрите на нас в деле, оставьте свой номер телефона – мы
                        обязательно вам перезвоним.
                    </p>
                    <form className="contact-form">
                        <label className="form-label" htmlFor="name">
                            Введите имя
                        </label>
                        <input
                            className="form-name form-input client-name"
                            id="name"
                            type="text"
                            minLength={4}
                            maxLength={86}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="off"
                            required={true}
                        />
                        {/* <label className="form-label" htmlFor="email">
                            Введите Email
                        </label>
                        <input
                            className="form-name form-input"
                            id="email"
                            type="email"
                            minLength={4}
                            maxLength={86}
                            name="email"
                            autoComplete="off"
                        /> */}
                        <label className="form-label" htmlFor="tel">
                            Введите телефон
                        </label>
                        <input
                            className="form-input form-tel client-tel"
                            id="tel"
                            type="tel"
                            name="tel"
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="off"
                            required={true}
                        />
                        {/* <div
                            className="g-recaptcha"
                            data-sitekey="6LeOfu0gAAAAAHrNsQrPoNR2A0H7Ljtvg0SwJ6Gm"
                        >
                            <div style={{ width: 304, height: 78 }}>
                                <div>
                                    <iframe
                                        title="reCAPTCHA"
                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeOfu0gAAAAAHrNsQrPoNR2A0H7Ljtvg0SwJ6Gm&co=aHR0cHM6Ly9hbGV4dGVjaC51ejo0NDM.&hl=en&v=IqA9DpBOUJevxkykws9RiIBs&size=normal&cb=v1kd3qgv6owl"
                                        width={304}
                                        height={78}
                                        role="presentation"
                                        name="a-5wb0v2ntuyo7"
                                        frameBorder={0}
                                        scrolling="no"
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                    />
                                </div>
                                <textarea
                                    id="g-recaptcha-response"
                                    name="g-recaptcha-response"
                                    className="g-recaptcha-response"
                                    style={{
                                        width: 250,
                                        height: 40,
                                        border: "1px solid rgb(193, 193, 193)",
                                        margin: "10px 25px",
                                        padding: 0,
                                        resize: "none",
                                        display: "none"
                                    }}
                                    defaultValue={""}
                                />
                            </div>
                            <iframe style={{ display: "none" }} />
                        </div> */}
                        <button onClick={onSubmit} className="btn-link form-submit">
                            Записаться на бесплатный аудит
                        </button>
                    </form>
                </div>
                {/* <ul className="company-branches">
                    <li className="branch">
                        <a
                            className="logo"
                            href="https://alex-llc.ru/"
                            aria-label="Ссылка на главную страницу Alex Group"
                            title="Alex Group"
                        >
                            <svg
                                className="branch_logo"
                                xmlns="http://www.w3.org/2000/svg"
                                width={119}
                                height={65}
                                fill="#fff"
                            >
                                <use xlinkHref="/img/svg-icons.svg#sprite-alex_group" />
                            </svg>
                        </a>
                    </li>
                    <li className="branch">
                        <a
                            className="logo"
                            href="https://alex-dma.ru/"
                            aria-label="Ссылка на главную страницу Alex Digital Marketing"
                            title="Alex Digital Marketing"
                        >
                            <svg
                                className="branch_logo"
                                xmlns="http://www.w3.org/2000/svg"
                                width={119}
                                height={65}
                                fill="#fff"
                            >
                                <use xlinkHref="/img/svg-icons.svg#sprite-alex_dm" />
                            </svg>
                        </a>
                    </li>
                    <li className="branch">
                        <a
                            className="logo"
                            href="https://alex-software.ru"
                            aria-label="Ссылка на главную страницу Alex Software"
                            title="Alex Software"
                        >
                            <svg
                                className="branch_logo"
                                xmlns="http://www.w3.org/2000/svg"
                                width={119}
                                height={65}
                                fill="#fff"
                            >
                                <use xlinkHref="/img/svg-icons.svg#sprite-alex_software" />
                            </svg>
                        </a>
                    </li>
                </ul> */}
            </div>
        </footer>
    )
}

export default Footer