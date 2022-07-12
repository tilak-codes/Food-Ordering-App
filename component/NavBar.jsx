import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from "next/Link";

const NavBar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/telephone.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>2422-2659</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <figure>
          <Image src="/image/pic1.png" alt="" width="160px" height="69px"/>
          <figcaption><b>PizzaWorld</b></figcaption>
          </figure>
          
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/Cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/image/cart.png" alt='' width="30px" height="30px"/>
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default NavBar

