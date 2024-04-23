import css from '../Feedback/Feedback.module.css'

export default function Feedback({ feedback: {good, neutral, bad }, total }){
    return(
        <div className={css.container}>
        <p>Good:{good}</p>
        <p className={css.stat}>Neutral:{neutral}</p>
        <p className={css.stat}>Bad:{bad}</p>
        <p className={css.stat}>Total:{total}</p>
        <p className={css.stat}>Positive:{Math.round((good / total) * 100)}%</p>
        </div>
    )
    }