import { motion, MotionConfig, Transition } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import styles from '../styles/Details.module.css'
const Details: NextPage = () => {
	const [isLeaving, setIsleaving] = useState(false);

	return (
	
	<div id={styles.container} className={`${isLeaving ? styles.containerLeave : styles.containerEnter}`}>
		<button id={styles.backBtn} onClick={() => {
			setIsleaving(true)
			setTimeout(() => {
				router.replace('/')
			}, 300)
		}}>
		&#10008;
		</button>
		<div id={styles.tourInfo} className={`${isLeaving ? styles.tourInfoLeave : undefined}`}>
			<div id={styles.tourInfoSubHeader}>
				The Rolling Stones<br/>
				Europe 2022 Tour
			</div>
			<ul id={styles.tourList}>
			<li>3rd American Express Presents BST Hyde Park LONDON, UK</li>
			<li>7th Johan Cruijff ArenA AMSTERDAM, NETHERLANDS</li>
			<li>11th King Baudouin Stadium BRUSSELS, BELGIUM</li>
			<li>5th Ernst Happel Stadium - VIENNA, AUSTRIA</li>
			<li>19th Groupama Stadium LYON, FRANCE</li>
			<li>23rd Hippodrome ParisLongchamp PARIS, FRANCE</li>
			<li>27th Veltins-Arena GELSENKIRCHEN, GERMANY</li>
			<li>31st Friends Arena STOCKHOLM, SWEDEN		</li>		
			</ul>				
		</div>
	</div>
	)
}

export default Details