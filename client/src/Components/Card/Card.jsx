import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({attack, defense, hp, id,img,name, speed,types})=>{
  
    return (
        <div className={styles.cartita} >
           {/* <button className={style.closebutoon} 
              onClick={()=>onClose(id)}>   X
           </button> */}
            
           <h2> {name}</h2>
           <img  src={img} alt="" />
           <Link  to={`/pokedetail/${name}`}>
           <h2>Hp: {hp}</h2>
           <h2>Attack: {attack}</h2>
           <h2>Defense: {defense}</h2>
           <h2 >Speed: {speed}</h2>
           {/* <h2 >Typo: {types.join(" --- ")}</h2> */}
           </Link>

           <hr />
        </div>
     );

}

export default Card;