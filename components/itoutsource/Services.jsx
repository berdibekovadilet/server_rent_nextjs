import Title from "../Title";
import styles from "/styles/itoutsource/Services.module.scss";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.container} id="services">
      <div className={styles.wrapper}>
        <Title>Виды Услуг</Title>
        <div className={styles.row}>
          <div className={styles.card}>
            <h3 className={styles.title}>Настройка серверов Windows Server</h3>
            <p className={styles.desc}>
              Настройка серверов Windows Server 2008r2, 2012r2,2016,2019,2022
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Настройка контролёра домена</h3>
            <p className={styles.desc}>
              Настройка контролёра домена, ДНС, DHCP, GPO, FTP SERVER,
              ТЕРМИНАЛЬНЫЙ СЕРВЕР, ВЕБ СЕРВЕР, VPN SERVER и т.д.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Настройка сетевого оборудования</h3>
            <p className={styles.desc}>
              Cisco, HP, Dell, Avaya, Juniper, Huawei, Mikrorik, Kerio, Tp-link,
              D-link, Ubiquiti и т.д
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>
              Связь между офисами для работы в одной локальной сети
            </h3>
            <p className={styles.desc}>
              VPN SERVER PPTP, L2TP, OPEN VPN, IPSEC, DNS, DHCP, настройка
              маршрутизации, веб прокси, FTP, HOTSPOT, проброс портов, настройка
              firewall, балансировка каналов, бесшовный WI-FI, настройка Vlan
              виртуальных сетей, настройка нескольких провайдеров.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="/assets/webg/cctv.webp"
                alt="Cctv"
                width={300}
                height={215}
              />
            </div>
            <h3 className={styles.title}>Монтаж видеонаблюдения</h3>
            <p className={styles.desc}>
              Установка и монтаж видеонаблюдения Hikvision, Dahua, Axis ,
              Трассир , Линия.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="/assets/webg/windows.webp"
                alt="Windows"
                width={300}
                height={215}
              />
            </div>
            <h3 className={styles.title}>Установка лицензионного ПО</h3>
            <p className={styles.desc}>
              Установка всех версий OC Windows, Microsoft Office, Adobe
              Photoshop, Illustrator, AutoCAD, 3dsmax, MapInfo, Archicad,
              SketchUp, CorelDraw.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Офис под ключ</h3>
            <p className={styles.desc}>
              Монтаж локальной сети, установка видеонаблюдения, установка скуд,
              установка и закуп компьютеров, установка и закуп оргтехники,
              установка серверов АТС ( телефония), установка софта
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src="/assets/webg/1c.webp"
                alt="1c"
                width={300}
                height={215}
              />
            </div>
            <h3 className={styles.title}>Установка 1С</h3>
            <p className={styles.desc}>
              1С Предприятия, Бухгалтерия, Торговый комплекс, Розница.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Создание корпоративной почты </h3>
            <p className={styles.desc}>
              Создание корпоративной почты Регистрация доменов Перенос
              корпоративной почты
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Установка антивирусов</h3>
            <p className={styles.desc}>
              Касперский, Eset not 32, Avast,McAfee и т.д
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Резервное копирование</h3>
            <p className={styles.desc}>
              Настройка резервного копирования в облако и на локальные диски
              Veeam Backup, Acronis и т.д
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
