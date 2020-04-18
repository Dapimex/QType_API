import React from "react"
import Layout from "../components/layout"
import API from "../utils/API"

function getRequest(url) {
  API.get(url)
    .then((res) => {result = res})
}

const apis = [
  "/register?alias=Dapimex&status=true",
  "/list",
]

let result = "Demo API response"


export default () => (
  <Layout>
    {apis.map(value => {
      return (
        <div>
          <p>{value}</p>
          <button onClick={getRequest(value)}>Try API</button>
        </div>
      )
    })}
    <div style={{height: 200}}>
      <p>Value is {result}</p>
    </div>
  </Layout>
)
