import React, { Component } from 'react'
import ProductService from '../../services/ProductService';

export default class CreateProduct extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           name: '',
           descp:'',
           price:'',
           brand:'',
           img:'',
           gen:''
        }
      
        this.nameHandler = this.nameHandler.bind(this);
        this.descpHandler = this.descpHandler.bind(this);
        this.brandHandler = this.brandHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.imgHandler = this.imgHandler.bind(this);
        this.genHandler = this.genHandler.bind(this)

    }

     
    nameHandler=(e) => {
        this.setState({
             name: e.target.value});
    }


    descpHandler=(e) => {
        this.setState({
           descp: e.target.value});
    }

     
    priceHandler=(e) => {
        this.setState({
             price: e.target.value});
    }
    brandHandler = (e) => {
        this.setState({
            brand: e.target.value});
    }
    imgHandler = (e) => {
        this.setState({
            img: e.target.value});
    }
    genHandler = (e) => {
        this.setState({
            gen: e.target.value});
    }

    saveProduct = (e) => {
        e.preventDefault();
        let product={
           name: this.state.name,
           descp: this.state.descp,
           price: this.state.price,
           brand: this.state.brand,
           img: this.state.img,
           gen: this.state.gen
        }
        // console.log(product)
        ProductService.createProduct(product).then(resp=>{
            this.props.history.push("/products")
        }).catch(err=>{
            console.log("Recorn not saved")
        })
    };

    cancelProduct(){
        this.props.history.push('/products')
    }

    render() {
        return (
        <div className="main-comp">
            <div className="container">
                <div className="row ">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                   <h3 className="text-center">Add Product</h3>
                       <div className="card-body">
                           <form>  
                               <div className="form-group">
                                   <label>Name: </label>
                                   <input placeholder="Name..." name="name" className="form-control"
                                      value={this.state.name} onChange={this.nameHandler} />
                                </div>   
                                <div className="form-group">
                                   <label>Description: </label>
                                   <input placeholder="Description..." name="descp" className="form-control"
                                      value={this.state.descp} onChange={this.descpHandler} />
                                </div>   
                                <div className="form-group">
                                   <label>Price: </label>
                                   <input placeholder="Price..." name="price" className="form-control"
                                      value={this.state.price} onChange={this.priceHandler} />
                                </div>   
                                 <div className="form-group">
                                    <label>Brand: </label>
                                    <input placeholder="Brand..." name="brand" className="form-control"
                                        value={this.state.brand} onChange={this.brandHandler} />
                                 </div> 
                                <div className="form-group">
                                    <label>Image: </label>
                                    <input placeholder="Image..." name="img" className="form-control"
                                    value={this.state.img} onChange={this.imgHandler} />
                                 </div> 
                                 <div className="form-group">
                                    <label>For: </label>
                                    <input placeholder="Genre..." name="gen" className="form-control"
                                        value={this.state.gen} onChange={this.genHandler} />
                                </div>  
                                <br/>
                                
                                 <button className="btn btn-success" onClick={this.saveProduct}> Save </button>
                                 <button className="btn btn-danger" onClick={this.cancelProduct.bind(this)}> Cancel </button>                    
                           </form>
                       </div>
                   </div>
                </div>
            </div>
         </div>
        )
    }
}

