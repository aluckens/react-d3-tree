import React from "react"
import * as d3 from "d3"

import styles from "./style.css"

export default class Link extends React.Component {

  diagonalPath(linkData) {
    const diagonal = d3.svg.diagonal().projection(d => [d.y, d.x])
    return diagonal(linkData)
  }

  render() {
    return (
      <path className={styles.linkBase} d={this.diagonalPath(this.props.linkData)}></path>
    )
  }
}