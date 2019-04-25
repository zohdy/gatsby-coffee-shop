import React, { Component } from "react"
import Title from '../Global/Title'
import Img from 'gatsby-image'

const getCategories = items => {
  let allCategories = items.map(items => {
    return items.node.category;
  });
  let uniqueCategories = new Set(allCategories);
  let categoriesAsArray = Array.from(uniqueCategories);
  categoriesAsArray = ['all', ...categoriesAsArray];
  return categoriesAsArray;
}

class Menu extends Component {
  state = {
    items: this.props.items.edges,
    coffeeItems: this.props.items.edges,
    categories: getCategories(this.props.items.edges)
  };

  handleItems = (category) => {
    let allItems = [...this.state.items];
    if(category === 'all'){
      this.setState(() => {
        return { coffeeItems: allItems }
      })
    } else {
      let filteredItems = allItems.filter(({node}) => node.category === category);
      this.setState(() => {
        return { coffeeItems: filteredItems }
      })
    }
  }

  render() {
    console.log(this.state)
    if(this.state.items.length > 0){
      return (
        <section>
          <div className="menu py-5">
            <div className="container">
              <Title title="Best of our menu" />
              { /* Categories */}
              <div className="row mb-5">
                <div className="col-10 mx-auto text-center">
                  { this.state.categories.map((category, index) => {
                    return(
                      <button
                        key={index}
                        type="button"
                        className="btn btn-yellow text-capitalize m-3"
                        onClick={() => this.handleItems(category)}
                      >
                        { category }
                      </button>
                    )
                  })}
                </div>
              </div>
              { /* Items */}
              <div className="row">
                { this.state.coffeeItems.map(({node}) => {
                  return(
                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                      <div>
                        <Img fixed={node.image.fixed} />
                      </div>
                      { /* item text */ }
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">
                            <small>{node.title}</small></h6>
                          <h6 className="mb-0 text-yellow">
                            <small>${node.price}</small></h6>
                        </div>
                        <p className="text-muted">
                          <small>{ node.description.description }</small>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
        );
    }
  }
}

export default Menu