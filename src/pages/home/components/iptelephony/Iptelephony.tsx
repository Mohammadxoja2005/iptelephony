import { FC } from 'react'

const Iptelephony: FC = () => {
    return (
        <section
            id='iptelephony'
            className="service-benefits wow fadeIn"
            data-wow-delay=".2s"
            data-wow-duration=".4s"
            style={{ marginTop: "4.16667vw" }}
        >
            <h2 className="service-advantages_heading">
                IP-телефония решает <br />{" "}
                <span className="golden">следующие проблемы</span>
            </h2>
            <p className="service-intro_description">
                IP-телефония, в первую очередь необходима компаниям, которые ежедневно
                тратят огромные суммы на телефонную связь. К примеру, организациям с
                большим количеством филиалов в других городах или узбекским отделениям
                иностранных корпораций. Каждодневные звонки клиентам или сотрудникам в
                другие города могут стать дешевле в несколько раз.
            </p>
            <p className="service-intro_description">
                Вторая проблема, которую компания ITKEY с большим успехом
                устраняет с помощью подключения IP-телефонии, связана с наладкой
                коммуникаций как между менеджерами и клиентами, так и между
                сотрудниками. Взаимодействие участников IP телефонии становится
                гораздо эффективнее, если применять такие современные технологии, как:
            </p>
            {/* <ul className="menu-list advantage-list list-row"> */}
            <ul className="advantage-list list-row">

                <li className="advantage-list_item advantage-list_item-row ">
                    IVR интерактивное голосовое меню;
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    многоканальный номер;
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    аудиозапись разговоров;
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    переадресация звонков и многие другие.
                </li>
            </ul>
            {/* </ul> */}
            <p
                className="service-intro_description"
                style={{ marginBottom: "4.16667vw" }}
            >
                И конечно-же, в некоторых ситуациях по тем или иным причинам
                просто-напросто невозможно подключить обыденную аналоговую
                стационарную связь. В данной ситуации IP-телефония станет достойной
                альтернативой, которая решит весь спектр задач, связанных с телефонной
                связью.
            </p>
        </section>
    )
}

export default Iptelephony