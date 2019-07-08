import React  from 'react';
import ShelfCard from './ShelfCard/ShelfCard';
import Button from '../../../components/Button/Button';
import classes from './Shelf.module.css';

const shelf = (props) => {
    function itemRequested(text) {
        if(props.onItemRequested){
            props.onItemRequested(text)
        }
    }

    if(props.data && props.data.length > 0){
        return(
            <ul className={`${classes.shelf} list-group list-group-flush`}>
                {props.data.map((it, ind) =>{
                    return(
                        <ShelfCard itemData={it} key={`${ind}`} itemRequested={itemRequested}/>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <div className="container-fluid" style={{textAlign: 'center', paddingTop: "40px"}}>
                <h4 style={{width: '50%'}}>
                    В этой категории пока ничего нет. Вы можете воспользоваться нашей формой заявки, чтобы мы нашли подходящий вариант.
                </h4>
                <div style={{paddingTop: '20px'}}>
                    <Button title="Оставить заявку"/>
                </div>
            </div>
        )
    }

}

export default shelf;