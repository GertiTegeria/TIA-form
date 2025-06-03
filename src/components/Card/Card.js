import classes from './Card.module.css'


export default function Cart ({children}) {
 
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}