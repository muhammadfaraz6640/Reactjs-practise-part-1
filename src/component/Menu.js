import React, { Component } from 'react'
import {Media, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            SelectedDish : null
        }
    }
    OnDishSelect(dish){
        this.setState({ SelectedDish : dish })
    }
    renderDish(dish) {
        if(dish != null){
            return(
                <Card>
                {/* <Media left middle> */}                        
                    <CardImg object src={dish.image} width="300" height="200" alt={dish.name}/>
                {/* </Media> */}
                <Media body className="ml-5">
                            <CardImgOverlay heading>{dish.name}
                                <CardTitle>{dish.price}</CardTitle>                               
                            <p>{dish.category}</p>
                            <CardTitle>{dish.description}</CardTitle>                            
                            <button>Order Now</button>
                            </CardImgOverlay>
                </Media>
            </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <Card onClick={() => this.OnDishSelect(dish)}>
                        {/* <Media left middle>                         */}
                            <CardImg object src={dish.image} width="300" height="200" alt={dish.name}/>
                        {/* </Media> */}
                        <Media body className="ml-5">
                                    <CardImgOverlay heading>{dish.name}
                                        <CardTitle heading>{dish.price}</CardTitle>
                                    </CardImgOverlay>
                                    
                                    <p>{dish.category}</p>
                                    <button>Order Now</button>
                        </Media>
                    </Card>
                </div>
            );         
        });
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                    <div className="row">
                        {this.renderDish(this.state.SelectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;