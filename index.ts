import gql from "graphql-tag";
import { execute } from "./.mesh";

const COUNTRIES = gql`
  query CountriesQuery {
    countries( filter: { code: { eq: "US" } } ) {
      title
    }
  }
`

execute(COUNTRIES, {}).then(data => console.dir(data, { depth: null }))