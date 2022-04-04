import styles from './ball.module.scss';

export default function Ball() {
    return (
        <svg
            width='139px'
            height='139px'
            viewBox='0 0 139 139'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <title>Oval</title>
            <defs>
                <radialGradient
                    cx='32.8715153%'
                    cy='5.40411421%'
                    fx='32.8715153%'
                    fy='5.40411421%'
                    r='98.2352199%'
                    id='radialGradient-1'
                >
                    <stop className={styles.first} offset='0%'></stop>
                    <stop className={styles.secound} offset='100%'></stop>
                </radialGradient>
            </defs>
            <g
                id='Page-1'
                stroke='none'
                stroke-width='1'
                fill='none'
                fill-rule='evenodd'
            >
                <g
                    id='glassmo2'
                    transform='translate(-572.000000, -58.000000)'
                    fill='url(#radialGradient-1)'
                >
                    <g id='Group' transform='translate(0.000000, -60.000000)'>
                        <circle
                            id='Oval'
                            cx='641.5'
                            cy='187.5'
                            r='69.5'
                        ></circle>
                    </g>
                </g>
            </g>
        </svg>
    );
}
