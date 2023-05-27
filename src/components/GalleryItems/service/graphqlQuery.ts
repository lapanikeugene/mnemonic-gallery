export const graphqlQuery  = `
  query NewQuery {
    posts (first: 1000) {
      nodes {
        title
        textInfo {
          translate
          on
          mnemonic
          kun
          fieldGroupName
          description
        }
        mnemonicImage {
          imagefile {
            sourceUrl
          }
        }
      }
    }
  }
`