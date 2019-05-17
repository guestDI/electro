import React  from 'react';
import classes from './Shelf.module.css'
import {IMAGES} from './test_data'

const shelf = () => {
    return (
        <div className={classes.Shelf}>
            {IMAGES.map((img, ind) => {
                return(
                    <div key={`${ind}`} className={` ${classes.Shelf_img} ${classes.Set_bg}`} style={{backgroundImage: `url(${img.src})`, }}>
                        <a className={classes.Shelf_img__info}>
                            <div className={`${classes.Info_bg} ${classes.Set_bg}`} style={{backgroundImage: `url(${img.src})`}}/>
                            <h4>{img.title}</h4>

                        </a>
                        {/*<div className={`row ${classes.Row_centered}`}>*/}
                            {/*<div className={`col-md-8 ${classes.Col_centered} ${classes.Category_desc}`}>*/}
                                {/*/!*<p>Description</p>*!/*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                )
            })}
        </div>
    )
}

export default shelf;