import React, { useEffect } from 'react';
import ProfileLayout from '../../components/profileLayout';

import styles from '../../styles/Profile.module.css';
import {
  FaTimes,
  FaClock,
  FaAward,
  FaStar,
  FaDollarSign,
  FaSynagogue,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTrashAlt,
} from 'react-icons/fa';

import Image from 'next/image';
import ProfilePhoto from '../../public/Profile_photo.jpg';
import Flag from '../../public/gs.svg';

const Profile = () => {
  const date = new Date();
  return (
    <ProfileLayout>
      <div className={styles.message__container}>
        <p>
          <span className={styles.alert__text}>Congratulation</span>, you have
          successfully created your account
        </p>
        <FaTimes className={styles.alert__icon} />
      </div>
      <div className={styles.page}>
        <section className={styles.about__container}>
          <div className={styles.about__wrapper}>
            <div className={styles.image__box}>
              <div className={styles.image__container}>
                <Image
                  className={styles.profile__image}
                  layout="fill"
                  objectFit="cover"
                  src={ProfilePhoto}
                />
              </div>
              <div className={styles.flag__container}>
                <div className={styles.flag_box}>
                  <Image
                    className={styles.flag__image}
                    layout="fill"
                    objectFit="cover"
                    src={Flag}
                  />
                </div>
                <p className={styles.sub__text}>Manhattan, USA</p>
              </div>
              <div className={styles.time__container}>
                <FaClock className={styles.simple__icon} />
                <p className={styles.sub__text}>
                  It's currently {date.getHours()}:{date.getMinutes()} AM here
                </p>
              </div>
              <div className={styles.date__container}>
                <FaAward className={styles.simple__icon} />
                <p className={styles.sub__text}>Joined September 1, 2013</p>
              </div>
            </div>
            <div className={styles.content__box}>
              <div className={styles.title__box}>
                <h1>Adam Smith</h1>
                <button>Edit Profile</button>
              </div>
              <h3>User Experience Designer, Graphic Designer</h3>
              <div className={styles.info__container}>
                <div className={styles.info__left}>
                  <div className={styles.star__container}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className={styles.secondary__text}>4/5 (12 reviews)</p>
                </div>
                <div className={styles.border}></div>
                <div className={styles.info__center}>
                  <FaDollarSign className={styles.secondary__icon} />
                  <div>
                    <p className={styles.secondary__title}>50USD/Hr</p>
                    <p className={styles.sub__text}>Total earnings-10k USD</p>
                  </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.info__right}>
                  <FaSynagogue className={styles.secondary__icon} />
                  <p className={styles.secondary__title}>
                    24 projects completed
                  </p>
                </div>
              </div>
              <p className={styles.main__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                minima aliquam ut ad obcaecati cupiditate corporis repudiandae,
                placeat quibusdam laboriosam quaerat ea. Voluptate, tenetur.
                Quia, eveniet a, soluta pariatur obcaecati alias ipsum beatae
                reiciendis excepturi enim esse expedita nobis, quos facilis
                repellendus earum eius recusandae. Quam ab, libero eos minus
                officiis, tempore cum illo odit, ex unde optio nesciunt vero
                veritatis? Enim asperiores itaque cumque excepturi iure illo
                dolor inventore debitis voluptatem ullam veritatis laudantium
                molestias incidunt vero animi rem soluta amet, eum ipsam nihil
                et, modi ipsum laboriosam est? Pariatur repellendus aliquam
                doloribus aperiam exercitationem ducimus adipisci, corrupti
                quibusdam.
                <span className={styles.warning__text}>See more..</span>
              </p>
            </div>
          </div>
          <div className={styles.verification__wrapper}>
            <h3>Verification</h3>
            <div className={styles.verification__list}>
              <div className={styles.verification__item}>
                <div className={styles.item__wrapper}>
                  <FaUser className={styles.simple__icon} />
                  <p className={styles.primary__text}>Identity Verified</p>
                </div>
                <button>verify</button>
              </div>
              <div className={styles.verification__item}>
                <div className={styles.item__wrapper}>
                  <FaDollarSign className={styles.simple__icon} />
                  <p className={styles.primary__text}>Payment Verified</p>
                </div>
                <button>verify</button>
              </div>
              <div className={styles.verification__item}>
                <div className={styles.item__wrapper}>
                  <FaPhoneAlt className={styles.simple__icon} />
                  <p className={styles.primary__text}>Phone Verified</p>
                </div>
                <button>verify</button>
              </div>
              <div className={styles.verification__item}>
                <div className={styles.item__wrapper}>
                  <FaEnvelope className={styles.simple__icon} />
                  <p className={styles.primary__text}>Email Verified</p>
                </div>
                <button>verify</button>
              </div>
              <div className={styles.verification__item}>
                <div className={styles.item__wrapper}>
                  <FaFacebook className={styles.simple__icon} />
                  <p className={styles.primary__text}>Facebook Verified</p>
                </div>
                <button>verify</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.portfolio}>
          <div className={styles.portfolio__container}>
            <div className={styles.portfolio__title__box}>
              <h3>My Portfolio</h3>
              <div className={styles.button__container}>
                <FaTrashAlt className={styles.simple__icon} />
                <button>Edit Portfolio</button>
              </div>
            </div>
            <div className={styles.portfolio__list}>
              <div className={styles.portfolio__item}>
                <div className={styles.portfolio__image__box}>
                  <Image src={} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
