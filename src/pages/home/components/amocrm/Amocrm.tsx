import { FC } from 'react'

const Amocrm: FC = () => {
    return (
        <section
            id='amocrm'
            className="service-benefits wow fadeIn"
            data-wow-delay=".2s"
            data-wow-duration=".4s"
            style={{ marginTop: "4.16667vw" }}
        >
            <h2 className="service-advantages_heading">
                amoCRM решает <br />{" "}
                <span className="golden">следующие проблемы</span>
            </h2>
            <p className="service-intro_description">
                amoCRM - идеальное решение для бизнеса, стремящегося к эффективному управлению взаимоотношениями с клиентами. Он предлагает полный набор функций, адаптированных для оптимизации процессов продаж, маркетинга и обслуживания клиентов. С помощью amoCRM компании могут эффективно управлять потенциальными клиентами, отслеживать взаимодействия и автоматизировать рабочие процессы, что приводит к повышению эффективности и увеличению конверсии.
            </p>
            <p className="service-intro_description">
                Вторая проблема, которую amoCRM с большим успехом устраняет, связана с наладкой коммуникаций как между менеджерами и клиентами, так и между сотрудниками. Взаимодействие участников amoCRM становится гораздо эффективнее благодаря использованию современных технологий, таких как:
            </p>
            <ul className="menu-list advantage-list list-row">
                <li className="advantage-list_item advantage-list_item-row ">
                    Хранение в одном месте: Данные централизованно.
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    Интеграция каналов: Почта, телефония, чаты.
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    История взаимодействий: Запись и хранение.
                </li>
                <li className="advantage-list_item advantage-list_item-row ">
                    Автоматизация процессов: Уведомления, задачи, отчеты.
                </li>
            </ul>
            <p
                className="service-intro_description"
                style={{ marginBottom: "4.16667vw" }}
            >
                И, конечно, в определенных ситуациях невозможно подключить обычную аналоговую связь. В таких случаях IP-телефония в amoCRM станет идеальной альтернативой, решающей все задачи телефонной связи.
            </p>
        </section>
    )
}

export default Amocrm