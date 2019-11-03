import React from "react"
import Table from "../../components/ProblemsPage/Table"

const ProblemsPage = () => (
  <section>
    <div>
      <h1>Problems</h1>
    </div>
    <div>
      <Table header={["id", "name", "time_limit", "author"]} />
    </div>
  </section>
)

export default ProblemsPage
