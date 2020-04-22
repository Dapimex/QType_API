import React from "react"
import Layout from "../components/layout"

function getRequest(url) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', baseUrl + url, true);

  xhr.onload = function() {
    result = this.responseText
    alert(this.responseText)
  }

  xhr.onerror = function() {
    alert("Something wrong")
  }

  xhr.send();
}

const apis = [
  "/register?alias=Dapimex&status=true",
  "/list",
]

const baseUrl = "http://52.14.64.130:7000/dns"

let result = "Demo API response"


export default () => (
  <Layout>
    {apis.map(value => {
      return (
        <div>
          <p>{value}</p>
          <button onClick={() => getRequest(value)}>Try API</button>
        </div>
      )
    })}
    <div style={{height: 200}}>
      <p>Value is {result}</p>
    </div>
  </Layout>
)
