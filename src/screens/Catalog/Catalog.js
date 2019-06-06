import React from 'react';
import Hoc from '../../hoc/Hoc';
import classes from './Catalog.module.css';
import SideMenu from './SideMenu/SideMenu';
import Shelf from './Shelf/Shelf';

const catalog = (props) => {
    function onItemRequested(text){
        if(props.onRequest){
           props.onRequest(text)
        }
    }

    return(
        <Hoc>
            <section id="intro" className={classes.catalog_intro_section}>
                <div className="container">
                    <div className={`row ${classes.row_centered}`}>
                        <div className={`${classes.Welcome_header} col-md-10 ${classes.col_centered}`}>
                            <h2>
                                Каталог
                            </h2>
                            <hr/>
                        </div>
                    </div>
                    <div className={`row ${classes.row_centered}`}>
                        <div className="col m-0">
                            <div className={`${classes.Subtext} col-md-8 ${classes.col_centered}`}>
                                <h4>+375 (44) 749-89-82</h4>
                                <h4>+375 (29) 775-89-68</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stuff" className={classes.how_to}>
                <div className="container-fluid">
                    <div className={`row ${classes.row_centered}`}>
                        <div className={`col-md-8 ${classes.col_centered}`}>
                            <h2>Наши инструменты</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className={`${classes.Row} row`}>
                        <div className="col col-md-3">
                            <SideMenu items={props.categories} getItems={props.getItemsByCategory} categoryId={props.catId}/>
                        </div>
                        <div className="col col-md-9 col-sm-1">
                            <Shelf data={props.items} onItemRequested={onItemRequested}/>
                        </div>
                    </div>
                </div>
            </section>
        </Hoc>
    )
}

export default catalog;