import React from "react"
import { Link } from 'gatsby'
import Title from "../global/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae consectetur consequatur debitis deserunt dolores error eveniet ex, illum impedit ipsam iste modi natus non nostrum perspiciatis quasi qui quia quis voluptatibus. Accusamus autem delectus doloribus et exercitationem nulla quasi soluta voluptas. A consequuntur ipsa labore officiis quas quo voluptatem?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">About page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info