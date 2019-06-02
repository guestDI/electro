import React  from 'react';
import ShelfCard from './ShelfCard/ShelfCard';
import Button from '../../../components/Button/Button';

const shelf = (props) => {
    if(props.data && props.data.length > 0){
        return(
            <ul className="list-group list-group-flush" style={{paddingTop: '35px'}}>
                {props.data.map((it, ind) =>{
                    return(
                        <ShelfCard itemData={it} key={`${ind}`}/>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <div className="container-fluid" style={{textAlign: 'center', paddingTop: "40px"}}>
                <h4>
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