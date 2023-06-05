import PropTypes from "prop-types";
import css from "./statistics.module.css"

function generateColor() { return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`; };

export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        {title  ? <h2 className={css.title}>{title}</h2>: ''}
       
        <ul className={css["stat-list"]}>
            {stats.map(obj => (
                <li key={obj.id} className={css.item} style={{ backgroundColor: generateColor()}}>
                    <span className={css.label}>{obj.label}</span>
                    <span className="percentage">{obj.percentage}</span>
                </li>))}
        </ul>
    </section>);
};

Statistics.propTypes = {
  title: PropTypes.string, 
  stats: PropTypes.array,
};