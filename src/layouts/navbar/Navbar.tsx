import { FC } from 'react'
// styles
import "./index.scss";

const Navbar: FC = () => {
    return (
        <div
            id="nav505152327"
            className="t456 t456__positionfixed tmenu-mobile__menucontent_hidden tmenu-mobile__menucontent_fixed"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                height: 70,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px"
            }}
            data-bgcolor-hex="#ffffff"
            data-bgcolor-rgba="rgba(255,255,255,0.95)"
            data-navmarker="nav505152327marker"
            data-appearoffset=""
            data-bgopacity-two={90}
            data-menushadow={10}
            data-bgopacity="0.95"
            data-bgcolor-rgba-afterscroll="rgba(255,255,255,0.90)"
            data-menu-items-align="right"
            data-menu="yes"
        >
            <div className="t456__maincontainer " style={{ height: 70 }}>
                <div className="t456__leftwrapper" style={{ minWidth: 35, width: 35 }}>
                    {" "}
                    <div className="t456__logowrapper" style={{ display: "block" }}>
                        <a href="https://icorp.uz/" style={{ color: "#ffffff" }}>
                            <img
                                className="t456__imglogo t456__imglogomobile"
                                src="https://static.tildacdn.com/tild6563-6136-4664-b130-356139343365/Union.svg"

                                style={{ maxWidth: 35, width: 35 }}
                                alt="iCORP"
                            />
                        </a>
                    </div>
                </div>
                <nav
                    className="t456__rightwrapper t456__menualign_right"
                    aria-label="Основные разделы на странице"
                    style={{}}
                >
                    <ul
                        className="t456__list"
                        role="menubar"
                        aria-label="Основные разделы на странице"
                    >
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px 0 0" }}
                        >
                            <a
                                className="t-menu__link-item t-active"
                                href="/"
                                role="menuitem"
                                tabIndex={0}
                                data-menu-submenu-hook=""
                                data-menu-item-number={1}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                            >
                                Главная
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item t-menusub__target-link"
                                href=""
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={-1}
                                data-menu-submenu-hook="link_sub2_505152327"
                                data-menu-item-number={2}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                data-tooltip-menu-id={505152327}
                            >
                                Услуги
                                <div className="t-menusub__arrow" />
                            </a>
                            <div
                                className="t-menusub"
                                data-submenu-hook="link_sub2_505152327"
                                data-submenu-margin="15px"
                                data-add-submenu-arrow="on"
                            >
                                <div className="t-menusub__menu">
                                    <div className="t-menusub__content">
                                        <ul className="t-menusub__list" role="menu" aria-label="">
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/amo"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    {" "}
                                                    Внедрение amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/soprovojdenie-amocrm"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Сопровождение amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="/qualitycontrol"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Контроль качества amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/platrum"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Внедрение Platrum
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/sklad"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    {" "}
                                                    Внедрение Мой Склад
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/onlinepbx"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Подключение OnlinePBX
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/sipuni"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Подключение Sipuni
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/roistat"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Внедрение Roistat
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/web"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={2}
                                                >
                                                    Разработка сайтов
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item t-menusub__target-link"
                                href=""
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={-1}
                                data-menu-submenu-hook="link_sub3_505152327"
                                data-menu-item-number={3}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                data-tooltip-menu-id={505152327}
                            >
                                Лицензии
                                <div className="t-menusub__arrow" />
                            </a>
                            <div
                                className="t-menusub"
                                data-submenu-hook="link_sub3_505152327"
                                data-submenu-margin="15px"
                                data-add-submenu-arrow="on"
                            >
                                <div className="t-menusub__menu">
                                    <div className="t-menusub__content">
                                        <ul className="t-menusub__list" role="menu" aria-label="">
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/tariffs"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={3}
                                                >
                                                    Лицензии «amoCRM»
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/tarifsklad"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={3}
                                                >
                                                    Лицензии «МойСклад»
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item"
                                href="https://icorp.uz/#rec504703456"
                                role="menuitem"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={4}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                            >
                                О нас{" "}
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item t-menusub__target-link"
                                href=""
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={-1}
                                data-menu-submenu-hook="link_sub5_505152327"
                                data-menu-item-number={5}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                data-tooltip-menu-id={505152327}
                            >
                                Кейсы
                                <div className="t-menusub__arrow" />
                            </a>
                            <div
                                className="t-menusub"
                                data-submenu-hook="link_sub5_505152327"
                                data-submenu-margin="15px"
                                data-add-submenu-arrow="on"
                            >
                                <div className="t-menusub__menu">
                                    <div className="t-menusub__content">
                                        <ul className="t-menusub__list" role="menu" aria-label="">
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/amo#rec519439803"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={5}
                                                >
                                                    Кейсы внедрения amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/soprovojdenie-amocrm#rec557349630"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={5}
                                                >
                                                    Кейсы сопровождения amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/qualitycontrol#rec557419443"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={5}
                                                >
                                                    Кейсы контроля качества amoCRM
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/sklad#rec509175653"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={5}
                                                >
                                                    Кейсы внедрения МойСклад
                                                </a>
                                            </li>
                                            <li
                                                className="t-menusub__list-item t-name t-name_xs"
                                                role="none"
                                                tabIndex={-1}
                                            >
                                                <a
                                                    className="t-menusub__link-item t-name t-name_xs"
                                                    role="menuitem"
                                                    href="https://icorp.uz/onlinepbx#rec557321209"
                                                    style={{
                                                        color: "#6b6b6b",
                                                        fontSize: 14,
                                                        fontWeight: 300
                                                    }}
                                                    data-menu-item-number={5}
                                                >
                                                    Кейсы внедрение OnlinePBX
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item"
                                href="https://icorp.uz/#rec504722977"
                                role="menuitem"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={6}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                            >
                                Клиенты
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item t966__tm-link"
                                href="#submenu:widgets"
                                role="menuitem"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={7}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                data-tooltip-menu-id={545390604}
                            >
                                Виджеты
                                <div className="t966__arrow" />
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item"
                                href="tel:+998781132636"
                                role="menuitem"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={8}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                            >
                                +(998) 78 113 26 36
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 15px" }}
                        >
                            <a
                                className="t-menu__link-item"
                                href="#popup:myform"
                                role="button"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={9}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                aria-haspopup="dialog"
                            >
                                Оставить заявку
                            </a>
                        </li>
                        <li
                            className="t456__list_item"
                            role="none"
                            style={{ padding: "0 0 0 15px" }}
                        >
                            <a
                                className="t-menu__link-item t794__tm-link"
                                href="#submenu:more"
                                role="menuitem"
                                tabIndex={-1}
                                data-menu-submenu-hook=""
                                data-menu-item-number={10}
                                style={{
                                    color: "#333333",
                                    fontSize: 17,
                                    fontWeight: 300,
                                    fontFamily: '"IgraSans"'
                                }}
                                data-tooltip-menu-id={508510750}
                            >
                                РУ
                                <div className="t794__arrow" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar